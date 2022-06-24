
// khái quát thì nó là 1 array, và object này sẽ cho phép ta có thể sử dụng for of 

let arr = [
    'PHP',
    'JS',
    'TS'
]

// lặp qua bằng for of 
for(let value of arr) {
    console.log(value); 
}

// array là 1 itoror 
// string cũng la itorator  


// tạo ra từ object 
let object = {
    to:1, 
    from:10,
}

// cách biến 1 object thành itorator 

object[Symbol.iterator] = function() {  // trả về cho nó 1 object
    return {
        current:this.to,
        last:this.from,

        // tạo ra phương thức last 
        next() {  // hàm nãy sẽ được gọi mỗi khi 
            // ham được gọi mỗi khi for of được lặp qua 
            if (this.current < this.last) {
                return {done:false,value : this.current++}
            }
            else {
                return {done:true}
            }
        }
    }
}


// muốn 1 object có thể sử dụng for ... of 

let range = { 
    // có 2 biến sẽ lăp qua 
    to:0,
    from:10, 
    
    // tạo ra 1 itorater 
    [Symbol.iterator]() {
        // với [] là tượng trưng cho key
        // trả về 1 object  
        return { 
            // trả về 2 trường để có thể lặp qua 
            current:this.to, 
            last:this.from, 
            // tạo ra bước lặp 
            // tiếp theo tạo ra 1 phương thức next()
            next() {
                // mỗi lần for of giá trị nhận được về chính là do next trỏ ra 
                // thử : trong hàm next() trả ra 1 object có fill là
                // nếu return về true thì tức là dừng còn false là chưa dựng 

                if (this.current < this.last) {
                    // còn bé hơn last -> tiếp tục lặp -> trả ra dữ liệu 
                    return {
                        done:false, 
                        value:this.current++
                    }
                }
                else {
                    return {
                        done:true
                    }
                }
            }
        }
    }
}

// Tiếp túc có : 

//lặp qua bằng for in xem các key của object  

// in lấy tới next
console.log(range.next); 


// chỉ in ra key và from thôi 
console.log(range[Symbol.iterator]); 




// khái quát : Giúp 1 object có thể sử dụng for of 
// muốn làm như thế có các bươc sau:  tạo ra 1 key với [Symbol.iterator] gán thành 1 object 
// trong object này có 3 trường cơ bản : trường current trường last và 1 next()
// lặp hay không lặp tất cả nằm ở cái next() => khi chạy for...of nó 
// tiếp. nếu cái next() trả về true -> ngưng lặp không hề liên quan gi tới cái. tức là chỉ cần cái 
// next() thôi. không cần tới cái curent và cái last -> nó chỉ đánh dấu lặp từ đâu tới đâu thôi 

// ví dụ như này 
// let person = { 
//     // tạo ra 1 method lấy ra số key 
//     getLengthKey(){
//         return Object.keys(this).length; 
//     },
//     fullName:"Hồ Đức Nguyên",
//     age:20,  

//     // bài toán : thay thế chức năng for in thành for of 
//     [Symbol.iterator] : {
//         // lấy ra số key còn lại 
//         lengthKey:this.getLengthKey() - 1, // không lặp qua 
//         // tiếp theo bước lặp hiện tại 
//         init:0,
//         next() {
//             if (this.init < this.lengthKey) {
//                 // còn bé -> còn lặp 
//                 return {
//                     done: false, 
//                     value:            // trả về cái key hiện tai -> 
//                 }
//             }
//         }
//     }

// }

// console.log(person.getLengthKey());  // sẽ có 3 key -> tính cả chính nó 



let obj = { 
    value1:1, 
    value2:2,
    value3:3, 
    value4:4
}

// tiếp tục : 

const keyObj = Object.keys(obj);   //  nhả ra array  

let fullName = 'Hồ Đức Nguyên'; 

// cách không sử dụng for of vẫn có thể lặp qua 
console.log(fullName[Symbol.iterator]().next());  // lấy ra kí tự đầu tiên  

// vì cái kia được trả về bởi 1 function nên phải có toán tử call  


// lặp qua string không cân for of 

let it = fullName[Symbol.iterator]();   // trả về it 

while(true) {
    // xử dụng 1 biến hứng giá trị 
    let value = it.next(); 
    if (!value.done){
        // nếu như chưa tới cuối 
        //alert(value.value); 
    }
    else {
        break; 
    }
}

// viết không sử dụng for of giúp ta dễ quản lý tuyến trình lặp  

// Phân biệt array like và iteritor  
// Hai cái này hoàn  toàn khác nhau !
// it là 1 object được implement từ Symboi 
// array like là 1 object có index và có length  : ví dụ 

let arrayLike = {
    0:'Số 0', 
    1:'Số 1', 
    2:'Số 2', 
    3:'Hồ Đức Nguyên',
    length:4
}

// cả 2 rất giống array nhưng lại không sử dụng được các phương thức của array : push,pop... 
// Sử dụng array From : -> tham số truyên vào là 1 1 itorater hoặc 1 array like 
const arrFrom = Array.from(arrayLike);  // lúc này giống như 1 array 
// Tuy chuyển về array nhưng nó vân sử dụng length để tạo ra mảng -> nếu như có length là 100 
// mà chỉ 3 phần tử đầu -> 97 phần tử còn lại sẽ là undefine 
// Chỉ lấy các cặp key value giống với array chẳng hạn như 0:any,1:any 

// tiếp tục tạo ra ::  


console.log(arrFrom);

console.log(arrayLike[0]);  // cái này là sử dụng có thể truyền biến vào 


// ngoài ra hàm array from còn có thể sử dụng kết hợp hàm map vào  
let arrMap = Array.from(arrayLike,function(value) {
    // phải return -> vì là map
    return value + "Hồ Đức Nguyên";
})

console.log(arrMap);

// có thể sử dụng để phân tách string thành array 
let age = "19TUOI";  //  là 1 iterator 
let arrAge = Array.from(age); // tách ra 


// biến cho ducNguyen Có thể được lặp qua bởi for ... of
const ducNguyen = {
    fullName:'Hồ Đức Nguyên', 
    age:20,
    [Symbol.iterator]:function() {
        return {
            // cho lặp 100 lần 
            init:0,
            last:10,
            next() {
                if (this.init < this.last) {
                    this.init++; // tăng giá trị lên : tương tự với bước thứ 3 
                    console.log(this); 
                    
                    return {done:false,value:`${this.fullName} + ${this.age}`}
                }
                return {done:true}; // Đã ngưng lặp
            }
        }
    }
}

// object ducNguyen có thể sử dụng for of vì đã add iterable vào. Biến value trong for of tương trưng 
// cho giá trị trả ra trong hàm next 






for (let value of ducNguyen) {
    console.log(value); 
}

function helloWord() {
    console.log(this,'this'); 

}

helloWord();  // trong fn. this là object window

let xThis = this; 
console.log(xThis); 




s