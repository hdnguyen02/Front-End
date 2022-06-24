

// Học về clouse  


// khái niệm 

/*
Clouse là sự kết hợp của 1 fucntion được đóng gói cùng nhau (kèm theo) với các tham chiếu đến 
trạng thái xung quanh của nó (Kèm theo môi trường hàm). Nói cách khác, một Clouse cung cấp cho bạn 
quyền truy cập vào phạm vi của một chức năng bên ngoài từ một chức năng bên trong. Trong JavaScript, 
các Clouse được tạo mỗi khi một hàm được tạo, tại thời điểm tạo hàm.
*/

// Clouse cung cấp cho bạn 1 quyền truy cập vào phạm vi của 1 chức năng bên ngoài từ 1 chức năng bên trong 
// -> khai báo 1 fucntion bên trong 1 function 
// Hàm bên trong sẽ có khả năng truy cập vào các biến bên ngoài của cái function đã đóng lại 


// tạo ra function kiểu mới : 

function f(sayHi = function() {}) {
    alert(sayHi.name); // sayHi (works!)
  }
  
  f();
console.log(f.name); 

// hàm có 2 thuộc tịnh tiêu biểu như sau
console.log(f.length); // trả ra số tham số 







