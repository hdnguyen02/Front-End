function FPrototype() {
    const admin = { 
        fullName:'Admin'
    }

    function User(name,age) {
        this.name = name 
        this.age = age
    }

    // object có thể được tạo ra từ func constructor.  

    
    /* Ngay tại thời điểm tạo này User.prototype không phải là admin nên [[prototype]] 
    Không phải là admin */
    let userBefore = new User('Huỳnh Thị Lan',23) 
    User.prototype = admin


   /*  
    prototype là 1 property trên function. Nó không giống với [[prototype]]
    Func.prototype chỉ hoạt động khi new Func được gọi 
    User.prototype = admin ->  [[prototype]] = admin 
    */
    let user = new User('Hồ Đức Nguyên',20)
    // thêm thuộc tính vào [[protopype]]
    user.__proto__.ahic = 'ahic'  
    let user2 = new User('Hồ Đức Nguyên 2',20)
    console.log(user,'user')
    console.log(user2,'user2')
    console.log({User})

    // tuy prototype khác [[prototype]]. Nhưng cả 2 đều là tham chiếu. 
}

function defaultPrototype() {
    console.log('defaultPrototype')
    /* Tất cả các func đều có thuộc tính prototype. Nếu không cùng cấp thì hàm sẽ tự khởi tạo 
    default prototype */

    function Rabbit() {}
    /* default prototype
    Rabbit.prototype = { constructor: Rabbit };*/

    console.log(Rabbit.prototype.constructor === Rabbit)   // true 

    // có thể tạo ra 1 object thông qua 1 object 
    let rabbit = new Rabbit()
    let subRabbit = new rabbit.constructor()
    /* Điều này rất hữu dụng khi ta có 1 object và ta 1 tạo ra thêm 1 object nhưng không biết 
    constructor nào đã tạo ra nó Nhưng ta không làm được những cái này khi thay đổi prototype */

    Rabbit.prototype = {
        jumps: true,
        constructor: Rabbit
    };  // đảm bảo thêm thuộc tính cho prototype nhưng không làm sai constructor mặt định 



}




/* In this chapter we briefly described the way of setting a [[Prototype]] for objects created 
via a constructor function. Later we’ll see more advanced programming patterns that rely on 
it. Everything is quite simple, just a few notes to make things clear:

The F.prototype property (don’t mistake it for [[Prototype]]) sets [[Prototype]] of new objects
when new F() is called.
The value of F.prototype should be either an object or null: other values won’t work.
The "prototype" property only has such a special effect when set on a constructor function, and
invoked with new.
On regular objects the prototype is nothing special:

let user = {
  name: "John",
  prototype: "Bla-bla" // no magic at all
};
By default all functions have F.prototype = { constructor: F }, so we can get the constructor
of an object by accessing its "constructor" property. */