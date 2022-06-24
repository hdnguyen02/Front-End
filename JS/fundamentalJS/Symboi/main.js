(function(){
    const myInfo = {
        "sayHello":function(){
            console.log("sayHello"); 
        }
    }


    // trong 1 object. chỉ có 2 kiểu data type được lấy làm key; symbol và string 
    // Những cái như number sẽ tự chuyển đổi sang string 

    // mỗi symboi là duy nhất 

    let id1 =  Symbol("id"); 
    let id2 =  Symbol("id"); 
    
    if (id1 == id2) {
        console.log("id1 == id2");
    }

    // Symbols don’t auto-convert to a string => toSring 
    console.log(id1); 


    // primitive unique value
     
})();


(function () {
    console.log("“Hidden” properties"); 
    let user = { // belongs to another code
        name: "John"
      };
      
      let id = Symbol("id343432"); // id2 chỉ là mô tả -> không liên quan gì cả 
      
      // tạo ra symboi 
      let symboi = Symbol("Mô tả symboi"); 

      user[symboi] = "Đây là symboi"; 

      console.log(user); 
      
      
      user[id] = 1;  // đang thêm thuộc tính  
      
      
     // alert( user[id] ); // we can access the data using the symbol as the key



})(); 


(function(){
    let id = Symbol(); 
    let age = Symbol(); 

    let user = {
        id:"Hồ Đức Nguyên",
        age:20
    }
    user[id] = "Thuộc về symboi"; 
    user[age] = "age Symboi"; 
    const key = "id"; 

    console.log(user.id);  // như này mới truy cập được value Hồ Đức Nguyên 

    console.log(user.age); 

    // tạo key bằng symboi 

    let myInfo = {
        [id]:'001', 
        fullName:'Hồ Đức Nguyên'
    }

    // lúc này id đang là symboi

    console.log(myInfo); 

    console.log('sau khi ghi đè'); 
    
    myInfo[id] = 'ghi đè symboi'; 
    console.log(myInfo); 


    // ghi đè ở đây tức là không thể đè lên thuộc tính có trước đó của object. 
    // ví dụ : nếu như object đó dã có id. và id symboi vào sẽ là hoàn toàn khác nhau 
    // còn nếu như sài string -> thì bị ghi đè thuộc tính cũ đi 
    

    // for...in và keys bỏ đều bỏ qua symboi -> bên thứ 3 không cang thiệp vào symboi 
    // Nhưng hàm assign 

})(); 



(function() {
    // cach co the su dung chung 1 symboi 

    let symbolGlobal = Symbol.for("id");
    
    // luc nay symboi da la global -> cac symboi khac co the su dung chung 
    let symboi = Symbol();  // la di nhat 

    const object = {
        [symboi]:'Hồ Đức Nguyên', 
        age:20
    }
    const myInfo = {
        [symboi]:20,
        age:'Hồ Đức Nguyên'
    }
    console.log(object,myInfo); 

}) ();


(function() {
    // Tạo ra các symboi khác tên nhưng vẫn chung 1 symboi 
    let id1 = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
    let idAgain = Symbol.for("id");

    if (id1 == idAgain) {
        console.log('đúng');   // Đúng dựa trên for(key); 
    }

    // dưa trên cái key chú không hề dựa trên tên. 2 cái cùng for(key) => là 1 cái 
    console.log(Symbol.keyFor(id1));   // trả về cái key 
}) (); 


// một vài hàm mới lạ của Symboi 
(function() {
    let object = {}; 
    console.log(typeof (+object));  // number -> nhưng mà là NaN 
    console.log(typeof (object + ''));   // chuyển về string với value là "[object Object]"


    // 1 object với Symboi toPrimitive
    let objectConvert = {
        [Symbol.toPrimitive](hint){
            if (hint  == 'number') {
                return 10; 
            }
            else if (hint == 'string'){
                return 'hello'; 
            }
            return true; 
        }, 
        sayhi() {
            console.log('ahihi'); 
        }
    };


    // trong đó có hàm Symboi.toPrimitive -> có sẽ tự chuyển đổi về các giá trị nếu
    // ta ép kiểu object tương ứng thay vì là ta ép kiểu sang number sẽ về thành NaN của ví dụ trên 

    let result = +objectConvert; // chuyển đổi về dạng number -> return về 10 
    // hành động này không được xem là gán object mà ta chỉ đang điều chỉnh object về dạng dữ liệu 
    // nguyên thủy thôi 




}) (); 


// thử add symboi vào trong function của ta và xem bên ngoài nó có không nhé 


(function () {
    let id = Symbol('<Nguyên>'); 
    let myPrivate = Symbol('<Private'); 
    const myInfo = {
        myName:'Hồ Dức Nguyên', 
        myAge:20, 
        [myPrivate]:function() {
            console.log('Hello'); 
        }
    };

    function addSymboi(myInfo,idSymboi) {
        // thêm vào 1 symboi 
        myInfo[idSymboi] = 'Thuộc về symboi'; 
        console.log(myInfo); 
    }
    
    for (let key in myInfo) {
        console.log(key); 
    }

})(); 


// Tóm lại : 
//Symboi là 1 kiểu dữ liệu nguyên thủy với tính năng nó là 1 id -> duy nhất 
// được tạo ra bởi method Symbol()
// Vì là duy nhất nên muốn biến nó thành tham chiếu thì sài Symboi.for() 

// Symboi có 2 tính năng chính : 
// thứ nhất : Che dấu đi thuộc tính. -> tránh được for... rồi tránh được keys. Nhưng không trái khỏi
// khi clone 1 object 
// Thứ 2 thay đổi hành vi của object thông qua 1 vài tính năng như là iterble, toPrimitive


// có hai hàm có thể lấy ra liệt kê các thuộc tính của : 