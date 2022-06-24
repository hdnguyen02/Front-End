


// window.user = 'hdnguyen';   // khi ta tạo ra như thế này -> tất cả các file js khác đều có thể sử dụng được 
// Nhưng khiến khích sử dụng cách này -> user là tên tự đặc 


// Mỗi module sẽ có phạm vi khác nhau : cái này được gọi là top-level scope 
// Việc khai báo biến bên này nhưng không export ra thì file khác không thể sử dụng dudwjowjc  



/* export function sayHi() {
    console.log("hihi"); 
} */


// import {person} from './sayHello.js'

// import {VARIABLE_SCOPE} from '../scope/main.js'; // có thể import 1 cái biến ở 1 nơi nào đó không nằm
// trong project hiện tại  


// person.name = "hello bro -> 3 que"; 

// console.log(person.name,'trong file sayHi.js'); 


// thử export default ra ngoài 
/* let valueDefault = function () {
    console.log('chạy hàm default trong sayHi'); 
} */

// export default valueDefault  // chỉ có 1 lần export default thôi -> bên kia sử dụng tên gì cũng được 


// import  sayHello  from './sayHello.js'; -> ăn lỗi ngay -> cái này là cách export default 

// /import {sayHello} from './sayHello.js'; 


// alert(sayHello + 'file sayHi.js');

// phải có type="module" thì mới có thể sử dụng được import -> còn export không cần phải gắn type vào 

// export let hic = 'hic'; 


/* export function setHic(value) {
    hic = value; 
} */







// export ra nhiều biến cùng 1 lúc 
export let bien1 = 1; 
export let bien2 = 2; 
export let bien3 = 3; 


