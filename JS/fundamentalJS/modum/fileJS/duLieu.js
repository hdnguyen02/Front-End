// tất cả đều đưa giữ liệu qua cho file index.js => sau đó index.js làm trung giang lại export ra  


let fullName = 'Hồ Đức Nguyên'; 


export default fullName; 


// xuất ra thêm nhiều file va đóng gói gửi qua cho bên index 

export const bien1DuLieu = 'ahihi'; 

export const bien2DuLieu = 'hello word'; 

export const bien3DuLieu = 'hello bạn'; 


export function loger( ) {
    console.log('thuộc hàm log'); 
}