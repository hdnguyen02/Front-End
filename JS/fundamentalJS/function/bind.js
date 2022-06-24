let user = {
    firstName: "John",
    sayHi() {
      console.log(`${this.firstName} hello!`)
    }
  };

/* 
khi sử dụng những hàm khác và bỏ các method của object vào thì this không giống nhau 
Ở đối số của setTimeout nhận 1 function -> callback.  
*/
setTimeout(user.sayHi,3000); //  lúc này this = window -> đang theo ngữ cảnh của setTimeout


// Các cách giải quyết vấn dề 
setTimeout(function(){
    user.sayHi(); 
},2000); 

// bọc nó vào 1 cái function -> this = user. 
// Nhưng cách này chưa hay. Vì user.sayHi đã là function. Nếu bọc vào 1 function khác thì không đẹp

setTimeout(user.sayHi.bind(user),5000); 

// và bind() trả về 1 hàm mới -> tham trị  -> ràng buộc thisArg với function được trả về 



// làm bài tập 
(function(){
  console.log('Bài tập 1')
  function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  // askPassword(user.login.bind(user,true), user.login.bind(user,false)); // ?
}) (); 