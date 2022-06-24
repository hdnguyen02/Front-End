(function(){
    console.log('Cách phân biệt Rest và Spread')
    /* 
    toán tử rest thao tác với tên biến. còn toán tử spread thao tác với giá trị của biến 
    Hoặc toán tử rest nằm bên trái so với phép gán, Ngược lại toán tử spread nằm bên phải  
    */

    // rest -> Lấy phần còn lại gôm vào 1 cái array. 

    let arr = [1,2,3,4]  
    let [...cloneArr] = arr  // khi sử dụng toán tử [] thì cái array sẽ biến thành các phàn tử riêng biệt 

    // sử dụng trên function
    function sum(...arg) {  // chỗ này là toán tử rest -> nhận được 1 array
        let total = 0 
        for (let value of arg) {
            total += value
        }
        return total
    }

    let total = sum(1,2,3,4)   //  trên kia đang nhận 1 aray. 

    
    // toán tử Spread ngược lại so với toan tử rest -> phân tách ra 
    console.log(...arr)  //   truyền đối số -> không phải rest  
}) (); 

(function () {
    console.log('method call function') 
    let myInfo = {
        myName:'Hồ Đức Nguyên',
        age:20, 
        logInfo() {
            console.log(`${this.myName} ${this.age}`)  // this -> myInfo !
        }
    }

    // in ra đối tượng this 
    console.log(this);   // window => object global 
    this.myName = 'Nguyễn Hoa'   // chỉ có từ var khi khái báo global mới thành thuộc tính của window 
    this.age = 25

    console.log('Sử dụng với method của myInfo')
    myInfo.logInfo() 
    console.log('Bị sai ngữ cảnh')  
    var teacher = myInfo.logInfo 
    teacher() // in ra là Nguyen Hoa 25 -> giải thích 
    // vì lúc này this trong 1 function không ở chế độ user strict thì là global  ->  window 
    // cách khác phục là ta sẽ ràng buộc this lại thành myinfo 
    console.log('Ràng buộc this thành myInfo')
    teacher.call(myInfo) 


    // Hãy thận trọng khi làm việc với this -> vì tùy theo ngữ cảnh mà this sẽ trỏ về 

}) (); 

(function(){
    console.log('Ví dụ khác về call') 
    // we'll make worker.slow caching
    let worker = {
        someMethod() {
            return 1
        },
    
        slow(x) {
            return x * this.someMethod() // (*) this trong ngữ cảnh này là worker 
        }
    };
    
    // same code as before
    function cachingDecoratorBefore(func) {
        let cache = new Map()
        return function(x) {
        if (cache.has(x)) {
            return cache.get(x)
        }
        let result = func(x)// (**)
        cache.set(x, result)
        return result
        };
    }
    
    console.log(worker.slow(5))
    console.log('Sai ngữ cảnh')
    worker.slow = cachingDecoratorBefore(worker.slow)
    //console.log(worker.slow(10))  //  Không chạy được -> vì lúc này this.someMethod() đang là 
    // undefined -> không thể call


}) (); 

(function () {
    console.log('Sữa hàm úng dụng call')
    let worker = {
        someMethod() {
            return 1
        },
    
        slow(x) {
            return x * this.someMethod() // (*) this trong ngữ cảnh này là worker 
        }
    };

    // thêm 1 object khác cũng tương tự nhưng nhiều method hơn 
    let worker2 = {
        myName:'Hồ Đức Nguyên', 
        age:20, 
        someMethod() {
            return 1
        },
    
        slow(x) {
            return x * this.someMethod() // (*) this trong ngữ cảnh này là worker 
        }, 
        
        sayHi() {
            console.log('ahihi')
        }
    }
    
    // same code as before
    function cachingDecoratorBefore(func) {
        let cache = new Map()
        return function(x) {
        if (cache.has(x)) {
            return cache.get(x)
        }
        let result = func.call(this,x) // *
        cache.set(x, result)
        return result
        }
    }
    
    // worker2.slow = cachingDecoratorBefore(worker2.slow)
    // console.log(worker2.slow(100))

    // dễ hiểu như sau: (*) đang call với this. -> this ở đây sẽ phụ thuộc vào biến tham chiếu
    // gọi tới hàm này
    // ví dụ 
    console.log('ăn lỗi')
    let f = cachingDecoratorBefore(worker2.slow)
    // khi gọi tới hàm f() -> ăn lõi.
    // lúc này this trong hàm f chính là window -> window không có hàm someMethod -> ăn lỗi 
     
    // khi sử dụng 1 object 
    worker2.slow = cachingDecoratorBefore(worker2.slow)
    // lúc này khi mà hàm worker2.show được gọi -> từ khóa this chính là worker2  
    // Những method từ khóa this sẽ là object mà method đó thuộc về 
    // còn với các function không ở chế độ user strict thì this là global 
    
    

}) (); 


(function () {
    console.log('Thực nghiệm từ khóa this')

    function logThis() {
        console.log(this)
    }
    logThis() // in ra window   
    
    // trong function nếu như có từ khóa this -> căn cứ vào thằng tham chiếu đến nó mà gọi  
    const myInfo = {
        myName:'Hồ Đức Nguyên', 
        age:20, 
        weight:63 
    }

    // cho func này tham trị tới 
    myInfo.loger = logThis 
    myInfo.loger()  //  Thằng this lúc này lại là myInfo 

}) (); 


(function(){
    console.log('Ví dụ về mượn hàm')
    // với các function có 1 object tên là arg 
    function sum() {
        // lặp qua doi so !  
        let total = 0 
        
        // Hãy sử dụng forEach để có thể lặp qua object này ! 
        // for Each trong các được viết lặp qua tất cả các chỉ số thôi -> mượn hàm  
        Array.prototype.forEach.call(arguments,function (item) {
            console.log(item)
        })

        // thử mượn với hàm ma
        const newArr = Array.prototype.map.call(arguments,function(item) {
            return item + 100
        })
        console.log(newArr)
        return total 
    }

    // mượn method 
    let myInfo = { 
        myName:'Hồ Đức Nguyên', 
        age:20,  
        sayHi() {
            console.log(`${this.myName} ${this.age}`)
        }
    }

    // 1 object khác cũng muốn Có phương thức sayHi 
    let myTeacher =  {
        myName:'Kì Thư', 
        age:50,
    }
    
    myInfo.sayHi.call(myTeacher)
}) (); 









    
    

