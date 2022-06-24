console.log('function'); 

(function (){

    console.log('Decorators');
    /* 
    javascript hỗ trợ rất nhiều cho function. Các function của ta rất linh hoạt,có thể dùng  
    function làm đối số, sử dụng funcfion tạo ra object, Ngoài ra ta còn có thể Decorators( custom )
    function 
    */
    
    /* 
    với function slow(x), Luôn trả về 1 kết quả cố định, nói cách khác, Đối với cùng 1 x luôn trả về 
    1 kết quả 
    */

    /* 
    nếu hàm này được chạy nhiều lần, ta muốn ghi nhớ lại cache dể có thể ít tiêu tốn thời gian hơn, để
    tính toán lại, Nhưng thay vì thêm chức năng cache vào trong slow(x) ta có thể bọc nó bằng 1 function 
    khác lại  
    */

    function cachingDecorator(func) {
        let cache = new Map(); 
        return function(x) {
            // kiểm tra xem trong x có chưa 
            if (cache.has(x)) {  // có rồi
                return cache.get(x); 
            }
            let result = func(x);   // chưa có !
            cache.set(x,result);
            return result;  
        }
    }
   

    // ví dụ với 1 function 
    function slow(x) {
        // there can be a heavy CPU-intensive job here
        alert(`Called with ${x}`);
        return x;
      }

      //  tạo ra 1 function mới từ slow 
      const getX = cachingDecorator(slow); 

    //   getX(1); 
    //   getX(2); 
    //   getX(3); 
    //   getX(1); 



      // cái này có cả tính clouse trong js. Ngay tại chỗ map -> nó đã là private  

      // các công dụng : có thể tái sử dụng trên nhiều function khác 
      // logic về cache đẫ bị tách ra. không tăng độ phức tạp cho hàm slow(x)
      // có thể kết hợp nhiều decorator lại với nhau 
}) ();  


(function () {
    let worker = {
        someMethod() {
          return 1;
        },
      
        slow(x) {
          // scary CPU-heavy task here
          alert("Called with " + x);
          return x * this.someMethod(); // (*) => diễn tả 1 method thuộc về object worker
        }
    } 

    // lúc nãy ta chỉ decorator function từ 1 function khác. Nhưng sẽ gặp rắt rối khi thực 
    // hiện trên các object 
    function cachingDecorator(func) {
        let cache = new Map();
        return function(x) {
          if (cache.has(x)) {
            return cache.get(x);
          }
          let result = func(x); // (**)
          cache.set(x, result);
          return result;
        };
      } 


      // làm việc với method origin 
      // custom lại show 
      /*   => ăn lỗi vì this.someMethod() không có trong function cachingDecorator
      worker.slow = cachingDecorator(worker.slow);
      worker.slow(2); 
      */ 

      // -> có thể giải quyết nhờ vào hàm call 

      // ví dụ 
      /* 
      const myInfo = {
          name:'Hồ Đức Nguyên', 
          age:20
      }
      function sayHi() {
          console.log(`say hi ${this.name}`); 
      }
      // gọi ra function sayHi 
      sayHi.call(myInfo);  // đối số thứ nhất -> object sẽ thay thế cho this  
      */

      function cachingDecorator2(func) {
        let cache = new Map();
        return function(x) {
          if (cache.has(x)) {
            return cache.get(x);
          }
          let result = func.call(this, x); // "this" is passed correctly now
          cache.set(x, result);
          return result;
        };
      }
      

      // Hiểu như sau: lúc nảy func.call(this,x); 
      // có nghĩa là gì 
      worker.slow = cachingDecorator(worker.slow);

      
      // có 1 hàm tương tự với hàm: call là apply
      /* 
      func.call(context, ...args);
      func.apply(context, args); 
      */
     // với apply -> nhận 1 array 

     




}) (); 


(function () {
    console.log('Vay mượn method'); 

    function hash() {
        // return `${arguments[0]},${arguments[1]}`
        return [].join.call(arguments)
    }

    console.log(hash(1,2)); 


}) (); 


(function(){
    // vay mượn method 
    // tạo ra array like 
    let arrayLike = {
        0:0, 
        1:1, 
        2:2,
        3:3,
        length:4
    }
    // thực hiện lặp qua -> 

    // đếm số lần gọi của 1 function 
    function sayHi() {
      // custom thuộc tính của 1 hàm 
      sayHi.count++; 

      console.log('sayHi call'); 

    }
    // khởi tạo 
    sayHi.count = 0; 
    sayHi(); 
    console.log(sayHi.count); 
    sayHi(); 
    console.log(sayHi.count); 

    // Lưu ý: thuộc tịnh có trong function không phải property và ngược lại. là 2 cái song song với nhau 
    // ta có thể ứng dụng clouse vào như sau 
    function makeCouter() {
      // tạo ra 1 biến couter 
      let couter = 0; 
      return function () {
        // chod dếm ++ lên
        couter++; 
        console.log(couter); 
        
      }
    }

    let dem = makeCouter();  // tự động tạo ra 1 khu vực => trả ra func 
    dem(); 
    dem(); 

    console.log('cách viết khác'); 
    // cách viết trên khiến ta không thể truy cập vào vùng couter => vì theo tính chất clouse 
    function makeCouter2() {
      // tạo ra 1 thuộc tính của couter 
      couter.dem = 0;  // khởi tạo !
      function couter(){
        return couter.dem++;  // trả ra 1
      }
      return couter; 
    }
      
    let dem2 = makeCouter2();  // trả ra cho nó 1 môi trường 
    // ngoài ra ta còn có thể can thiệp vào 
    dem2.dem = 10; 

    console.log(dem2()); 
    console.log(dem2()); 

   //  Named Function Expression

  
   

    
}) (); 


(function(){
  console.log('Named Function Expression') 
   // có nghĩa là 1 function có được gán và có tên 
   // ví dụ: 
   let sayHi = function() {
     console.log('sayHi Call'); 
   }
   // đây là cách viết thông thường  -> còn đây là cách viết khác 
   let sayHello = function func() {
     console.log('say Hello Call'); 
   }
   sayHello(); 

   // mục đích của cách viết này để hàm gì -> cho phép nó tham chiếu đến chính nó 
   // Nó không thể được nhìn thấy ở bên ngoài function 

   // ví dụ : => tự gọi chính nó => thử sử dụng đệ quy xem sao 
  let increase = function tangThem (dem) {
    // function sẽ chạy và in ra từ dem -> 20 
    if (dem === 20) return; 
    console.log(dem); 
    tangThem(++dem); 
  }



  // -> tại sao lại cần phải có tên thứ 2 trong khi ta có thể gọi lại chính increase  
  // bởi vì trong quá trình khác ta có thể gán increase cho 1 tên khác -> lúc này phải rắc rối đi đổi tên 
  // gán cho 1 hàm gán xem sdao 
  let hamKhac = increase; 
  console.log(hamKhac.name);  // lúc này tên sẽ dựa teho tên nọi bộ 


  // làm song bài tập qua phần bài tập của phần function tiếp 



}) ();

(function () {
  console.log('Làm bài tập'); 
  function makeCounter() {
    // trong hàm này 
    // tao ra 1 thuoc tinh trong nay 
    let number = 0;  // khoi tao 

    function counter () {
      // cho bien number tang len 1 
      return ++makeCounter.number;
    }
    // thu tao ra function voi couter 
    counter.set = function(newValue) {  
      makeCounter.number = newValue; 
    }
    // hoac viet 1 ham giam xuong don vi 
    counter.decrease = function() {
      return --makeCounter.number; 
    }
    return counter; 
  }

 
  // ngoài thêm thuộc tính cho 1 function ta còn có thể thêm method cho fucntion 
  function sayHi() {
    console.log('sayHi'); 
    // trong function này tạo ra thêm 1 function 
    
  }
  console.log(sayHi); 

  sayHi.sayHello = function() {
    console.log('sayHello'); 
  }
 






}) (); 

(function () {
  console.log('Bài tập trang trí function'); 
  // function work(a, b) {
  //   return a + b; 
  // }

  // function wrapToTalCall(func) {  // trả ra 1 hàm với có tính năng lưu lại số lần gọi
  //   let calls = []; 


  //   return function (a,b) {
  //     let tempStr = `call ${a} + ${b}`; 
  //     calls.push(tempStr); 
  //     console.log(calls); 
  //     return func(a,b); 
  //   }
   
  // }

  // let thuNghiem = wrapToTalCall(work); 
  // thuNghiem(2,3); 
  // thuNghiem(1,2); 

  function work(a, b) {
    alert( a + b ); // work is an arbitrary function or method
  }

  // viết 1 function bao bọc lại và thay đổi hành vi của fucntion kia 
  
  function decoratorFuncWork(myFunc) {
    function wraper(a,b) {  // nhận đối số chỗ này !~
      wraper.calls.push(`${a} + ${b}`); 
      myFunc(a,b); 
    }
    wraper.calls = []; 
    return wraper; 
  }
  // let thuNghiem = decoratorFuncWork(work); 
  // thuNghiem(1,2); 
  // thuNghiem(1,4); 
  // console.log(thuNghiem.calls); 

  // let thuNghiem2 = decoratorFuncWork(work); 
  // thuNghiem2(5,6); 

  // console.log(thuNghiem2.calls); 



}) (); 


(function(){

  // tạo ra method  
  let obj = {
    work(a, b) {
      alert( a + b ); // work is an arbitrary function or method
    }
  }
  
  function spy(func) {

    function wrapper(...args) { // toán tử rest -> vì cái này là arg -> biến -> thao tác trên biến -> bỏ bao nhiêu cũng được. -> lấy hết !
      // using ...args instead of arguments to store "real" array in wrapper.calls
      wrapper.calls.push(args);
      return func.apply(this, args); // chỗ này hơi khó hiểu ( this là gì )
      // chỗ này thực ra có thể viêt thành func(...args); -> KHÔNG PHẢI TOÁN TỬ REST 
      // nhưng là vì TA MUỐN CÁI NÀY HOẠT ĐỘNG TRÊN CẢ VỚI METHOD THUỘC OBJECT
    }
  
    wrapper.calls = [];  // khởi tạo 1 cái array 
  
    return wrapper;
  }

  // obj.work = spy(obj.work);
  // obj.work(2,4); 
}) (); 

// viết ra 1 function thay đổi hành vi 1 hàm thực thi hàm sau ms dây 

(function(){
  console.log('Bài Tập 2') 
  // viết function sayHi 
  function sayHello() {
    console.log('Say Hello Hồ Đức Nguyên'); 
  }

  function delay(func,ms) {
    // hàm này sẽ custom lại -> dựa vào settimeout 
    // viết ra 1 hàm 
    function wraper() {
      setTimeout(func,ms); 
    }
    return wraper; 
  }

  sayHello = delay(sayHello,3000);
  sayHello(); 


}) (); 