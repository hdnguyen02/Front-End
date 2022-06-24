


console.log('Memory'); 
/*
    Việc thực hiện quản lý bộ nhớ trong js được thực hiện 1 cách tự động và người dùng không thể nhìn 
    thấy quá trình này
    Và làm sao để js có thể phát hiện ra 1 vùng nhớ không cần thiết nữa và dọn dẹp đi chúng 
    Quản lý bộ nhớ trong js theo cơ chế reachability
    Nói một cách đơn giản. những giá trị được đặt ở reachability là những giá trị có thể tiếp cận được 
    và sẽ lưu trữ tại memory 


*/

// ví dụ: 
let user = { 
    name:'Hồ Đức Nguyên',
}
// lúc này user đang tham chiếu tới object có thuộc tính name 
// Và ta có thể hủy kết nối đó như sau:
user = null;   // lúc này object được tính là unreachable

// Chỉ khi nào không có 1 tham chiếu nào tới object đó thì ta nó sẽ trở thành unreachable và sẽ được giải phóng


// về cơ bản : giống con trỏ của C++ 
// Chỉ cần vẫn còn có biến tham chiếu chứa nó => thì nó vẫn chưa bị dọn dẹp đi  


// sự khác biệt giữa : weakmap và map 

// với map thông thường 

let map  = new Map(); 

map.set({nguyen:'Nguyên'},2); // tương ứng với key - value -> vơi key thì không thể trùng nhau 

map.set({nguyen:'Nguyên'},2);; 
console.log(map,'map');  // đang có 2 key trùng nhau 
// tuy trùng nhau về các thuộc tính nhưng có 1 cái khác là vùng nhớ tạo ra -> nên vân được tính là  
// 2 object ( 2 key khác nhau )


// Nhưng với weakmap chỉ có thể lấy object làm key 

console.log('Weak Map'); 

let weakMap = new WeakMap(); 

let ducNguyen = {
    fullname:'Hồ Đức Nguyên'
}

// thêm vào trong weakMap 
weakMap.set(ducNguyen,'Value của object ducNguyen'); 

// sau đó thử xóa đi liên kết 
ducNguyen = null;  // đánh mất đi liên kết -> lúc này trong weakMap cũng sẽ bị mất đi luôn 
console.log(weakMap); 

// weak map không hỗ trợ iterable nên không hỗ trợ : keys values  và entries 
// weak map chỉ hỗ trợ : 
/* 
weakMap.get(key)
weakMap.set(key, value)
weakMap.delete(key)
weakMap.has(key) 
*/

// Tại sao lại cần đến weakMap -> khi ta muốn object khác mất tham chiếu thì object được xóa. 

// ứng dụng chính của weakMap -> lưu trữ dữ liệu bổ xung -> lưu trữ các object thuộc về 
// 1 bên thứ 3 hoặc các object của các thư viện khác. Và chỉ làm việc khi những object này còn  
// được tham chiếu đến 
// Khi 1 object được thêm vào làm key đến lúc nó bị xóa đi thì object đó sẽ tự động biến 
// mất khỏi weakmap  


// viết 1 hàm đếm số lượng phần tử xuất hiện dựa vào map 
let arr = [1,1,2,3,4,5,4,2]; 
// ta sẽ lấy key là các phần tử -> còn value sẽ là số lần xuất hiện 
 
function demSoLanXuatHien(arr) {
    // khai báo ra 1 map 
    let map = new Map(); 
    // lặp qua arr 
    arr.forEach(function (value) {
        let result = map.get(value) || 0;  // kiểm tra xem 1 biến đã xuất hiện bao nhiêu lần 
        // với hàm get bỏ vào key -> trả về value -> nếu trả về undefine -> tức là chưa có key này 
        // thì ta lấy 0 
        map.set(value,result+1); 
    })
    return map; 
}

let result = demSoLanXuatHien(arr);
console.log(result); 

// với fucntion này 



console.log('Bài tập'); 
// làm bài tập với Weak Map 
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  // đoạn tin nhắn trên đây không phải của bạn, Người quản lý có thể xóa hoặc thêm bất kì tin nhắn
  // nhắn nào và bạn không thể nào biết được  


  // lựa chọn 1 cấu trúc mang tên weak set để có thể đánh dấu la ftin nhắn đã được đọc 
  let messOld = new WeakSet(); 

  // add vào các tin nhắn đã đọc 
  messOld.add(messages[0]); 
  messOld.add(messages[1]); 



  function makeCouter() {
      let couter = 0; 
      function increase() {
        return ++couter; 
      }
      return increase; // trả ra cái hàm  
  }

  let count = makeCouter();  // hàm trả ra 1 func  
    console.log(count()); 
    console.log(count()); 
    console.log(count()); 






  // dễ hiểu như sau : lúc này hàm makeCouter đã được gọi : và trả ra 1 cái hàm increase 
  // -> trả ra địa chỉ hàm cho thằng count nắm dữ 
  // hàm increse lại sử dụng 1 biến của phạm vi bên ngoài nó. đó chính l là biến couter. trong 
  // trường hợp này couter vẫn đang được tham chiếu bởi hàm increase nên couter chưa được giải phóng 

  function hello() {
      let sayHello = 'Hello'; 
      function hi () {
          // xử dụng cái biến bên ngoài 
          sayHello = sayHello + ' AHIHI'; 
          console.log(sayHello); 
      }
      return hi; 
  }
let i = hello(); 
i(); 
i(); 
i(); 



// những cái trên có liên quan đến 1 cái được gọi là clouse trong js 
// 1 hàm được gọi là clouse nếu nó luôn nhớ nơi nó được tạo ra -> và có thể truy cập được
// các biến ở phạm vi bên ngoài 

// Biểu thị cho tính private trong oop 
// Ứng dụng để viết code ngắn gọn hơn 



