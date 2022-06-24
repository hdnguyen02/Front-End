 
 // ? Khái niệm:  
 // * DOM : viết tắt của document object model.Và các object trong mô hình DOM đều được gọi là node.
// ! Một vài node hay sử dụng
// * 1.Node Element ( các cặp thẻ) -> element
// * 2.Node Text (đoạn text nằm giữa các cặp thẻ, có thể là khoản trắng và xuống dòng )
// * 3.Attribute ( các property nằm trong tab <> hoặc </>  )
// * ... 


// * khi được truy cập vào, website nhận được code html và tạo ra DOM. -> sử dụng js có thể thay đổi DOM 

// * DOM HTML không hề thuộc jS. jS cung cấp chỉ thông qua document để tham chiếu đến các object trong DOM. DOM HTML nằm trong web API. nên có thể sử dụng DOM trên trình duyệt.  


// * JS ban đàu được tạo ra cho các trình duyệt. Sau đó phát triển trên nhiều nền tảng JS có thể chạy trên trình duyệt,server, thậm chí là một máy pha cà phê “thông minh”, 


// * trên phía web -> window (DOM HTML,BOM,Javascript)

// * DOM -> đại diện cho tất cả nội dung web dưới dạng các object có thể được sửa đổi.Doccument -> Muốn sữa đổi gì đều thông qua document




// DOM là đại diện HTML dưới dạng cây của các thẻ. tất cả các node trên cây đều là 1 object 

                        //   Mô Hình HTML DOM
/*
                                Doccument 

                                html (root)
                
                header                            body 
                                                             
                                                   h1 
                                                         
                    text('Hello Word')                           attribute(class = "title")

*/




/* 
-> nếu trình duyệt gặp phải HTML không đúng định dạng -> trong lúc tạo DOM sẽ tự động
sữa lại cho đúng. 
ví dụ : nếu HTML không có thẻ html => DOM tự động tạo.Với các thẻ head và body cũng tương tự 
Nếu như chỉ có 1 chữ Hello trong file html -> tự động lấy html. head. body bọc lại  
Nêu viết thiếu tag -> DOM cũng tự động thêm tag
Các table luôn có <tbody>  =>  DOM tự động tạo 
Tất cả những gì trong file HTML đều được biểu diễn thành node (object) của DOM kể cả comment 
doccument là 1 node trong DOM. -> có 12 loại node trong DOM nhưng chúng ta chỉ làm việc với 4 
loại chính  
1. Doccument : entry point -> phải thông qua doccument để có thể truy cập các node khác 
2. Element : các thẻ tag xây dựng nên 
3. Text : chưa văn bản  
4. Comment : cmt được đặt ở đó tuy không hiển thị -> nhưng vẫn thông qua DOM để lấy được 
Ngoài ra còn có attribue Node  */


// đại diện thẻ html 

const html = document.documentElement  // object html 
const body = document.body // có thể là null nếu truy cập vào thời điểm chưa load đươc body
// trong DOM nếu là null là không tồn tại node đó 

// * Child nodes -> Thuộc tính của node -> trả về array-like ( trả về child node của node hiện tại )
// * firstChild ,lastChild, hasChildNodes  
// * DOM hiện tại chỉ có thể đọc -> muốn thao tác thay đổi xóa sữa -> sử dụng js
// * đối với childNodes ( là array like ) nên sử for of vì đã được thiết lập và không nên sử dụng for in  


// * Siblings -> là các node có chung parent -> có 2 thuộc tính cần chú ý : nextSiblin previousSibling 


// ! parentNode và parentElement là 2 thuộc tính khác nhau 
// * phân biệt : trong mọi trường hợp thì 2 thuộc tính này cho ra kêt quả giống nhau. khi parentNode không phải là element(tag) ( chẳng hạn doccument ) -> thì parentElement sẽ là NULL 

// ! Thao tác với NODE : parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling.
// ! Chỉ thao tác với ELEMENT : parentElement, children, firstElementChild, lastElementChild,   previousElementSibling, nextElementSibling. */


// * lấy ra các element : 
// * document.getElementById(id) ...  


// * DOM Navigation

// * các node trong DOM có quan hệ với nhau 
// * root node là html 
// * ngoài trừ root tất cả các node đều có node parent 


// TODO : Attributes và properties
// * id là property của các element. 

const para = document.getElementById('tag-p')
// * element.hasAttribute(name) – checks for existence.
// * element.getAttribute(name) – gets the value.
// * element.setAttribute(name, value) – sets the value.
// * element.removeAttribute(name) – removes the attribute.

// ! Attribute không phân biệt chữ hoa chữ thường : id === ID 

console.log(para.attributes)  // toàn bộ 
for (let att of para.attributes) { 
    console.log(att.value)
}

// ! Property có thể là attributes. Nhưng attributes không phải lúc nào cũng là property 

// * Không phải lúc nào value của attributes cũng là string. có thể là bool. object 
// * Bool trong trường hợp thẻ input checked. hoặc attributes style là 1 object 


// * Công dụng của attributes : Dùng để đánh dấu element. 

// * Lấy ra theo att

let info = { 
    name:'Hồ Đức Nguyên', 
    age:20
}

for (let span of document.querySelectorAll('[show-info]')) { 
    span.innerHTML = info[span.getAttribute('show-info')]
}


// * Ngoài ra còn thể style cho các element -> span[show-info='name']

// * Sử dụng dataSet 
console.log(document.querySelector('[show-info]').dataset.info,'data-set')
// * Khác với Attributes thông thường. dataset có có chế setter/getter  


// * property là những gì thuộc DOM object  
// * Attributes là những gi được viết trong html 


// ! so sánh 
// *                           Properties                             Attributes
//  ?               Value       any                                       string
//  ?               Name        Phân biệt chứ hoa, chữ thường              Không phân biệt

// * Hầu hết các trường hợp nên sử dụng property. Sử dụng Attributes khi property không phù hợp. 



// TODO : insert element 
// * node.append(...nodes or strings) – append nodes or strings at the end of node,
// * node.prepend(...nodes or strings) – insert nodes or strings at the beginning of node,
// * node.before(...nodes or strings) –- insert nodes or strings before node,
// * node.after(...nodes or strings) –- insert nodes or strings after node,
// * node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.

// ! Có thể thêm nhiều node hoặc string. 


// ? Cách insert vào chính node đó 
// * elem.insertAdjacentHTML(where, html) 
// * "beforebegin" – insert html immediately before elem,
// * "afterbegin" – insert html into elem, at the beginning,
// * "beforeend" – insert html into elem, at the end,
// * "afterend" – insert html immediately after elem.
// -> Chèn sung quanh node hiện tại 


/* elem.insertAdjacentText(where, text) – the same syntax, but a string of text is inserted “as text” instead of HTML,
elem.insertAdjacentElement(where, elem) – the same syntax, but inserts an element. */

// * remove() -> xóa phần tử ra khỏi DOM 


// * after() -> duy chuyển phần tử 

// * clone(true / false) -> The call elem.cloneNode(true) creates a “deep” clone of the element – with all attributes and subelements. If we call elem.cloneNode(false), then the clone is made without child elements.



// * DocumentFragment - Là 1 node DOM đặt biệt, có công dụng wrap các element node. 
let fragment = new DocumentFragment()
let spanElement = document.createElement('span')
let spanText = document.createTextNode('Thẻ span')
spanElement.append(spanText)
fragment.append(spanElement)
document.body.append(fragment)

// * -> Cách này hiếm khi được sử dụng : bởi vì ta có thể sử dụng array thay vì DocumentFragment



// TODO : style và class  
// * Sử dụng JS có thể sữa đổi style và class của element. 
// * Chúng ta thích sử dụng class để tạo css hơn là style. Chúng ta chỉ sử dụng style khi class không thể sử lý được. 

// * ví dụ như ta cần tọa dộ sau 1 hồi tính toán -> sau đó chỉ có thể sử dụng style để tham chiếu tới.  



// ? className và classList
// * className in ra toàn bộ class hiện tại của element đó 
const learnClass = document.getElementById('learn-class')


// ! Nếu ta gán lại className -> toàn bộ class sẽ bị thay thế

// * classList -> là 1 object với các method add/remove/toggle trên 1 class 
// * toggle -> kiểm tra xem class đó có tồn tại chưa, nếu chưa thì thêm class đó vào 
// * element.classList.contains('class') -> true/false -> kiểm tra sự tồn tại của 1 class



// * classList là iterable -> có thể sử dụng for...of 
let refer = learnClass.classList



// ! với style sử dụng bên js : background-color  => elem.style.backgroundColor
// ! -moz-border-radius => MozBorderRadius 
// * element.style là object tương ứng với attributes style 


// * Muốn đặt trạng thái style về mặt định -> element.style.css = '' => có thể sử dụng delete  

// ví dụ: 
learnClass.style.display = 'none'

setTimeout(() => {
     learnClass.style.display = '' // khi style.display là empty string -> DOM tự động set về default
 },2000)

/*  document.body.style.background = 'green'; //set background to green
 setTimeout(() => document.body.style.removeProperty('background'), 3000);  */

 // * vì element.style chỉ là object nên không thể áp dụng nhiều css vào được. 
 // * -> style.cssText -> ứng dụng nhiều css vào. 
 // * Cách tương tự : element.setAttribute('style', 'color: red...').
 // ! Cách này hiếm được sử dụng, Bởi với cách này cssText sẽ thay thế toán bộ css cũ. Chỉ thích hợp sử dụng với các element mới, chưa có css. 



 // ? Đơn vị trong style 
 // * nên kèm theo đơn vị cho các thuộc tính có độ dài. -> 10 là sai thay vào đó nên là 10px hoặc 10rem. 10em. 10% 



 // ? với style ta dễ setter. Nhưng làm cách nào để getter. 
 console.log(learnClass.style.paddingTop) // * empty string 
 // ! property style chỉ hoạt động dựa trên attributes style. không thể getter ra các style bên css được. 
 // * Cách giải quyết : 
 
// * getComputedStyle(element, [pseudo])
// * pseudo -> có lấy ra phần tử pseudo hay không. để trống nếu không có. ( ::before )

let computedStyle = getComputedStyle(learnClass)
let paddingBottom = computedStyle.paddingBottom

console.log(document.documentElement.clientWidth) // ! không bao gồm thanh cuộn ( scrow )
// * window.innerWidth/innerHeight -> bao gồm thanh cuộn 


// ? thuộc tính lấy ra tọa độ thanh cuộn hiện tại: 
// * window.pageYOffset   ( Thanh cuộn đứng )   ->  is an alias of window.scrollY.
// * window.pageXOffset   ( Thanh cuộn dọc )    ->  is an alias of window.scrollX.
// ! read only  


// thay đổi chiều cao body 
body.style.height = '200vh' // log ra tọa độ hiện tại của thanh scroll  
console.log(document.body.scrollTop) // * giống với  window.pageYOffset

// ? window.scrollBy(x,y) 
// * Cộng dồn tọa độ thanh cuộn theo tọa độ x,y
const scrow10 = () => { 
    window.scrollBy(0,10) // -> duy chuyển thanh cuộn 
} 


// ? window.scrollTo(x,y)
// * Duy chuyển thanh cuộn đến vị trí x,y 

// ? elem.scrollIntoView(top) -> có 2 đối số true/false  

// ? document.body.style.overflow = ‘hidden’ -> không hiển thị thanh cuộn -> trang web bất động 
// ? document.body.style.overflow = ‘’ -> trả lại thanh cuộn  


// Ngoải ra có thể ứng dụng với các thanh cuộn của element khác. Không chỉ với body 

const paraElement = document.getElementById('wrap-para')  


const scrow200 = () => { 
    paraElement.scrollBy(0,200)
}
const blockScroll = () => { 
    paraElement.style.overflow = 'hidden'
}

// ! Các thuộc tính sử dụng trên window như scrollBy, scrollTo Đều có thể sử dụng trên các scroll khác không chỉ với body. 



// ? Lấy ra chiều cao toàn bộ document  
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);





// TODO: Tọa độ  
