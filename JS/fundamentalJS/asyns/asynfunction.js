// khi promise lồng vào nhau 
// const promise = new Promise(function(resolve, reject) {
//     console.log("Promise callback");
//     resolve();
//   }).then(function(result) {
//     console.log("Promise callback (.then)");
//   });
  
//   setTimeout(function() {
//     console.log("event-loop cycle: Promise (fulfilled)", promise)
//   }, 0);
  
//   console.log("Promise (pending)", promise);




/* const promiseTest = new Promise (function (resolve,reject) {

    console.log("bên trong promise"); 
    resolve(); 
})
.then (function () {
    console.log("call then");   // Chỗ này bất đồng bộ
})

console.log("phía ngoài promise"); */  // chạy sau cái logic của promise

// có 1 điều cần chú ý : bên trong của 1 promise sẽ chạy đồng bộ với 1 vài câu lệnh đồng bộ 
// còn đối với then thì là bất đồng bộ
// Các then lồng vào nhau 

/*
    Một promise đơn giản nếu không có sự lồng nhau của các then. Việt lồng nhau khiến sự bố trí
    code không cẩn thận

*/


// doSomethingCritical()
// .then(result => doSomethingOptional(result)  // tức là cái này cũng là promise
//   .then(optionalResult => doSomethingExtraNice(optionalResult))  // cái then lồng nhau ! 
//   .catch(e => {})) 
  
  
//   // Ignore if optional stuff fails; proceed.
// .then(() => moreCriticalStuff())
// .catch(e => console.error("Critical failure: " + e.message));



// cái catch năm bên trong chỉ bắc những cái lỗi của hầm như của doSomethingCritical, 
// doSomethingOptional


// const proMiseNest = new Promise (function (resolve,reject) {
//     setTimeout (function () {
//         resolve("value của promise"); 
//     },2000); 
// } )


// function suLyTrongThen (data) {
//     return new Promise(function (resolve,reject) {
    
//         setTimeout (function () {
//             resolve(data); 
//         } , 3000)
      
//     })
// }

// proMiseNest    //  phải chờ 2s để có thể thực thi 
//          .then (function(data) {
            
//              suLyTrongThen(data) // chạy sau 3s
//             .then (newData => console.log("then lồng nhau: " + newData))  // phải đợi 5s mới được xử lý
//             .catch (error => console.log("Lỗi trong cái then lồng nhau " + error));
//             return "Hồ Đức Nguyên";  
//          } )
//          .then (haha => console.log("Ở ngoài then nhé : " + haha))   // cái này chỉ cần 2s là chạy song thôi
//          .catch (function (error) {
//              console.log("Lỗi trong then bên ngoài :" + error); 
//          }) 


         // Hiểu đơn giản với promise lồng nhau như sau : 
        
         /*
            Nếu trong cái then lại có công việc liên quan tới promise -> thì cái then 
            bên dưới sẽ không cần phải chờ nếu như cái then bên trên bất đồng bộ
            Ngoài ra cái then kia vẫn có thể return ra value như một cách thông thường 
            catch nằm trong khu vực nào thì nó chỉ bắt lỗi nằm trong khu vực đó.  
         */



// Các lỗi sai thường gặp khi viết promise : 

// đoạn code mẫu: 
// Bad example! Spot 3 mistakes!

/* doSomething().then(function(result) {
    doSomethingElse(result) // Quên không return trong then + Không cần thiết phải lồng vào nhau
    .then(newResult => doThirdThing(newResult)); *** Dòng này
  }).then(() => doFourthThing());
  // không có catch! */

/*

doSomethingElse() chính là 1 promise -> bởi vì phía sau .then -> điều này chỉ có promise mới 
làm được => nhưng ta lại không return mà lại viết trong then luôn -> không nên viết thế này
.Nếu như có return mà ta lập tức then ở ngay phía dưới -> Điều này khiến cho chain không liền 
mạch. -> cái then ngay sau return sẽ nhận được kết quả trả về của cái return promise đó. Và 
cái then bên ngoài sẽ chạy song song so với cái then phía trên. Và kết then bên ngoài nhận được 
không phải từ cái return promise. Mà cái then ngay sau return promise mới nhận được giá trị trả về
đó 


Sai lầm thứ nhất là không chain mọi thứ lại với nhau một cách hợp lý. Điều này xảy ra khi chúng
ta tạo một Promise mới nhưng lại quên return Promise đó. Hệ quả là chain không liên quan nhau,hay nói
 đúng hơn là chúng ta có hai chuỗi độc lập đang chạy đua. Điều này có nghĩa là 
doFourthThing () sẽ không đợi doSomethingElse () hoặc doThirdThing () kết thúc và sẽ chạy song song 
với chúng, Không đúng với ý muốn của chúng ta. Các chain riêng biệt cũng có cách xử lý lỗi riêng biệt,
 dẫn đến các lỗi không được khắc phục. 
 */

 // chúng ta chain promise khi nào 
 
 /*
Nhu cầu phổ biến khi thực hiện hai hoặc nhiều Chức năng không đồng bộ trở lên, trong đó mỗi chức năng
tiếp theo bắt đầu khi hoạt động trước đó thành công, và đầu vào là kết quả trả về từ cái then phía 
trước đó. Chúng ta thực hiện điều này bằng cách tạo ra Promise chain.
 */


// Học kĩ về then 

/* const promise = Promise.resolve("giá trị trả về từ promise");  */



/* let thenPromise = promise.then (function (data) {  // cái function trong then được gọi bất đồng bộ -> phải đợi callstack trống 
    console.log(data); 
    return data; 
})

setTimeout (function () {
    console.log(thenPromise);   
},1000)

console.log(thenPromise); */   // hàm này là đồng bộ nên được chạy trước ->
//  lúc này cái thenPromise chưa được chạy
// kiểm tra tình trạng của 1 promise 

// về cơ bản ta phải hiểu như thế này -> chi khi nào trong then là return promise thì
// lúc đó cái then phía sau mới chờ đợi 

// tìm hiểu về promise all 

// hàm này nhận tất cả promise làm đối số và các đối số này cơ bản phải lặp qua được ->
// bỏ tất cả promise vào 1 cái array
// sẽ là thành công nếu tất cả đều thành công và thất bại nếu 1 cái bị thất bại  
/* 
let promise1 = Promise.resolve(1); 
let promise2 = Promise.reject(2); 
*/

/* 
Promise.all ([promise1,promise2])  // lặp qua 2 promise này và chờ đợi cho đến khi tất cả resolve
            .then (value => console.log(value))  
            .catch (error => console.log(error + " lôi"))   // in tại dòng này -> vì có 1 cái lỗi 
            // in ra số 2 
*/  

/* Promise.all ([])    // Nếu pass vào là trống -> là resolve, nếu đầu vào của promise all là rỗng -> đồng bộ 
.then (
    function () {
        console.log("trống trơn"); 
    }
) */

//  

/* 
cho dù có là không promise thì khi pass vào trong Promise.all đều là bất đồng bộ. 
Promise.all([1,2,3]).then (value => console.log(value + " Không promise")) // chạy bất đồng bộ mặc 
dù 1 2 3 không hề là promise 
*/



/* 
let allPromise = Promise.all([1,2,3]); 
console.log(allPromise);   // chắc chắn lúc này in ra là trạng thái pendidng  
setTimeout ( 
    function () {
        console.log(allPromise);   
    }
) 
*/


/* 
let valuePromiseAll = Promise.all([]); 
console.log(valuePromiseAll);    // lập tức in ra  
console.log("bắc đầu"); // bị in sau -> chứng tỏ khi không có tham số Promiss là đồng bộ 
*/



// thử tốc độ làm việc của promise all 

// tạo ra 2 promise chạy song song được hứng bởi promise all
// nếu có nhiều hành động chạy bất động bộ với nhau thì ta có thể sử dụng promise all để hứng 
// tất cả sau đó sử dụng để làm gì đó... 

/* 
let promise1s = new Promise (function (resolve) {
    setTimeout(function () {
        resolve("giá trị thuộc Promise 1s");
    },1000); 
})

let promise2s = new Promise (function (resolve) {
    setTimeout(function () {
        resolve("giá trị thuộc Promise 4s");  // phải chờ đợi tất cả làm song
    },4000); 
})

// có gì khác biệt so với chạy từng cái 1
promise1s.then (data => console.log(data))  // dự đoán sẽ chạy sau 1s 
promise2s.then (data => console.log(data))

// trong trường hợp reject -> giá trị được trả ra khi reject là tham số của catch 


Promise.all([promise1s,promise2s]) 
        .then (array => console.log(array)) 
        .catch ( () => console.log("catch")) 
*/



// học về promise any  
// Nhận về promise resolve sớm nhất -> chỉ nhận 1 cái -> trái ngược với all 

/* Promise.any([1,2,3])
.then (data => console.log(data)) // nhận tham số đầu tiên nếu tất cả đều non-promise 

Promise.any ([1,Promise.resolve("giá trị resolve")])
.then (data => console.log(data))  */


/* let x = Promise.any([1,2,3])  // bất đống bộ 

console.log (x); */


/// tìm hiểu về asyn fn 

// hàm cho phép sự bất đồng bộ diễn ra.Dựa trên promise và khiến nó rõ ràng hơn


// Ví dụ của asysc fn 

/*
    trong fn có từ khóa async luôn trả về 1 promise -> nếu kết quả là non-promise thì nó tự
    động nhét tạo ra 1 promise và bao bọc kết quả return đó lại
*/

/* async function asyncFn () {
    // trong hàm này có cơ chế sử dụng từ khóa await   
    console.log("ahihi");   // được chạy trước -> chỗ này là đồng bộ thôi
    return 1; // tương đương với: Promise.resolve(1); 

}

asyncFn()
    .then (data => console.log(data)) 


console.log("bắc đầu");    */

// cơ chế khi có thêm từ khóa await  
// công thức :let value = await promise; -> chỉ được sử dụng bên trong async fn 
// từ khóa này có công dụng khiến đống code phía dưới phải chờ cho đến khi cái promise đó
// được thực thi song thì đống code phía dưới mới tiếp tục thực thi 

/* async function asyncPromise () {
    // sử dụng từ khóa await 
    let promise = new Promise (function (resolve) {
        // sau 10s thì đống code này mới được thực thi 
        setTimeout(function () {
            resolve("giá trị promise"); 
        } ,5000)
    }) 
    // thực hiện từ khóa await
    let result = await promise;  // đang nhận kêt quả từ promise -> thay thế cho then -> dễ viết dễ sử dụng 
    console.log("kết quả",result); // thực hiện cái gì ở trọng then
    console.log("đoạn code sau 10s"); 


} */


/* async function helloWordAfter3s() {
    await new Promise( function (resolve) {
        setTimeout(function () {
            resolve(); 
        } ,3000)
    })
    console.log("hello word"); 
}

helloWordAfter3s(); */ 

// Nếu lafmt heo promise

/* let helloWord = new Promise (function (resolve) {
    setTimeout(function () {
        resolve(); // sau 3s được là song 
    } ,3000)
})

helloWord.then (function () {
    console.log("hello word"); 
})
 */


// cách viết code mới 

function logData (data1,data2) {
    console.log(data1,data2); 
}

// new Promise (function (resolve) {
//     resolve("ahihi"); 
// })
// .then (logData)     //  có thể viết theo kiểu này -> chỉ cần hàm đó có 1 đối số truyền vào, khớp
// với giá trị trả về


// setTimeout (logData,2000);   // in ra undefired -> vì không truyền gì vào

// nên viết thế này 
// setTimeout(logData,2000,"hic hic","ha ha");   // Tham số thứ 3 trở đi sẽ là giá trị đầu vào của tên hàm truyền vào 


// viết hàm sleep 
function sleep(ms) {  
    // hàm trả ra 1 promise
    return new Promise (function (resolve) {
        setTimeout(resolve,ms); 
    })
}

 async function logNumber(...listNumber) {    //   chỗ này vì là biến nên là toán tử rest -> bỏ vào chỗ này là array nhé
    // chờ đợ hàm sleep 
    for ( let i = 0; i < listNumber.length;i++) {
        await sleep(2000); 
        console.log(listNumber[i]); 
    }
}


class Thenable {
    constructor(num) { // hàm khởi tạo
      this.num = num;
    }
    then(resolve, reject) {  // method ->
      setTimeout(() => resolve(this.num * 2), 3000); // (*)
    }
  }
  
  async function f() {
    // waits for 3 second, then result becomes 2
    let result = await new Thenable(1);
    console.log(result);   
  }
  
  f();

  // Khái niệm thenable
  /*
    là 1 object có chứa method then trong đó, tất cả promise đều là thenable, Nhưng ngược lại
    không phải thenable nào cũng là promise 
    Có nhiều promise patterns, Giống chain hoặc async/await 
  */

 
// về việc sử lý lỗi trong async fn 

async function functionReject() {

}




