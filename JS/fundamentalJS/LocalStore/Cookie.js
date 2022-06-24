// TODO : 



// ? khái niệm : Cookie là 1 mẫu string nhỏ được lưu trữ trực tiếp trên trên trình duyệt. Cookie được thiết lập bởi các web-server thông qua các HTTP-header. Vì vậy với mỗi HTTP được gửi đi trình duyệt sẽ tự động push cookie HTTP-header

// TODO: Trường hợp hay sử dụng nhất là xác thực. 
// * Khi đăng nhập. web-server sử dụng Cookie HTTP-header và set cho người dùng 1 id duy nhất 
// * Khi được gửi cùng 1 domain. Có thể gửi cookie thông qua HTTP-header -> server có thể biết được ai đã gửi request 
// * Có thể sử dụng cookie bằng cách : doccument.cookie 
// * Được lưu trữ theo dạng name=value 


//  TODO: setter/getter của doccument.cookie
// * Thêm cookie 
document.cookie = 'name=hồ đức nguyên'  
//! phải lưu theo dạng key=value -> nếu chỉ lưu name thì key sẽ là '' 
// ? Các optional của cookie 
// * domain -> nơi có thể truy cập cookie 
// * expires -> thời gian cookie bị xóa -> nếu không có thì cookie sẽ mất khi tắt trình duyệt 
// * max-age -> thời gian cookie bị xóa ( tính theo giây ) kể từ thời điểm hiện tại 

