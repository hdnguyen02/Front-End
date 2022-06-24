
let obj = {}
console.log(obj)

// Object có prototype tham chiếu tơi Object.prototype 

console.log(obj.__proto__ === Object.prototype)

console.log(obj.toString())  // được lấy từ Object.prototype


// tương tự như mô hình khi 1 object được tạo ra hôm trước. 

/* 
                prototype
Object             ->             Object.prototype
                                    
                                    |^| __proto__ 

                                  obj = {}
                                
*/



/* Array, Date, Functionlà class hoặc func constructor đều có property prototype.
Và phần [[prototype]] của các class hay func constructor này đều tham chiếu đến property 
prototype của Object -> lý giải cho việc tất cả mọi thứ trong Javascript đều được kế thừa
từ object 

property protopyte và [[prototype]] là hoàn toàn khác nhau. property protopyte đang nói 1
property của các class hoặc func constructor. [[prototype]] là các thuộc tính của object 
và có cơ chế ẩn đi. Khi các object được new ra thì [[prototype]] của các object sẽ tham chiếu
đến property prototype. -> đó là cách mà các object được tạo ra có thể kế thừa được các method

các object được tạo ra từ Array hay Object,Date... có thể sử dụng chung các method. Nhưng nếu
các Object,Array,Date... đã tồn tại method thì sẽ sử dụng chứ không lấy các method được kế thừa

Theo đặc tả, tất cả các prototype đều có Object.prototype phía trên cùng. Đó là lý do 
tại sao một số người nói rằng "mọi thứ kế thừa từ các Object".

các kiểu dữ liệu như string,number,bool có thể sử dụng property nhưng chúng không phải là 
object. -> string,number,bool được các object wrap tạm thời để sử dụng các hàm tích hợp của 
constructor và sau đó object wrap này sẽ biến mất.  
null và undefired không có Constructor bao bọc  */

let number = 5;


/* có thể chĩnh sữa prototype -> các object khác cũng có thể sử dụng -> việc này được coi 
là 1 ý tưởng tồi 
Trong lập trình hiện nay, chỉ có một trường hợp mà việc sửa đổi các prototype được 
chấp thuận. Đó là polyfilling. */


