/*
callBack phải thỏa mãn ba điều kiện sau : 
1. callBack là hàm 
2. Được gọi trong hàm khác 
3. Phải được gọi trong hàm mà nó làm đối số  
*/

/* 

code thực nghiệm -> cmt Nhiều dòng -> shift + Alt + A
ôn tập 1 tí về js:  
Sự khác nhau giữa == và === 
== : toán tử so sánh => đều tự ép kiểu sang string rồi so sánh
khi so sánh kiểu này -> number bị chuyển đổi sang string, với string rỗng thì 
đổi sang số 0, còn không phải là số khi ở dạng string thì chuyển đổi sang NaN 
( not a number ) 

=== : Không tự động ép kiểu sang string. 

*/
console.log('' == 0);       // true
console.log('123' == 123);  // true
console.log('123' === 123); // false
console.log(NaN == NaN)  // NaN không bằng NaN -> cos(2) != cos(-1)


/* 
function soSanhBeHon(valueA,valueB) {
    if (valueA < valueB) {
        return true; 
    }
    return false; 
}

function soSanhLonHon(valueA,valueB) {
    if (valueA > valueB ){
        return true; 
    }
    return false; 
} 


// CALLBACK => truyền hàm tùy thích vào ! Tại đối số thứ nhất
function soSanh(callBack,a,b) {
    if (callBack(a,b)) {
        console.log("ham tra ve dung"); 
    }
}

*/



/*   property tương tự với method -> đều có thể vào prototype
Array.prototype.bienA = 10;
// lúc này từ các object của array có thể gọi là bienA 
// ví dụ  
var arr = []; 
console.log(arr.bienA);  
*/

var arrStr = [
    "C++", 
    "js", 
    "PHP"
]; 


// CUSTOM MAP 


Array.prototype.customMap = function(callBack) {
    let length = this.length;   
    var newArr = []; // chứa kết quả sau khi hoàn thành customMap
    for (var i = 0; i < length;++i) {
        newArr.push(callBack(this[i]));   
    }
    return newArr; 
}

/*     
Callback được sử dụng trong addeventListenr, hàm fetch(url) : đọc dữ liệu từ server mà hàm đã gọi 
cái callBack sẽ có chức năng khác nhau Nhưng callBack bây giờ đã ít được sử dụng hơn so với Async 
fucntion ( bất đồng bộ) 
*/

      


