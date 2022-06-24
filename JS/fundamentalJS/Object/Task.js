let head = {
    glasses: 1
}
  
let table = {
    pen: 3,
    __proto__:head
}
  
let bed = {
    sheet: 1,
    pillow: 2, 
    __proto__:table
}
  
let pockets = {
    money: 2000,
    __proto__:bed
}



console.log('Bài tập 4')




let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  // This one found the food
  speedy.eat("apple"); // thực hiện gọi : speedy.stomach.push("apple")
  console.log(speedy)

  // ở trên này không quan trọng -> quan trọng là speedy.eat() khi được gọi 
  // this speedy. nhưng tìm kiếm 1 loài nó không tìm thấy stomach nên nó
  // tự động lấy cái stomach của hamster -> một thuộc tính method không tìm thấy trong 
  // object sẽ đi tìm trong proto 
  


// hai object speed và lazy đều đang có proto là hamster. 
// chuyện gì xảy ra khi speedy.eat("apple") được gọi -> bị áp dụng trên hamster 
// cách khắt phục -> thêm mỗi cái stomach riêng biệt cho 2 con chuộc 


  
