

// Có 2 loại property object

/* 
Loại đầu tiên là data property ->  Trước giờ đã tìm hiểu 
Loại thứ hai là accessor property -> getter và setter
*/


// ví dụ: 

const myInfo = { 
    // data property
    myName:'Hồ Đức Nguyên', 
    myAge:20, 
    sayHi:'sayHi',

    // accessor property
    get fullInfo() {  //  vẫn là thuộc tính ! -> không cần sử dụng tới toán tử call
        return `${this.myName} ${this.myAge}`
    }, 
    set setMyName(newName) {
        this.myName = newName
    }
}


/* 
Nhìn từ bên ngoài, một accessor property trông giống như một property thông thường.
Đó là ý tưởng về các accessor property. Chúng ta không gọi myinfo.fullInfo là một 
method, chúng ta sử dụng một cách bình thường: getter chạy ẩn sau hậu trường. 
*/

myInfo.setMyName = 'New Hồ Đức Nguyên' // không phải func -> đang gọi hàm setMyName 

/* 
hàm get không có tham số. Hàm set chỉ nhận 1 tham số
các get,set vẫn được for in lặp qua 
*/



  


 