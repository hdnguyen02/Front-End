
// TODO: select 
const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')






// TODO : event
draggables.forEach(draggable => { 
  // ? element được drag -> thêm/xóa class dragging để tạo sự khác biệt. 
  draggable.addEventListener('dragstart',event => { 
    event.target.classList.add('dragging')
  })
  draggable.addEventListener('dragend',event => {
    event.target.classList.remove('dragging')
  })
})


containers.forEach(container => { 
    container.addEventListener('dragover',event => {
        event.preventDefault() // * Cho phép hành element được drag vào. 
        const elementAffer = getDragAfterElement(container,event.clientY)
        const draggable = document.querySelector('.dragging')
        if (elementAffer == null) { 
          container.appendChild(draggable)
        }
        else { 
          container.insertBefore(draggable, elementAffer)
        }
    })
})



// TODO : Tìm ra
function getDragAfterElement(container,y){ 
   // * Lấy ra các phần tử ngay trong cái box đó ( trừ phần tử đang được kéo )
   let draggables = [...container.querySelectorAll('.draggable:not(.dragging)')] 
   return draggables.reduce((closest,child) => {  // child là tất cả những box chưa kéo 
   const box = child.getBoundingClientRect()  
   const offset = y - box.top - box.height / 2  // * độ chệnh lệch giữa con trỏ chuộc so với các phần tử 
   if (offset < 0 && offset > closest.offset) {  // * bé hơn 0 -> phần tử nằm phía phía dưới con trỏ chuộc
      return { 
        offset:offset,
        element:child
      }
   }
   else { // * Trường hợp 
      return closest
   }
   // * còn nếu như > 0 -> chứng tỏ con trỏ chuộc đang nằm phía dưới cùng. 

   },{offset:Number.NEGATIVE_INFINITY}).element  //  * Âm vô cùng -> khởi tạo 
}


// ? Sự khác nhau appendChild và append : 
// * appendChild không nhận DOM string. Chỉ nhận object Node. Và appendChild return về chính object vừa được thêm vào. Trong khi append nhận đối số cả DOM string và object Node Và hàm không return 


// ? preventDefault trong event 
// * preventDefault -> hành động mặc định của sự kiện sẽ không xảy ra.

