
// lưu trữ arrow function vào biến 
let func = (a,b) => a + b 

/* 
Nếu chỉ có 1 câu lệnh return thì không cần {} a => a + 10
nếu chỉ có 1 arg thì không cần () -> a => a + 10
Nếu có nhiều câu lệnh trong body yêu cầu có {} và return 
a => {
    console.log(a) 
    return a
}
nếu có 2 tham số trở đi thì cần có () (a,b) => a + b  
*/

// arrow function hỗ trợ : rest,Default parameters,Destructuring  


/* 
Arrow function không có hỗ trợ từ khóa this 
không nên sử dụng arrow function với các bind,call,apply 
không hỗ trợ arguments ( function !) -> sử dụng rest
arrow function phù hợp cho các fn như là setTimeout,event... 
không thể sử dụng từ khóa new với arrow function -> ném ra lỗi nếu cố tình sử dụng 
arrow function không có prototype   
*/


// Khi nào nên sử dụng arrow function -> forEach,setTimeout. Với những hàm này. mình không thể biết
// được func callback sẽ được chạy ở đâu và ta không muốn bị sai ngữ cảnh đối với this. thì ta nên 
// sử dụng arrow function. 


// this không hề tồn tại trong arrow function, Nếu trong đoạn code đó có this -> this đo sẽ 
// tham chiếu ra phạm vi bên ngoài 


// ví dụ: 
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(function(student) {
          // cái này là func regular -> this ám chỉ window !
          console.log(this.title + ': ' + student)
      })
    },
    // sử dụng arrow func trong forEach -> lúc này this không bị sai ngữ cảnh. 
    showListWithArrowFunc() {
        this.students.forEach(student => {
            console.log(`${this.title} : ${student}`)
        })
    }
  }
  

 
  
