

// Câu lệnh switch trong js 


// sử dụng để thay thế cho if nếu như if có nhiều câu lệnh so sánh  

const compare = "Hồ Đức Nguyên"; 

switch(compare) {
    case "Hồ Đức Nguyên" :
        console.log("Chính xác tên!"); 
        break; 
    case "Hồ Thanh Nhật" : 
        console.log("Không Chính Xác!");
        break;  
    default: 
        console.log("Không Cần biết là ai!"); 
}

// Trong các case nên có câu lệnh break để nó chỉ thực thi song cai case đó rồi dừng 
// Nếu không thì nó sẽ tiếp tục thực thi các các phía dưới mà không cần phải so sánh case
// có phù hợp hay không => nên đặt ở phía dưới các câu lệnh cần thực hiện 



// Theo if 
/* if (compare == "Hồ Đức Nguyên") {
    console.log("Chính xác"); 
}
else if (compare == "Hồ Thanh Nhật") {
    console.log("Không Chính Xác"); 
}
else {
    console.log("Không Chính Xác")
}

 */

console.log(typeof +"1"); 


// thêm dấu + vào trước string -> number 

// Có thể tổ chức nhiều case sử dụng chung đoạn code 




// Học về toán tử ?? 


// a ?? b 
// Nếu như a là define (không null không undefined), Ngược lại là b 

// viếc như sau:  

let value = 5 ?? 10;  // trả về 5 bởi vì 5 là define
console.log(value); 


let notValue = null ?? "Trả về khi phía trước undefined"; 
console.log(notValue); 


// a ?? b < = > result = (a !== null && a !== undefined) ? a : b; 

let user; 
console.log(user); // log ra undefined 


let value1 = null; 
let value2 = null; 
let value3 = null; 

// tiếp tục log ra  

console.log(value1 ?? value2 ?? value3 ?? "tất cả value 1 2 3 đều NULL"); 
// trả về giá trị đầu tiên không NULL 
// nếu tất cả đều null -> trả vê value cuối cùng 


// Luôn trả về giá trị đầu tiên define. Nếu tất cả trừ thằng cuối đề undefine hoặc NULL -> trả 
// về thằng cuối cùng  


// toán tử  || có thể thay thế toán tử ??  

let result = "Ahihi" || "AHAHA"; 

console.log(result); 


// sự khác biệt ở đây là : ?? trả về giá trị define đầu tiên. còn || trả về giá trị trueThy dầu tiên 

// Có Nhưng giá trị falsethy sau: 
// NULL,undefine,NaN,0,"",false 




let valueBool = false ?? "Default"; 
console.log(valueBool); 

// ?? vẫn nhận NaN,false,""


let stringEmpty = '' ?? 'Default'; 
console.log(stringEmpty,'string empty');


// Tổng kết : 
// toán tủ ?? sử dụng khi muốn lấy ra giá trị đầu tiên define. Hoặc gán cho 1 giá trị nếu 
// như giá trị phía trước đều trở nên fefault  
// khi sử dụng toán tử ?? với || hoặc ?? phải sử dụng kèm dấu () đối với toán các toán tử && 



// với toán tử || trả về giá trị đầu tiên truethy, còn && thì ngược lại. Ví dụ: 

let resulAnd = 2 && false; 
console.log({resulAnd}); 








// Học thêm 1 toán tử mới mang tên option chain 
// giúp ta tránh bị lỗi khi truy cấp đến các vùng nhớ NULL hoặc undefined 

// ví dụ như sau:   
let ducNguyen = {

} // tạo ra 1 object trống 
// tiếp theo tao truy cập đến thuộc tính không tồn tại : ducNguyen.age => undefined 
console.log(ducNguyen.age);

// khi 1 object . tới 1 thuộc tính không có thì sẽ là undefined. Nhưng undefined tiếp tục
// truy cập -> ăn lỗi ngay 

// vậy cách giải quyết ở đây là gì : sử dụng toán tử if 

let resullUndefined = ducNguyen.age ? ducNguyen.age.hello : undefined; 

console.log({resullUndefined});  


// Toán tử .? sẽ kiểm tra xem phía trước nó có phải là undefined hoặc NULL hay không. 
// Nếu không phải thì thực hiện nếu phải thì trả về undefind luôn 


let resultOption = ducNguyen.age?.sayHello;  // Nếu age có thì truy cập đến sayhello 
console.log({resultOption})  // bởi vì age không hề tồn tại 


let key = "Hồ Đức Nguyên"; 
let reusultKey = key?.length;

console.log({reusultKey}); 

// không nên lạm dụng .? 
// Viết theo kiểu trên gọi là sai  
// bởi vì .? chỉ làm việc với biến đã khai báo. mà key chắc chắn đã khai báo nên không có 
// ý nghĩa khi đi code như thế.  



(function() {
    let myInfo = { 
        age: {
            ageCurent:{
                hihi:"Hồ Đức Nguyên"
            }
        }
    };  
    let result = myInfo.age?.ageCurent; 
    console.log({result}); 
})(); 


// sử dụng với các method và [] trong object

(function() {
    let sayHello = {
        say() {
            console.log("Hello!");
        }, 
        //sayHic:"hic hic", 

    }
    // thử gọi tới 1 hàm không tồn tại trong method 
    sayHello.goiToiHamKhongTonTai?.();   // Không bị ăn lỗi

    // hoặc có thể gọi tới 1 thuộc tính thông qua cặp []

    const key = "sayHic";

    let result2 = sayHello[key]?.length; 
    console.log({result2})


}) ();



 




