// hiểu kĩ về vấn đề callback hell 
/* function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
  }
  
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`Cool, the script ${script.src} is loaded`);
    alert( _ ); // function declared in the loaded script
  }); */

/*   ta có 1 function như thế này 
  tham số thứ 2 chính là callback -> function sẽ được gọi sau khi function hành động bất động bộ 
  đã thực hiện song. 

  Vấn đề : nếu như ta muốn 1 file sau khi load song thì đến file thứ 2 ta phải làm thế nào
  loadScript("script1.js", function () {
    console.log("đã load song");
    loadScript("script2.js",function () {    // Được gọi thì tức là file thứ nhất đã load song
        console.log("đã load song"); 
        loadScript("script3.js",function() {
            // thực hiện sau cùng sau khi dã load song 3 file 
        })
    })
})

*/


// -> tình trạng này được gọi là callback hell -> code bị đẩy sang bên phải -> khó đọc 

/* 
nói về promsise :  
giả sử bạn là 1 ca sỹ, và fan của bạn đang cần bài hát mới của bạn. Nhưng bạn không thể  tung ra bài 
hát là tung ra được. bạn hứa với mọi người. khi có bài hát mới liền lập tức thông  báo với họ. và 
đưa cho họ 1 cái danh sách để có thể điền địa chỉ email vào khi nào song thì bạn  sẽ gửi bài hát đó 
cho họ -> hứa hẹn sẽ có kết quả cho 1 việc gì đó nhưng không phải bây giờ 
*/ 

/*
let promise = new Promise (function (resolve) {
    console.log("Khởi chạy"); 

})   // cái function ở trong cái promise được gọi là : executor -> được khởi chạy tự động khi new ra

console.log("bắc đầu");

setTimeout(function () {
    console.log(promise.state);   // luôn in ra pending -> vì bên trong không hề resolve hoặc reject
} ,2000) 
*/


/* 
promise object là object được trả ra bởi new Promise có kèm theo constructor và bên trong cái object
này có 2 thuộc tính state và result tương ứng như sau 
state pedding : chưa xác định 
state thành công : kết quả là value được return trong resolve
state thất bại   : kết quả là errror được return trong reject   
*/



// settled : cái này được nói khi mà 1 promise của chúng ta đã resolve hoặc reject 
// trái ngược với cái initially “pending” promise.
// mỗi promise chỉ có 1 lần reslove hoặc reject 
// và chỉ có 1 cái đối số dược trả ra thôi, nêu có nhiều hơn 1 -> tất cả được bỏ qua 
// khi bị lỗi => tốt nhất nên gọi ra reject và trả ra 1 object error hoặc object 
// được thừa kế bởi error ( mặc dù trả loại nào cũng được
// )

/*
    Promise luôn có 2 phần : producing code và consume code. producing code là phần code sẽ tốn 
    thời gian để có thể trả ra kết quả . còn phần consume code là phần code sẽ đợi cho đến khi 
    prodcucing code trả ra kết quả
*/



/* 
let promise = new Promise (function (reslove,reject) {
    reject(5); 
})
promise.then(null, error => console.log(error) )  // cái then có 2 tham số -> nhưng nếu chỉ có 
1 function thì đó là fn đó là callback khi resolve 
còn có 2 tham số -> cái đầu thành công -> cái sau thất bại 
nếu cái đầu null -> cái sau là cb của reject
còn nếu như chỉ muốn 1 mình hàm callback khi error -> catch   

state và result của chúng là nội bộ -> không thể truy cập bên ngoài 
muốn truy cập phái sử dụng đến then, catch và finally 
những cái này là cái liên kết dữa prexecutor (the “producing code” or “singer”) và consume code 
-> là cái mà ta sẽ nhận được kết quả hoặc lỗi  
*/


/* let promise = new Promise (function (reslove,reject) {
    // ở cái đầu tiên
    reject("value promise"); 

})
promise.then (
    value => {throw value},error =>  error
)
.then (
    value => console.log("giá trị then 2 : " + value), error => console.log(error + " error 2") 
) */
//.catch (err => console.log(err + " lỗi trong cái then sau"))

// nếu như cái fn cb được bỏ trong cái then -> nó chỉ giải quyết cái catch phía trên nó thôi  
// Nếu nó ném ra lỗi -> kiểm tra xem cái then có thông số phía 2 có callback nào không 
// nếu không có thì gọi 

/* let promise = new Promise (function (reslove,reject) {
    // giả sử ta gọi 1 cái resolve đi 
    reslove(1); 
})

promise
    .then ( value => {throw value})
    .catch (error => {
        console.log("đang trong error1"); 
        throw error})  // cái catch chính là cái then đã nhưng tham số đầu tiên là null
    .then (data => console.log(data))
    .catch (error2 => console.log("lỗi 2:",error2))  */ // xem thử vào catch hay hay vào then -> dự đoán vào then 

// chỉ khi nào trong catch throw ra error thì lúc đó cái catch phía dưới nữa mới có thể nhận được 
// bây giờ nhé : => nếu là return -> cái then nhận -> nếu là throw -> cái catch nhận 
// Một cái catch bên dưới có thể bắc

// khi return vẫn lấy được value phía dưới cái catch đó 



// Có một cái được gọi là finally 
/* function alert (data) {
    console.log(data); 
}

new Promise (function (reslove,reject) {
    // setTimeout(reslove,2000,1);
    reslove(1); 
})
    
     
    .then (alert)   
    .finally (console.log("khởi tạo song promise hi"))  */ // không hề có được nhận đối số truyền vào

    // finally có thể đặt ở dâu trong cái then cũng được -> chỉ cần chạy hết code là nó sẽ run liền
    // nó không hề quan tâm đến kết quả của promise 


    // ta có thể gọi tới 1 hàm có 1 tham số bằng cách sau 
    

    /* let promise  =  new Promise (function (reslove) {
        setTimeout(reslove,3000,"chạy promise"); 
    })

    promise.then (value => console.log(value))

    promise.then (value => console.log(value,"tái chế"));  
 */
    // nếu có 2 function khác nhau thì sao 

    // so sánh cái khác nhau giữa promise và callback
    // promise được viết theo 1 cách rất tự nhiên -> sau khi thực hiện 1 quá trình -> 
    // tui trả về 1 kết quả -> cầm kết quả đó đi làm gi là chuyện của tra 
    // có thể sử dụng cái kết quả đó nhiều lần  =? call back chỉ có thể gọi lại callback trong 1 lần thực thi 
    // đối với cách viết callback bất đồng bộ => ta phải biết trước kết quả để có thể bỏ function đó vào sử lý 
    

    // học kĩ về promise chanin 
    // trong then nếu return chính là trả ra 1 promise



    /* let promise = new Promise (resolve => setTimeout(resolve,2000,1))

    let promiseThen = promise.then (value => value*2)  // cái này sẽ khởi chạy bất đồng bộ
    

    promiseThen.then (data => console.log(data))


    setTimeout(function () {
        console.log(promiseThen)
    },2000);  */

    //  phân biết giữa đoạn code khi new Promise và đoạn cái đươc return khi then
    // ta có thể hiểu như sau : cái then phía dưới nó chỉ chờ khi gặp phía trước nó 
    // là return promise : -> chẳng hạn như này: let promise = new Promise (resolve => setTimeout(resolve,2000,1))
    // phía trước nó đang return về 1 promise nên nó sẽ chờ 
    // còn việt trong cái then nó return về là non-promise -> thì đó chỉ là trả ra kết quả của promise
    // thôi -> nó giống giống việc bạn return ra promise ->chỉ khi nào return promise thì cái then 
    // phía dưới mới phải đợi -> khi return non-promise -> thì đó là kết quả của promise -> có thể
    // sử dụng then ngay  
    // return về 1 promise cho phép ta xây dựng 1 chuỗi bất đồng bộ ( việt này song mới tới 
    // việt kia -> và việt này không diễn ra khi callstack chưa trống )


    // viết những cái then lồng vào nhau  
    
   /*  function sleep (ms,data) {
        return new Promise (function (reslove) {
            setTimeout(reslove,ms,data); 
        })
    } */

    // 1 chuỗi hành dồng sau 
  /*   sleep(2000,1).then (
        function (value) {
            console.log(value); 
            sleep(2000,2).then (
                function (value2) {
                    console.log(value2); 
                    console.log(value,value2); 
                }
            )
        }
    ) */

    //  then lồng vào nhau thế này sinh ra cái không hay của callback hell 
    // nhưng lại có thể sử dụng được đối số của thằng then trước -> không nên viết thế này 
    // nên trải thẳng code ra 

    // Thenables
        
    // nói tóm gọn:
    // cái này là 1 object bất kì có method là then và object này sẽ dược đối sứ giống như là 
    // một promise
    // ý tưởng này rất hay trong việc phát triển ra các tương thích với promise mà không cần phải 
    // kế thừa từ promise chỉ cần bên trong promise đó có cái then là được
    
   // JavaScript kiểm tra đối tượng được trả về bởi trình xử lý .then trong dòng (*): nếu nó có một phương thức có thể gọi được đặt tên sau đó, thì nó sẽ gọi phương thức đó cung cấp các hàm gốc được giải quyết, từ chối dưới dạng đối số (tương tự như một trình thực thi) và đợi cho đến khi một trong số chúng được gọi là. Trong ví dụ trên, giải quyết (2) được gọi sau 1 giây (**). Sau đó, kết quả được chuyển tiếp xuống chuỗi.


/*    class Thenable {
    constructor(num) {
      this.num = num;
    }
    then(resolve, reject) {
      alert(resolve); // function() { native code }
      // resolve with this.num*2 after the 1 second
      setTimeout(() => resolve(this.num * 2), 1000); // (**)
    }
  }
  
  new Promise(resolve => resolve(1))
    .then(result => {
      return new Thenable(result); // (*)
    })
    .then(alert); // shows 2 after 1000ms */

    // Tính năng này cho phép chúng tôi tích hợp các đối tượng tùy chỉnh với chuỗi hứa mà không cần phải kế thừa từ Promise.


/*     new Promise(resolve => setTimeout(resolve,2000,"ahihi") )
        .then (data => new Promise(function (reslove) {
            setTimeout(reslove,2000,data); 
        }))
        .then (data => console.log(data + " sau 4s"))


        // nên return về cái promise ngay từ đâu rồi bọc tất cả các code bên trong 
        // thay vì chỉ bọc những cái bất đồng bộ  */


        // học về khi ném lỗi ra trong promise :


        // học về sử lý lỗi khi sử dụng promise
/* 
        new Promise (function () {
            // quăng ra 1 cái lỗi 
            throw Error("Đây là lỗi")
        })
        .catch (alert) */

        // bên trong của 1 cái executor : có tự bao quanh try và catch bên trong đó 
        // chỉ cần bên ném ra bằng throw thì nó tương tự với việc reject 

        // trước tiên cần tìm hiểu về khối try catch 

        /* try {
            // Đoạn code cần thực thi 
            console.log("trước khi bị lỗi"); 
            abc; 
            throw "lỗi"


        }
        catch(err) {
            // Đoạn code sẽ thực thi nếu có lỗi xảy ra 
            // nếu phía trên catch không bị lỗi gì -> tiếp tục chạy và bỏ qua phần catch này
            // nếu bị lỗi -> ném cái lý do bị lỗi qua cho catch -> và phần dưới code đó sẽ bị
            // bỏ qua 
            console.log(err); 

        } */


       /*  try {
            alert("trước khi bị lỗi"); 
            lalala; // error, variable is not defined!
            alert("sau khi bị lỗi"); 
          } catch (err) {
            alert(err.name); // ReferenceError
            alert(err.message); // lalala is not defined
            alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)
          
            // Can also show an error as a whole
            // The error is converted to string as "name: message"
            alert(err); // ReferenceError: lalala is not defined
          } */


          // bất cứ cái gì cũng có thể dùng làm lỗi 
          // thậm chí các kiểu dữ liệu nguyên thủy như là string, number 
          // nhưng tốt nhất là nên sử dụng các object có liên quan đến lỗi chẳng hạn như: 
          // Error, SyntaxError, ReferenceError
          /* let error = new Error("ahihi lỗi nè");
          
          alert(error.name); 
          alert(error.message);  */


        // trong promise hay trong then gì cũng có try trong đó cả 

        /* new Promise (function (reslove,reject) {
            abc();  // gọi tới 1 function không có thật 
            reslove();
        })
        .then (() => console.log("ahihi"))
        .catch (err => console.log(err.name))

    


        console.log("bắc đầu"); 
        
        setTimeout(function () {
            console.log("sau 4s"); 
        } , 4000) */

    // chứng tỏ luôn có catch trong cái promise -> thế nne nó mới có thể lấy được lỗi phía dưới 
    // vì có try catch nên chỉ cần sai 1 cái -> catch sẽ sử lý -> không khiến app bị giết 
    
    // thử xử lý khi lỗi bên ngoài 
    // abc();   // nếu đặc code chỗ này -> ăn lỗi luôn -> dừng chương trình luôn  


    // kể cả code của excutor hay code của then gì cũng thế -> trong 2 cái này đã 
    // ngầm định code try catch -> lỗi -> catch 
    
   /*  new Promise (function (reslove,reslove) {
        reslove(1); 
    })
        .then (value => { throw value + 1})
        .catch (value => {
            if (value!=0) {
                // không phải cái lỗi mà ta có thể sử lý được 
                throw value; 
            }
        })
        .then (value => console.log("giá trị nhận được của catch trong then " + value))
        
        .catch (finalErr => console.log('Lỗi trả ra ' + finalErr)) */

        /* window.addEventListener('unhandledrejection', function(event) {
            // the event object has two special properties:
            alert(event.promise); // [object Promise] - the promise that generated the error
            alert(event.reason); // Error: Whoops! - the unhandled error object
          }); */
          
          /* new Promise(function() {
            throw new Error("Whoops!");
          }); // no catc


          setTimeout(function () {
              console.log("ahehe"); 
          } ,3000)  // kiểm tra song app có bị kill không */
          
          
          /* new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve(); 
            }, 1000);
          })
          .then (() => {console.log("then")})
          
          new Promise(function(resolve, reject) {
            setTimeout(() => {
              throw new Error("Whoops!");
            }, 1000);
          }).catch(alert); */

          // chỗ này dễ bị mắt lừa này -> try catch khi làm việc nó chỉ
          // làm việc với bất đồng bộ thôi nhé -> vì thế cái chỗ này -> nếu throw thì phải là
          // đồng bộ -> còn với reject thì không sao cả 
          // nó chỉ nhận ném ra khi lỗi là đồng bộ thôi 
