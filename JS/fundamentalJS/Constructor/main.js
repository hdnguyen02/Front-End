

(function () {
    // tạo ra function 
    function NewPerson(name,age) {
        this.name = name; 
        this.age = age; 
    }
    

    // khi 1 function được thực hiện với từ khóa new. Chúng sẽ thực hiện các bước sau: 
    // 1 object trống sẽ được tạo ra và gán cho từ khóa this và hàm sẽ được thực thi. và sau đó 
    // là this sẽ được return => nên viết thế này khi ta cần tạo ra nhiều object. 
    // => mục dích của constructor chính là tái sử dụng. Và nên viết hoa chữ đầu tiên lên  


    let nguyen = new NewPerson('Hồ Đức Nguyên',20); 
    console.log(nguyen.age); 
    

    // cách viết không thể tái sử dụng 
    const sayHi = new function() {
        this.name = 'sayHi'; 
    }
    console.log(sayHi.name); 

    // new.target => kiểm tra xem function có được gọi với từ khóa new hay không  => KHÔNG NÊN LẠM DỤNG  

    function returnPerson(name) {
        if (!new.target) {  // nếu người dùng không sử dụng từ khóa new !
            return new returnPerson(name); 
        }
        this.name = name; 
    }

    const ducNguyen = new returnPerson('HDN'); 
    console.log(ducNguyen.name); 

    const ducNguyen1 = returnPerson('HDN');

    console.log(ducNguyen1.name); 




}) ();


(function () {
    console.log('Return Constructor'); 
    function createPerson(name,age) { 
        this.name = name; 
        this.age = age; 
        return {
         name:'ahihi'
        }
    }

    // Nểu return về object -> nhận object đó thay vì this. còn return về kiểu dữ
    // liệu nguyên thủy -> bỏ qua
    const ducNguyen = new createPerson('Hồ Đức Nguyên',30); 
    console.log(ducNguyen.name); 
}) (); 


var fullNameVar = 'Hồ Đức Nguyên khai báo var';  // Biến var khai báo ở global -> trở thành thuộc tính của window 
let fullNameLet = 'Hồ Đức Nguyên Khai báo Let'; 

// tương tự với function 

function sayhi() {
    alert ('say Hi'); 
}


// Học về global object 
(function () {

    // thử khai báo bên trong phạm vi này 
    function sayHello() {
        alert('say Hello'); 
    }
    console.log('Global Object');
    // là 1 object cung cấp cho ta các thuộc tính và object cho ta ở tất cả mọi nơi 
    // ở brower thì đó là window , còn ở nodejs thì đó là global 
    console.log(globalThis);  
    console.log(window); 
    // tương đương như nhau 

    // các biến được khai báo với từ khóa var -> sẽ trở thành thuộc tính của window 


    console.log(window.fullNameVar); 
    console.log(window.fullNameLet); 
    window.sayhi(); // sayhi Đã trở thành 1 method của object global
    // window.sayHello();   // say Hello Không trở thành 1 method của window vì không phải global 


    // Nếu như bạn có 1 thuộc tính cực kì quan trọng hãy lưu nó vào trong object global 
    window.currentUser = {
        myName:'Hồ Đức Nguyên khai báo trong curentUser',
    }

    


}) (); 

// sử dụng thuộc tính bên ngoài 
alert(currentUser.myName); // currentUser có mặt ở khắp mọi nơi trong chương trình và là 1 thuộc tính 
// của current object 


// Nên hạn chế sử dụng biến toàn cục nhiều. 

