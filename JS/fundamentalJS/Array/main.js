
// KHAI BÁO 
let initArray1 = new Array(); 
let initArray2 = [1,2,3,4,5];   // có thêm ' , ' ở cuối hoặc không đều đươc



/* 
cách lấy ra phần tử cuối cùng trong array 
cách 1 : 
alert( initArray2[initArray2.length - 1]);   // -> cồng kềnh ! 
cách 2 : 
alert(initArray2.at(-1));   // cách này hay hơn 
at <-> []
at(i) -> nếu i > 0 thì tương tượng tự với [i]. Ngược lại thì bắt đầu từ vị trí sau cùng  
*/

let startArray = initArray2.shift()  // Hàm trả về phần tử đầu tiên và xóa đi phân tử đó trong aray luôn 
initArray2.unshift(startArray)  // Thêm giá trị vào đầu 
// -> unshift và push có thể thêm nhiều phần tử cùng lúc  


// xóa đi phần tử cuối 

let endArray = initArray2.pop() // Trả về giá trị đã xóa. 

// Array là 1 dạng object đặc biệt -> có thêm thuộc tính hoặc method vào array. 
initArray2.fullName = 'Hồ Đức Nguyên'; // -> là 1 thuộc tính của object 
initArray2.age = 20;


/* 
initArray2[2000] = '2 ngàn';   => câu lệnh này có thể thực hiện
Nhưng lúc này length sẽ bị thay đổi theo số index lớn nhất. Nếu nhỏ hơn length hiện tại 
thì array sẽ bị thu lại -> xóa bớt phần tử đi 
*/


// thử lặp qua với for in ( lặp quá các key của 1 object )
console.log('log for in');
for (let key in initArray2){
    console.log(key); 
}

/* 
Về bản chất array là 1 object. Nên nó có thể thêm key vào theo kiểu dấu [] hoặc thêm theo kiểu 
.property = value. Nhưng ta không nên thêm thuộc tính vào 1 array. Nếu bạn muốn tổ chức 
1 kiểu dữ liệu với các key tùy ý thì không nên sử dụng array thay vào đó nên sử dụng object  
*/

// push và pop có hiệu năng nhanh hơn so với shirt và unshirt => vì không cần phải giời mảng !

// LẶP QUA 

/* 
Bởi vì array cũng là object cho nên có thể sử dụng for in -> nhưng mà không nên 
sủ dụng cách này vì nó sẽ lặp qua cả những method lẫn property của array 
Nên sử dụng for of  
*/

/* 
Có 1 vài đối tượng làm việc khá giống mảng. Nhưng ngoài mảng ra thì vẫn có 1 vài thuộc tính và 
phương thức khác nên khi lặp qua để sử dụng phải cẩn thận  
*/

// với cách khai báo thứ nhất ( sử dụng từ khóa new ). Nếu chỉ có 1 con số thì nó sẽ là Length của array 

let arrinit = new Array(1,2,3); 

// clone 1 array 
const arrClone = [...arrinit];  // Tham trị !. Vì toán tử ... đang thao tác với value -> không phải rest
console.log(arrClone); 

// Khi muốn so sánh 2 array đừng bao giờ sử dụng toán tử == và toán tử ===  
// thử so sánh 2 array với nhau -> chuyển đổi sang JSON rồi so sánh 





