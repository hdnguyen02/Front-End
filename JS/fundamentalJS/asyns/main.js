/* 
định nghĩa :  
Promise : tôi hứa là sẽ có kết quả ( chưa phải bây giờ )
promise : có 2 phần 
"Producing code" là phần code có thể mất 1 ít thời gian để thực hiện
"Consuming code"  là phần code mà cần phải đợi cho đến khi có kết quả
..//.. Định nghĩa khác 
Promise là một đại diện cho một giá trị không nhất thiết phải biết khi promise được tạo. 
Nó cho phép bạn liên kết các trình xử lý với giá trị thành công sau cùng của hành động 
không đồng bộ hoặc lý do hành động đó thất bại. Điều này cho phép các phương thức không đồng bộ 
trả về giá trị giống như các phương thức đồng bộ: thay vì ngay lập tức trả về giá trị cuối cùng,
phương thức không đồng bộ trả về một promise cung cấp giá trị tại một thời điểm nào đó
trong tương lai. ( chẳng hạn là đã thành công hoặc thất bại )

- Sử dụng promise khi nào : khi callback hell. 

//\\ promise có 3 trạng thái và có 2 kết quả  :
+ Pending : chưa giải quyết => kết quả : undefined
+ Fulfilled : giải quyết song => kết quả : kết quả là 1 value 
+ Rejected : từ chối ( không thành công ) : kết quả là 1 error object

phân tích theo ý hiểu : callBack thường được dùng các hàm việc sẵn -> chẳng hạn 
như làm lắng nghe sự kiện hàm sét thời gian  
promise là tập hợp logic lại -> Chỗi logic này chính là bất đồng bộ 
và promise sẽ trả ra 2 kết quả : thành công hoặc thất bại -> Dùng tới promise để xử lý việc khác 
chẳng hạn ta sử dụng 1 promise để gọi đến 1 web trên server -> khi thành công  trả về data 
khi thất bại -> trả về mã lỗi 

thử nghiệm sự khác biệt giữa promise và callback 
callback vừa là đồng bộ  ( đồng bộ đối với map,foreach)  vừa là bất động bộ ( request, event ) 
*/



// sử dụng callBack
setTimeout(function () {
    console.log("hello word");
}, 6000)

// viết theo promise 

new Promise(
    function (resolve) {
        setTimeout(function () {
            resolve("hello word");
        }, 6000)
    }
)
    .then(
        value => console.log(value)
    )














const promiseSai = new Promise(
    function (resolve, reject) {
        reject("thất bại promise");
    }
)
promiseSai
    .then(
        function (value) {
            console.log(value);
            console.log("trong then");
        }
    )
    .catch(
        function (error) {
            console.error(error);
            console.log("trong catch");
        }
    )

/* 
trong trường hợp nếu trong promise xảy ra reject mà không có code tương ứng đễ chạy -> lỗi 
( không có catch hoặc chỉ có 1 fucntion trong then thôi )
*/








/* 
- Ở trong then khi return => có thể then tiếp. giá trị return then phía trước là giá trị nhận được
của then phía sau
- Những cái như promise luôn được sử lý trước settimeout 
*/

/* ưu điểm khi sử dụng promise : 
Các lệnh gọi lại được thêm vào sau then() sẽ không bao giờ được gọi nếu như promise đó
chưa trả về kết quả (thành công hay thất bại)
chạy bất đồng bộ có nghĩa là nếu tốn quá nhiều thời gian để chạy thì sẽ được đưa qua 1
khu vực được gọi là web API ( ở đây một vài hàm như settimeout sẽ khởi chạy bộ đếm, sau 
khi khởi chạy song bộ đếm => thả callback đó xuống queue -> đợi callstack trống -> gọi )
chỉ khi nào callstack trống thì callstack mới bắt đầu lấy từng hàm của queue lên chạy */



/* 
Không phải cái gì mà return trong then cũng là promise. Chỉ khi then return promise thì cái then 
phía sau mới không được chạy và phải chờ đợi cho cái promise của then phía trước trả về kết quả. 
còn khi không return về promise thì then cứ được xử lý đồng bộ từ trên xuống dưới
*/
new Promise(
    function (resolve, reject) {
        resolve("promise trả về value");
    }
)

    .then(
        function (value) {
            setTimeout (function () {
                console.log(value); 
                return value + "ahihi"; 
            } ,0)
        }
    )
    .then(
        function (newValue) {
            console.log("phía sau then có settimeout"); 
            console.log(newValue);   // nhận giá trị là không xác định
        }
    )


// thực hiện bằng cách callback 


/*
doSomething(function(result) {
    doSomethingElse(result, function(newResult) {
      doThirdThing(newResult, function(finalResult) {
        console.log('Got the final result: ' + finalResult);
      }, failureCallback);
    }, failureCallback);
  }, failureCallback);
*/ 

// Mô tả hàm như sau : doSomething là 1 hàm dùng để xử lý bất động bộ. và hàm này nhận vào 2 đối số
// nếu thành công thì gọi tới đối số thứ nhất ( callback) và thất bại lại gọi tới đối số thứ 2 ( failureCallback )
// sau khi callback đối số thứ nhất được gọi : trong hàm này ta lại chạy tới hàm doSomethingElse 
// và hàm này cũng là 1 hàm bất đồng bộ : thế nên khi thất bại cũng gọi tới hàm failureCallback
// tham số thứ 2 mà hàm này giải quyết chihs là 1 callback gọi tới doThirdThing với giá trị dầu vào
// là newResult và dĩ nhiên hàm này cũng là 1 hàm bất đồng bộ. 

// // thực hiện bằng promise 
// doSomething()
// .then(function(result) {
//   return doSomethingElse(result);
// })
// .then(function(newResult) {
//   return doThirdThing(newResult);
// })
// .then(function(finalResult) {
//   console.log('Got the final result: ' + finalResult);
// })
// .catch(failureCallback);


   
new Promise (function (resolve,reject) {
    setTimeout(function(){ // chờ đợi sau 20s mới được resolve 
        resolve("đã song 20s"); 
    },20000)
    
})
.then (str => console.log(str))



// cách khởi tạo ra promise bằng method tĩnh 

Promise.resolve("Promise được tạo ra từ method tĩnh")
    .then (
        function (data) {
            console.log(data); 
        }
    )

//  đối với array 
 var arrPromise = [1,2,3]; 
 Promise.resolve(arrPromise).then ( (value) => {console.log(value)} ); 


/* Task queues vs microtasks 
Các lệnh gọi lại Promise được xử lý như một Microtask trong khi các lệnh gọi lại setTimeout () 
được xử lý dưới dạng Task queues. */


// value đầu vào của then phía trước không thể sử dụng ở then sau. muốn sử dụng phải trả về cùng ruturn

new Promise(
    function (resolve,reject) {  // thao tác xử lý -> function có các thao tác bất động bộ nè !
        let str = "value đầu vào của then"; 
        if (str != "") {
            resolve(str);  // gọi hàm resolve 
        }
    }
) 
.then (
    function (value) {
        console.log(value); 
        let newValue = "value mới trong then phía trước";
        return [value,newValue]; 
    }
)
.then (
    function (arrValue) {
        console.log(arrValue); 
    }
)


/* 
Một promise sẽ được đại diện cho 1 hành động thành công hoặc thất bại của 1 hành động bất đồng
bộ   
*/

 

// khi sử dụng callback sẽ sinh ra : callback hell và pyramid of doom 



// xem về arrow fn 
function phepCong(a) {
    return a + 100;
}

// viết lại bằng arrow fn 

// cách đặc tên cho arrow fn
var fnArrow = a => a + 100;
// gọi tới 
console.log(fnArrow(100))  // var Tenbien = arrow fn 


// nếu như có nhiều hơn 1 dòng lệnh phải sử dụng kèm từ khóa return nếu bạn muốn return 
var newArrow = (a, b) => {
    console.log(a + b);
    return a + b;
}






// giải quyết bài toán cách nhau 2s lại in ra số thứ tự tương ứng 
// giải quyết theo phong cách callback

// setTimeout(
//     function() {
//         console.log(1); 
//         setTimeout(
//             function() {
//                 console.log(2); 
//                 setTimeout(
//                     function() {
//                         console.log(3); 
//                         setTimeout(
//                             function() {
//                                 console.log(4); 

//                             },2000
//                         )
//                     },2000
//                 )
//             },2000
//         )
//     },2000
// )



// giả sử : 
// function myCall(str) {
//     console.log(str); 
// }

// setTimeout(function() {
//     myCall("Đức Nguyên gọi myCall"); 
// },2000); 


/* 
đối với các hàm cần truyền vào callback tốt nhất là nên đưa vào 1 function vô danh chứ không 
nên đưa vào 1 fucntion có sẵn bởi vì ta chỉ có thể truyền thẳng tên hàm vào làm callback khi bên
trong hàm đó không gọi lại 1 function nào có tham số phần code phía trên là ví dụ 
 */







/* 
làm thêm ví dụ để có thể hiểu thêm về promise phân tích bài toán hiển thị ra comment của người 
dùng 
- tất cả dữ liệu : đều dược lưu tại data base và sẽ được backend trả về cho ông front end => và hành
  động lấy giữ liệu này là bất đồng bộ 
- lấy ra comment của người dùng trước: sau khi lấy được commet => lấy đến user => để có thể hiển thị
  ra cho người dùng. và hai hành đồng này đang bị phụ thuộc vào nhau => vì vậy: sau khi lấy được 
  comment thì lấy ra những cái id của người comment => sau đó mới có thể lấy tiếp danh sách user
  và lọc ra những người comment sau đó hiển thị ra.
- trong đoạn code của f8 có 1 chi tiết : sau khi nhận được comment và lọc ra tất cả comment
  thì phía bên trong lại có 1 promise được return và sau đó then : mục đích : để lấy được cả comment 
  và user một lúc sau đó mới truyền xuống cái then phía dưới hoặc cũng có thể làm theo cách khác
fake API ( làm giả cơ sở dữ liệu )
 */

var users = [
    {
        id: 1,
        name: "Hồ Đức Nguyên"
    },
    {
        id: 2,
        name: "F8 Offcial"
    }
]

var comments = [
    {
        id: 1,
        idUser: 1,
        content: "sao anh chưa ra video"
    },
    {
        id: 2,
        idUser: 2,
        content: "Sắp ra em ơi!"
    }
]

// tiếp theo viết ra 1 hàm nhận về comment :



const getComment = new Promise(
    function (resolve, reject) {
        setTimeout(function () {
            resolve(comments)
        }, 3000);
    }
)


// tạo ra 1 promise 
function getUsers(users) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(users);
        }, 3000)
    })
}


getComment.then(function (comments) {
    var idComments = comments.map(function (comment) {
        return comment.idUser;
    })
    return getUsers(users)  // nếu không return thì chỗ này chỉ là chạy bất đồng bộ
        .then(function (users) {
            return {
                users: users,
                idComments: idComments
            }
        })

})
    .then(function (data) {
        console.log("trước khi in data");
        console.log(data);
    })
// đặc thêm 1 vài câu hỏi : điều gì xảy ra khi 1 promise không được thực thi ( không được gọi lại )
// với lại khi tạo promise nên viết theo funciton hay new ra !

// nếu viết theo function thì 



