
// Tại sao lại cần có Callback ? 

/* Javascript là ngôn ngữ bất đồng bộ. Các đoạn code sẽ không phải lúc nào cũng chạy từ 
trên xuống dưới.  

Ví dụ minh họa:  

Dòng code 1 ( đồng bộ )
Dòng code 2 ( bất đồng bộ )
    Công việc A 
Dòng code 3 ( đồng bộ )

-> dòng code 1 -> dòng code 3 

Và dòng code 2 bất đồng bộ nên được chạy song song. Công việc A sẽ được thực thi sau khi
dòng code 2 thực thi. Nhưng nếu ta không callback mà chỉ cho Công việc A đó thực hiện tuần tự 
sau phía dưới đoạn code 2 thì lúc này công việc A sẽ được thực thi trước mà không có kết quả 

1 công việc sau khi thực hiện song -> callback sẽ được gọi  

-> Callback sinh ra để có thể đồng bộ cho đoạn code bất đồng bộ.


- bất đồng bộ : Thực hiện 1 công việc tốn thời gian và cần chờ hành đồng đó để 
lấy kết quả. -> các công việc có thể chạy song song với nhau 
- đồng bộ : Chạy code tuần tự, dòng code phía trên song mới tới code phía dưới 


 */


// callback: 1 func được thực thi sau khi 1 việc nào đó hoàn thành. kể cả bất đồng bộ 
// và đồng bộ 
// trong trường hợp bất đồng bộ : callback có tác dụng không khiến đoạn đoạn đó chạy tức thì
// mà sẽ thực thi đoạn code đó sau khi kết quả của bất đồng bộ đã song  

// ví dụ :  

// func sử lý trạng thái data -> func này chính là 1 callback 
// giải thích : request.onreadystatechange là bất đồng bộ. và cái hàm đó luôn được gọi 
// sau khi request đã thực thi song. và sau request song nó cần thực hiện gì thì bỏ callback vào 
// để thực thi -> nếu bỏ đoạn code này suống phía dưới cái kia thì đâu có được 
// Callback sinh ra để có thể đồng bộ cho đoạn code bất đồng bộ.
function success() {
    console.log('thành công')
}

function error() {
    console.log('Không thành công')
}

function funcOnReadyStateChange(success,error) { 
    if (this.readyState == 4 && this.status == 200) {
        success() 
    }
    else {
        error()
    }
}


const api = 'https://jsonplaceholder.typicode.com/todos/1'
let request = new XMLHttpRequest()
request.open('GET',api,true)
request.send()



// async 



request.onreadystatechange = funcOnReadyStateChange




