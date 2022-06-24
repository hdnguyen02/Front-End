// Tìm hiểu về scope của const,let,var  
// với var   -> Có tuổi đời sớm nhất 

/*
 console.log(global); // in ra undefined -> theo cơ chế hoisting -> nhấp biến glabal lên top -> và khởi tạo là không sác định 
var global = "có phạm vi toàn cục"; 
console.log(global);  
*/

function logGlogal () {
    console.log(global);   // có thể truy cập vào cả biến global -> glabal đang ở scope global 
}

// với từ khóa var người dùng có thể tái định nghĩa biến 
// ví dụ : 
var reUser = 10; 
var reUser = "Tái định nghĩa";  // không vấn đề gì cả 


// với từ khóa let : là sự cải tiến so với từ khóa khai báo var. 
// phạm vi : trong cặp {} khi khai báo 
// console.log(scopeBlock);  // bị ăn lỗi ngay
let scopeBlock = 'phạm vi nằm ở cặp {}'; 
// thử tái định nghĩa biến let 
// let scopeBlock = 'tái định nghĩa biến let'; -> bi ăn lỗi ngay
// console.log(scopeBlock); 
// function logScopeBlock() {
//     console.log(scopeBlock); 
// }


/* 
nếu như biến let khai báo bên ngoài thì khá giống biến var. chỉ có điều nó không thể 
tái định nghĩa. Và khi sử dụng biến đó trước khi khái báo => lỗi -> không có cơ chế hoisting 
có thể đặc tên trùng nhau nhưng phải khác phạm vi : ở điểm này khá giống C++ 
=> ưu tiên biến trong block trước. Còn nằm cùng 1 block thì không có 2 biến let trùng nhau 
*/

// let bienA = "biến A"; * 
/* function logBienA () {
    let bienA = "Vẫn là biến A Nhưng khai báo bên trong block khác";  ** 
    console.log(bienA);  // in ra biến A ở dòng ** 
} */
// console.log(bienA); // in ra biến A ở dòng (*)
// đối với const có các thuộc tính của let Nhưng có điều với const không thể cập nhập lại giá trị 

// for (var i = 0; i < 10;i++) {
//     console.log(i);
// }
// console.log('sau khi thoát vòng lặp'); 
// console.log(i);   // vẫn có thể sử dụng biến i 

// console.log('biến let trong vòng lặp'); 
// for (let j = 0; j < 10;j++) {
//     console.log(j); 
// }
// console.log(j);   // ăn lỗi ngay

// về cơ bản : biến let giống với biến cục bộ của C++ 
// biến var : khá giống với biến cục bộ C++  


// export const VARIABLE_SCOPE = "thuộc về trong main scope"; 


let person = 'Hồ Đức Nguyên'; 

function setPerson(person,newName) {
    person = newName; 
    console.log(person,'trong function setPerson'); 
}

setPerson(person,'Đã Bị Thay Đổi');  

console.log(person);   // Không hề bị thay đổi -> tham trị 
console.log(bienChuaKhaibao,'chưa có khai báo');   // xử dụng 1 biến co khai báo nhưng khai báo
// phía dưới -> in ra là chưa xác định 
var bienChuaKhaibao = 'ahihi'; 

var x = 100;
function hoist() {
  console.trace(x,'trong function hoist');  // Chỗ này sẽ log ra undefined  
  // Bởi vì theo cơ chế hoising : biến và function khi được khai báo ( Với biến thì không định nghĩa)
  // sẽ được đưa lên top cái so với scope đó. Vì vậy ở đây function này đã được đưa lên cao hơn 
  // so với biến x -> đó là lý do tại sao lúc log ra -> undefined 
}
 

hoist();

/* function testScope() {
    var bienTrongFn = 10;
}

console.log(bienTrongFn,'in bên ngoài'); */


// Có 2 loại scope trong js  
// global scope và 

var x = "declared outside function";
function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}
exampleFunction();
console.log("Outside function");
console.log(x);



// Tổng kết 
/* 

Keyword	      Scope	       Hoisting	  Can Be Reassigned	     Can Be Redeclared
var	       Function scope	  Yes	        Yes	                   Yes
let	       Block scope	      No	        Yes	                    No
const	   Block scope	      No	        No	                    No 

*/