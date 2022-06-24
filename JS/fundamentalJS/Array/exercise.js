// Làm bài tập: 
// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should 
// work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

const arrAsigment = new Array('Jazz','Blues'); 
console.log(arrAsigment); 
arrAsigment.push('Rock-n-Roll'); 
console.log(arrAsigment); 

// Thay thế phần tử nằm giữa 

function setMiddleArray(arr,valueSet) { 
    if (arr.length % 2 != 0) { 
        let index = arr.length / 2 + - 0.5; 
        arr[index] =  valueSet; 
    }
}
setMiddleArray(arrAsigment,'Classics'); 

console.log(arrAsigment); 
arrAsigment.shift(); 
console.log(arrAsigment); 

arrAsigment.unshift('Rap','Reggae'); 
console.log(arrAsigment); 





// Bài 2: Tính tổng dựa trên promist 
function sumArray(arr) {
    let result = 0;  
    for (let value of arr) {
        result = result + value; 
    }
    return result; 
}

function inputArray(arr) {
    while (true) {
        let value = prompt('Nhập vào Phần tử mảng: '); 
        // Điều kiện dừng lại là : khi người dùng nhập vào không phải số. Chuỗi rỗng. Hoặc cancel 
        if (isNaN(value) || value === null || value === '') {
            break; 
        }
        arr.push(+value);  // Chuyển đổi string sang number  
    }
    

}


// Bài 3 : tìm ra mảng con có giá trị cộng lại lớn nhất trong 1 mảng 
// ý tưởng như sau:  

// ví dụ : 1 2 3 4 5 6 
// thì ta lần lước tính toán ra : 1 3 6 10 15 21 -> kiểu như thế này 



function findSubArrayMax(arr) { 
    // ý tưởng như sau: cần có 2 vòng lặp 
    // sử dụng 1 biến tạm dùng để chứa kết quả max so với từ trước tới giờ 
    let max = 0; // số bé nhất là 0 
    // cần 1 biến dùng để cộng dồn 

    for (let i = 0; i < arr.length;i++) {
        let result = 0; 
        // lặp qua từ phần tử này 
        for (let j = i;j < arr.length;j++) { 
            // cộng dồn lại 
            result = result + arr[j]; 
            // kiểm tra xem 
            max = Number.max(result,max);  // kiểm tra xem vừa cộng rồi có max không  

        }
    }
    return max; 
}

// Cách này còn chậm -> thử cách khác nhanh hơn 

// cách thức xóa phần tử trong mảng -> splice 

let arrNextChapter = new Array(1,2,3,4,5,6); 


// xóa đi 1 phần tử bắc đầu từ vị trí. Tham số thứ 2 là số phần tử sẽ xóa, tham số thứ 3 : phần tử được thay thế 

arrNextChapter.splice(0,1); 

console.log(arrNextChapter); 

let arrRestDelete = arrNextChapter.splice(0,3,'Đã Xóa');  // return về các phần tử đã xóa ra 
console.log(arrRestDelete); 
console.log(arrNextChapter); 

// hàm này nâng cao hơn so với hàm shirt và pop -> với shirt chỉ xóa đi 1 phần tử đầu. pop thì xóa đi 
// 1 phần tử đuôi thôi 

// Ngoải ra hàm này còn có thể thêm phần tử vào 

arrRestDelete.splice(0,0,"Hồ Đức Nguyên"); 
console.log(arrRestDelete); 

// chia cắc mảng ra  
console.log(arrRestDelete.length); 

let newArraySlice = arrRestDelete.slice(0,arrRestDelete.length);

console.log(newArraySlice);



// Ngoài ra con co concac 

// Tìm kiếm trong array 

// có 3 phương thức thực hiện tìm kiếm trên array 
// indexOf/lastIndexOf and includes

let arraySearch = [1,2,3,4,5,6,7,1];

// tìm kiếm và trả ra vị trí 

alert(arraySearch.indexOf(1)); 
alert(arraySearch.lastIndexOf(1)); 

// Nãy giờ chỉ là tìm kiếm trên 1 con số cụ thể làm sao để có thể tim kiếm 1 phần theo điều kiện cụ thể 

// làm như sau 

let result = arraySearch.find(function(item,index,arr) {
    // kiểm tra xem : 
    return item % 2 == 0; // Trả về phần tử chẵn đầu tiên  
})


// Với các hàm có gọi callback vào thì có thám sô thứ 2 là thisArg -> nếu có nó có thể sử dụng this 
// Ví dụ như sau : 

arraySearch.forEach(function(item,index) {
    // tiếp tục sử lý 
    alert(item); 
    alert(arr); // thử in ra cái mảng xem sao ! 
},arraySearch )

// Tham số thứ 2 khi bỏ vào sẽ thay thế từ khóa this bên trong 


// Bài tập mai làm 











 


