

// ? bubbing trong event 
// * Khi 1 element nhận sự kiện. Sau đó sự kiện sẽ được lan truyền đến element parent. => acsentor => body => html => document => window 


// * Đa số các event đều bubbing. Ngoài trừ 1 vài event như : focus...


// ? event.target 

 const formEl = document.getElementById('form')
 const divEll = document.getElementById('div')
 const divCapturel = document.getElementById('div-capture')

 // *event.target là element được lồng xâu nhất tác động lên sự kiện. 

 // bắt sự kiện 

 
 formEl.onclick = function(event) { 
    console.log(event.target)

    // this === curentTarget => element đặt ra sự kiện 
    // ! khác với this ở adeventListener 
 }


 // * tham số thứ 3 của adeventLister là capture -> ít được sử dụng 



// * Sử lý luồn sự kiện capture
// * Ngược lại so với bubing. capture là 1 trong 3 phase của event. (target,bubbling)

document.body.addEventListener('click',() => { 
    console.log('capture body')
},true)

document.body.addEventListener('click',() => { 
    console.log('body bubbling')
})

divCapturel.addEventListener('click',() => { 
    console.log('capture div')
})  



// * Khi 1 event xảy ra. Có 3 phase được xảy ra theo thứ tự : capture(1) -> target(2) -> bubbling(3).
// * capture thuộc về tham số thứ 3 (default:false)
// * capture  : event được thực thi từ element tổ tiên -> target 
// * bubbling : event được thực thi từ target -> element tổ tiên 
// * khi 1 event xảy ra : trước tiên là các element tổ tiên capture trước. Sau đó tới target rồi đến bubbling. Muốn element nào có event capture thì tham số thứ 3 của hàm addEventListener là true 

// * true -> {capture:true}







