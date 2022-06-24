
//  Học về các hàm hay sử lý với string -> Lấy nguồn từ w3school 
// string thuộc kiểu dữ liệu nguyên thủy, không phải object. 

// extract String 
/* 
slice(start, end)  //  tham số thứ 2 là optional -> clone chuỗi
substring(start, end) // tương tự slice  -> nếu tham số < 0 thì tự gán về 0
substr(start, length)  // tượng tự slice -> tham số thứ 2 xác là độ dài chuỗi sẽ cắt
*/


// slice -> clone chuỗi từ start đến end  


(() => { 
    
    let fullName = 'Hồ Đức Nguyên'
    let extractName = fullName.slice(0,2)  
    console.log('slice',extractName)
}) (); 

(() => { 
    let fullName = 'Hồ Đức Nguyên'
    let extractName = fullName.substring(-2,2)  // nếu value nhỏ hơn 0 => đưa về 0 
    console.log('subString',extractName)
}) ();

(() => { 
    let fullName = 'Hồ Đức Nguyên'
    let extractName = fullName.substr(3,7)
    console.log('subStr',extractName)
}) (); 

// replace method -> trả về 1 chuỗi mới đã được replace, chỉ replace di nhất 1 lần duy nhất
// Nếu muốn replace toàn bộ -> sử dụng regex 
// Có phân biệt chữ hoa chữ thường
(() => { 
    let text = "Please visit Microsoft and Microsoft!";
    let newText = text.replace("Microsoft", "W3Schools");
    console.log('replace',newText)   
}) (); 


// toUpperCase và toLowerCase -> trả về 1 chuỗi in mới theo in hoa hoặc thường

(() => { 
    let fullName = 'Hồ Đức Nguyên'
    let fullNameUpCase = fullName.toUpperCase()
    console.log('upCase',fullNameUpCase)
}) (); 


// concat -> join 2 hoặc nhiều chuỗi lại với nhau -> khá vô dụng vì có thẻ cộng chuỗi cho nhau
(() => { 
    let text1 = "Hello";
    let text2 = "World";
    let text3 = "Hồ Đức Nguyên"
    let text4 = text1.concat(" ", text2," ",text3);
    console.log(text4)
}) (); 

// trim -> xóa khoản trắng thừa ở đầu và cuối
(() => { 
    let fullName = '    Hồ Đức Nguyên     ' 
    fullName = fullName.trim()
    console.log('trim',fullName)
}) ();


// padStart,padEnd
// padStart -> 2 tham số : (Đồ dài chuỗi sau khi đệm,kí tự sẽ đệm)
(() => { 
    let fullName = 'Nguyên'
    fullName = fullName.padStart(12,'x') // nếu số kí tự nhỏ hơn length -> trả về chính lenght đó 
    console.log('padStart',fullName)
    // tương tự vơi padEnd
}) ();


// các cách lấy ra kí tự trong string : charAt() -> tương tự [],charCodeAt() -> lấy ra mã ascii 



// chuyển đổi string thành array -> method split() tham số là kí tự phân tách. -> nếu không có tham 
// số -> dưa chuỗi string đó về 1 phần tử duy nhất. 

(() => {
    let fullName = 'Hồ Đức Nguyên'
    let arr = fullName.split('') 
    console.log('split',arr)
}) (); 




// Search trong string 
/* 
String indexOf()
String lastIndexOf()
String startsWith()
String endsWith() 
bool included()
*/

(() => { 
    // indexOf -> kiểm tra xem 1 subString có trong string đó hay không. Trả về vị trí đầu tiên 
    // match
    //lastIndexOf -> ngược lại -> tìm phần từ match cuối cùng  
    let fullName = 'Hồ Đức Nguyên'
    let result = fullName.indexOf('Đức') // 3
    //search() -> trả về vị trí xuất hiện dầu tiên trong string -> tương tự indexOf 
    // search()  có thể nhận đối số là regex. -> không có tham số thứ 2 
    // indexOf cho phép truyền đối số thứ 2 -> vị trí bắc đầu tìm -> có tham số thứ 2 
    //includes -> return về true nếu có chứa subString 
    // startsWith() -> return về true nếu kí subString đó match từ vị trí start-index -> n. tham số thứ 2 
    // là vị trí bắt đầu tìm kiếm ( nếu bỏ trống la 0) 
    //endsWith() ->  Ngược lại 



})(); 