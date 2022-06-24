 

 // Các thuộc tính của node  

// kiểm tra loại node : 

console.log(document.nodeType === 9)   //  thuộc doccument type  
/* 
elem.nodeType == 1 for element nodes,
elem.nodeType == 3 for text nodes,
elem.nodeType == 9 for the document object, 
*/


// lấy ra toàn bộ text ở text 
let doc = document.getElementsByTagName('body')[0].outerHTML
body.hidden = false // không hiển thị element -> tương tự với thuộc tính display:none Nhưng ngắn hơn 


// Một vài thuộc tính phổ biến khác :  
// value : -> input,select ( đi kèm với option ),textarea ( giống thẻ input nhưng có thêm rows và cols )
// href : thuộc tính củ thẻ a  
// id  : có ở tất cả element tag 


