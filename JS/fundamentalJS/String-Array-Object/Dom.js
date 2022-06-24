

// thực hiễn thêm element vào DOM 

let nodeParent = document.getElementById('wrap-box')

nodeParent.oncontextmenu = (event) => { 
    alert(event.target)
}
console.dir(nodeParent)
console.log(nodeParent)

console.log(nodeParent.outerHTML)  //  câu lệnh in ra toàn bộ nội dung có trong node đó

console.log(document.domain)

console.log(document.embeds)



const sayHi = () => { 
    alert('loading...')
}