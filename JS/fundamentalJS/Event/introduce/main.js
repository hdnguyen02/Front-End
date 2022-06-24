// TODO:  Event 
//* Là dấu hiệu cho thấy 1 sự kiện gì đó đã xảy ra trên web -> async

// TODO : Một vài sự kiện hay sử dụng  
// ? Mouse events: 
// * click – when the mouse clicks on an element (touchscreen devices generate it on a tap).
// * contextmenu – when the mouse right-clicks on an element.
// * mouseover / mouseout – when the mouse cursor comes over / leaves an element.
// * mousedown / mouseup – when the mouse button is pressed / released over an element.
// * mousemove – when the mouse is moved.


// ? Keyboard events:
// * keydown and keyup – when a keyboard key is pressed and released.


// ? Form element events
// * submit – when the visitor submits a <form>.
// * focus – when the visitor focuses on an element, e.g. on an <input>.

// ? Document events
// * DOMContentLoaded – khi HTML được load. DOM được xây dựng hoàn chỉnh 

// ? CSS events
// * transitionend – when a CSS-animation finishes.


// ? Các cách đặt sự kiện 
// * attributes -> đặt sự kiện bên element.  (không phân biệt chữ hoa thường )
// * DOM property -> on + sự kiện được kích hoạt = function


// ! Để xóa 1 event -> gán event đó cho null 
// * element.onclick = null




// * Từ khóa this attributes khi set events là element 

// ! Bên html truyền tham số là this -> this chính là element đó
const showThis = function (event) {  // * event = this
    console.log(event)
}




// ! document.body.setAttribute('onclick', function() { alert(1) }); 
// * Viết như này là sai -> khi đó function chuyển sang string 


// ! Với on<event> chỉ đặt được function tương ứng với event. Sử dụng -> addEventListener


document.getElementById('div-event').addEventListener('click',(event) => { 
    // in ra theo tọa độ 
    console.log(event.currentTarget)
    console.log(event.target)
})

// * Với addEventListener có thể gắn nhieuf handler vào. 

// ! Có một vài event chỉ hoạt động trên addEventListener

// * element.removeEventListener(event, handler, [options]) => yêu cầu phải cùng function 



// ? Để xử lý đúng 1 event, chúng ta muốn biết thêm nhiều điều xảy ra. Không chỉ là một "nhấp chuột" hoặc một "phím xuống", mà còn là tọa độ con trỏ là gì? Phím nào đã được nhấn? Và như thế.
// * Khi 1 event xảy ra. trình duyệt sẽ tạo ra 1 objectất cả các chi tiết cần thiết co 1 sự kiện vào object đó. và đặt nó vào đối số của function handler


// * target is the element that triggered the event (e.g., the user clicked on)
// * currentTarget is the element that the event listener is attached to. 


// * có thể sử dụng từ event trong html event. 



// ? Object handlers: handleEvent
// * Chúng ta có thể gán 1 object vào handler. -> và khi object đó được gọi -> method handleEvent được gọi 
// * Chúng ta có thể gán 1 object được tạo ra từ class vào handler -> method handleEvent -> Nhưng phải phân chia rõ ra event nào làm sự kiện nào.


const btnClass = document.getElementById('btn-class')


let obj = {
    handleEvent(event) {
      alert(`from object ${event.type}`)
    }
  };

btnClass.addEventListener('click',obj)
btnClass.addEventListener('contextmenu',obj)








