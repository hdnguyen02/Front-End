// TODO: Trường hợp nên lưu trữ dữ liệu phía trình duyệt:   
//* 1. Thông tin người dùng đăng nhập ( Không nên lưu password)
//* 2. Lưu trữ các sản phẩm trước đó người dùng đã chọn -> Đối với các trang không yêu cầu đăng nhập
//* 3. Lưu lại các tùy biến chỉnh sữa của người dùng : theme,font-size,color... 


// ? Khái niệm về localStorage  
// * LocalStorage là một nơi lưu trữ các object trên trình duyệt dưới dạng key:value. Và Điều thú vị ở đây là các object này không bị mất khi tab được tải lại. 
// * Không giống như cookie. Các object localStorage không bị gửi gửi đi với mỗi request. Vì vậy ta có thể lưu trữ nhiều hơn 1 object. Server không thể thao tác lên các object đó thông qua HTTP header -> chỉ có thể thông qua js 
// * Các object được lưu trữ riêng theo domain -> Vì vậy không có sự truy cập đến local Storage của domain khác 

// ! Có thể lưu trữ 5mb localStorage tùy theo mỗi trình duyệt

// ? Các method trên localStorage  
/* 
* setItem(key, value) – Lưu trữ cặp key-value
* getItem(key) – lấy ra item theo key 
* removeItem(key) – xóa object theo key
* clear() – xóa tất cả mọi thứ
* key(index) – lấy ra key theo index 
* length – tổng số object
*/

// ? Công dụng của localStorage 
// * Dữ liệu được lưu trữ tại domain -> Ở các trình duyệt khác vẫn có thể truy cập -> chung domain.
// * Dữ liệu không bị mất thậm chí khi restart trình duyệt hoặc tắt và bật lại. 


// * Sử dụng method setItem  
localStorage.setItem('Name','Đức Nguyên')
localStorage.setItem('Name','Hồ Đức Nguyên')  // ! key là duy nhất 

// ? Có thể tạo ra object localStorage theo kiểu  với object 
localStorage.age = 20  // * Có thể tạo ra object localStorage theo kiểu giống với object  


// TODO: key get 
let keyGet = 'Name'

console.log('getItemLoCalSotorage key Name',localStorage.getItem('Name')) // *getItem  
console.log('getItemLocalSotorage age',localStorage.age)
console.log('getITemLocalStorage key Name',localStorage[keyGet])

// * get/set của localStorage tương tự với object 


// ? Lặp qua các object localSotorage 
// * có thể sử dụng các cách sau: 
// ! localStorage không phải iterable -> Không thể lặp qua bằng for Of
// TODO: lặp qua localStorage
for (let i = 0; i < localStorage.length;i++) { 
    let key = localStorage.key(i)
    console.log(localStorage[key])
}

// Không thể sử dụng for of
/* for (let key in localStorage) {   // Cách này không hay -> in ra cả các key key như setItem.getItem
    console.log(key)
} */

//* ngoài ra có 1 cách khác : hàm keys trả về các key không nằm trong prototype 
console.log('loop localStorae')
for (let key of Object.keys(localStorage)) { 
    console.log(localStorage[key])
}


// * Object local Storage lưu trữ key và value dưới dạng string  
// ! nếu lưu trữ object localStorage dưới dạng object thì localStorage tự động chuyển sang string 
// * phải sử dụng JSON để có thể lưu trữ local Storage 

localStorage.objKey = JSON.stringify({ 
    fullName:'Hồ Đức Nguyên'
})



// * Các method tương tự với localStorage nhưng có nhiều giới hạn hơn
// ? Giới hạn 
// * Các object chỉ tồn tại ở tab đó. -> khi mở tab khác lên không tồn tại các object
// * Object vãn tồn tại khi khi refresh Nhưng không tồn tại Nhưng không còn tồn tại khi đóng mở tab  
// ! vì lý do đó sesstionStorage ít được sử dụng hơn localStorage 


// * khi data được update -> các event storage được kích hoạt  
window.onstorage = event => { // can also use window.addEventListener('storage', event => {
    if (event.key != 'now') return;
    alert(event.key + ':' + event.newValue + " at " + event.url);
  };
  
  localStorage.setItem('now', Date.now());

