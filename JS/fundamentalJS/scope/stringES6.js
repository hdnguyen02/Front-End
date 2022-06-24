// Giới thiệu về: template literals 

let nameCourse = 'javascript'; 

let decription = 'khóa học ' + nameCourse;   //  cách viết truyền thống


let stringES6 = `khóa học ${nameCourse}`;  //có thể viết theo es6 như sau xử dụng ${} để có thể 
// nội suy

// Nếu như muốn in ra dấu ${} trong string es6 thì thêm 1 dấu \ phía trước
let systax = `in ra dấu \${} trong string`; 





//  Enhanced object literals 
// Có nhưng công dụng sau:  
/*
1. Tạo key value cho object nhanh hơn trong trường hợp key và value trùng nhau
2. Tạo ra method cho object nhanh hơn
3. Tạo ra key bằng biến 
*/


let names = 'javascript'; 
let price = 1000; 
let course = {
    names,price
}


// tạo ra class 
class Console {
    // tạo ra method 
    logWarn(data) {   // giảm tải được chữ function
        console.warn(data);
    }
}


// tiếp theo là tạo ra key đối với tên biến 

let nameKey = 'nameCourse'; 
// khai báo ra object 
let course2 = {
    [nameKey]:'PHP'  // có tên là nameCouse
}


// thử viết với class xem có được hay không 
// Đợi học lại class đã nhé 








// Destructuring ( phân rã ), Rest

// xử dụng khi bạn muốn phân rã các phần tử của array hoặc object 
// ví dụ:
let arrStr = [
    'javascript', 
    'PHP',
    'C++'
]

// Sử dụng destructuring 
let [a,b,c] = arrStr;  // lấy ra 3 phần tử đầu tiên của array tương tự 
let [a1,,c1] = arrStr; // chỉ lấy ra phần từ 1 và 3 ( ỡ giữa không lấy )

let nguyen = {
    ten:'hồ đức nguyên', 
    tuoi:20
}

// phân rã thì phải cùng tên với key mới có thể phân rã 
// với array thì sử dụng dấu [] còn với object thì sử dụng {}

 let {ten,tuoi} = nguyen; 





// tiếp theo đến với toán tử ... ( rest)

// được dùng để lấy phần còn lại của array hoặc của object 



let [...restArr] = arrStr;  // lấy phần còn lại của array 

let [,...newRest] = arrStr; // trừ 1 phần tử đầu ra còn nhiêu lấy hết 

let [,,...diffRest] = arrStr; // bỏ 2 phần tử đâu ra còn nhiêu lấy hết

 





// Với object vì không có thự tự index để có thể đánh giấu vì vậy muốn lấy biến ra key nào 
// thì phải đặt tên trùng với key đó luôn 

let lapTrinh =  {   
    oop:'java', 
    web:'javascript', 
    custom:'C++'
}


let {custom:cusTomlapTrinh} = lapTrinh;   // dấu : dùng để có thể tạo ra cái tên khác khi bị trung tên 
// biến 




// chỉ lấy ra phần tên của object nguyen còn bao nhiêu lấy hết
//let {ten,...rest} = nguyen; 
//console.log(rest); 




// lấy ra 1 object không lấy trường custom còn nhiêu lấy hết 
let {custom,...restLapTrinh} = lapTrinh;
// console.log(restLapTrinh);   // không có C++

// Sử dụng toán tử ... với function 
function logger(...rest) {   // Chỗ này chính là lấy ra hết những phần còn lại 
    for (let i = 0;i < rest.length;i++) {
        console.log(rest[i]); 
    }
}

// nếu như hàm trên này có tham số theo kiểu (a,...rest) => đối số đầu tiên sẽ là a. còn tất cả đối
// số còn lại được đưa vào mảng rest => cái này là đặc điểm của toán tử rest 


function thamChieu(arr) {
    for (let i = 0; i < arr.length;i++) {
        arr[i] = arr[i] + 2; 
    }
    console.log("trong hàm"); 
    console.log(arr); 
}

// let arrTest = [1,2,3]; 
// thamChieu(arrTest); 
// console.log("sau khi tham chiếu"); 
// console.log(arrTest); 







// Phân biệt giữa toán tử rest và toán tử spread
// khi thao tác trên tên biến thì đó là rest => đối số của fn là tên biến
// khi thao tác trên value của biến thì đó là spread => value khi truyền vào fn



// sử dụng với bài toán nối mảng mà không sử dụng hàm khác với toán tử spread 
// khi sử dụng toán tử ... trước 1 array hoặc object thì ta đang bỏ đi cặp ngặt [] hoặc {} 
// của object 


let arr1 = [1,2,3,4]; 
let arr2 = [5,6,7,8]; 
// nối cái chuỗi kia lại xem nào ! 
let arr3 = [...arr1,...arr2];  // cái này đang là truyên đối số, không hề liên quan đến dến biến hoặc đối số truyền vào
// console.log(arr3);   // in ra 1 2 3 4 5 6 7 8

// Đối với object cũng tương tự 

let object1 = {
    ten:'Hồ Đức Nguyên'
}

let object2  = {
    tuoi:20
}

let object3 = {
    ...object1,...object2
}

// console.log(object3); 

function consoleArray(...rest) { // đang sử dụng toán tử rest -> bởi vì cái này là tham số truyền vào. 
   for (let i = 0; i < rest.length;i++) {
        console.log(i); 
   }
}


consoleArray(...[1,2,3,4,5]);  // khi mà đối số mà tuyền vào nếu sử dụng ... thì không phải là toán tử rest 
// ở phía trên hàm là toán tử rest. Nếu ta chỉ truyền vào [1,2,3,4,5] tuy là có 5 phần tử 
// nhưng đối số nhận vào lại là 1 array chứ không phải là các phần tử array. nếu muốn in ra 1 2 3 4 5 
// thì ta phải truyền vào là 1 2 3 4 5 hoặc là ...[1,2,3,4,5] để có thể bỏ đi dấu ngoặc 

// nhắt lại 1 lần nữa : Toán tử ... được xem là rest nếu thực hiện khi khai báo biến. 
// còn không phải là rest nếu nó thao tác trên biến. 


// Học thật sự tốt rồi làm project cá nhân bỏ vào CV ( kèm cả bằng tiếng anh )















