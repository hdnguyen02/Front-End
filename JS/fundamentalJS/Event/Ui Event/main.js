// TODO : UI event 

// ? mouseover/mouseout, relatedTarget
// ! relatedTarget có liên quan đến thuộc tính target

const box1Element = document.getElementById('box-1')

box1Element.addEventListener('mouseover',(event) => { 
    console.log(event.currentTarget)
    console.log(event.relatedTarget)
})


// ? Với mouseover 
// * relatedTarget chỉ ra object mà con trỏ chuộc đang đứng trước khi đến target 
// * Nếu relatedTarget = null -> Chứng tỏ con trỏ chuộc vừa trỏ 1 nơi không năm trong màn hình web 
 
// ? Với mouseout -> Ngược lại

// * Khi con trỏ chuộc di chuyển từ phần tử cha vào phần tử con -> event mouseout vẫn được kích hoạt 

// * Theo logic của trình duyệt, con trỏ chuộc chỉ có thể đứng tại 1 phần tử ( phần tử có z-index cao hơn ) cao nhất.  => Vì vậy, nếu nó đi đến một phần tử khác (thậm chí là một phần tử con), thì vẫn được tính là rời khỏi phần tử đó. 

const parentElement = document.getElementById('parent')
const childElement = document.getElementById('child')

parentElement.addEventListener('mouseout',(event) => { 
    console.log('out') 
})

childElement.addEventListener('mouseout',(event) => { 
    console.log('out from child')
})




// ! Để giải quyết vấn đề này. Sử dụng 2 event: 
// ? mouseenter, mouseleave
// * Giống với mouseover/mouseout nhưng không màn tới các phần tử con. 
// * Không bị nổi bọt sự kiện 


// * Tùy theo bạn muốn sử lý thế nào mà bạn có muốn nổi bọt trong sự kiện hay không. 
// * Ví dụ khi có 1 table. bên trong có nhiều child. Nếu bạn bắt sự kiện không nổi bọt -> phải bắt sự kiện trên từng child. Nhưng thay vào đó có thể chọn nổi bọt sự kiện -> mục đích lấy ra event.target -> chính là phần tử phía đang ở phía dưới con trỏ chuộc -> child -> chỉ sử lý trên table 


// * Thực hành tạo kéo thả   

