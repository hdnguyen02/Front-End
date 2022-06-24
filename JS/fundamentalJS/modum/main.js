
/*
    MODULES là gì 
    Trong lập trình khi bốc tách cái lớn thành nhiều cái nhỏ hơn được gọi là module     
    -> khi chương trình quá lớn chẳng hạn, ta có thể chia tách ra nhiều fie -> module
    -> trong module có thể có nhiều thứ : biến,class,object,function... Và những thứ 
    này trong 1 file sẽ có chung 1 một mục đích 

*/



// console.log('this trong file main (không có type module)',this) // -> window 



// import fnDefault from './sayHi.js';  // import kiểu này chính là import default   
/* import {ahihi} from './sayHi.js'; // import bình thường nên phải sử dụng { } ->không có ahhi -> lỗi 
console.log(ahihi);  */


// fnDefault(); 

//import {hic,setHic} from './sayHi.js'



// thử thay đổi giá trị xe 
// hic = 'thay đổi value hic';  // bị ăn lỗi ngay -> khi import ra {hic} -> tương tự với const hic  
// vì vậy không thể thay đổi giá trị -> Nhưng không hẳn là khi import ra sẽ là const mà ta chỉ có thể
// thay đổi giá trị bên chính cái module đã export ra hoặc đặc tất cả thông qua 1 object để có thể thay 
// đổi giá trị từ đây  


//setHic('giá trị bị thay đổi'); 


 



// nhận 3 biến (1 , 2 , 3) cùng lúc  

import  * as objectAhihi from './sayHi.js'

// thử thay đổi giá trị xem sao  
// objectAhihi.bien1 = 'thay đổi giá trị biến 1';  => vẫn không thể thay đổi giá trị 

// -> cách hay nhất vẫn là nhét tất cả vào trong 1 object sau đó export ra 



import fullName from './fileJS/index.js'

// Hiểu rõ như sau: 


console.log(fullName,'trong file main.js');  

 

 

