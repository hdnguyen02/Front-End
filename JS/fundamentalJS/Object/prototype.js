
/* 
trong 1 chương trình. Đôi khi ta muốn mở rộng code một phần nào đó nhưng không coppy. 
tính năng Prototypal inheritance sẽ giúp ta làm điều đó 

trong object luôn có prototype. Và prototype luôn tham chiếu null hoặc tham chiếu đến 1 
object khác 

khi ta lấy ra 1 property không có trong object -> Tự động lấy ra trong prototype

protopyte là nội bộ và được ẩn đi.  
*/

console.log('Prototypal inheritance')
const myTeacher = { 
    myNameTeacher:'Thu Minh', 
    age:22, 
    sayHi:'ahihi', 
    sayHello:function() {
        console.log('hello from myTeacher')
    }
}


const myInfo = { 
    myName:'Hồ Đức Nguyên', 
    age:20, 
    
}

myInfo.__proto__ = myTeacher // cho prototype của myInfo Tham chiếu đến myTeacher 

// lúc này nếu như ta lấy ra 1 property không tồn tại trong myInfo -> kiếm sang 
// prototyte ( myTeacher )

console.log(myInfo.sayHi)  // myInfo không có sayHi 

// ở đây ta có thể nói : myTeacher là prototype của myInfo. hoặc myInfo được mở rộng 
// từ myTeacher => kế thừa từ myTeacher 

// có thể chạy method của myTeacher trên myInfo 

myInfo.sayHello()  // myInfo không hề có sayHello 

/* 
protopyte có thể chain vào nhau. ví dụ A -> B -> C
nếu trong A không có thì tìm đến B sau đó mới đến C  
có 2 cái giới hạn: -> không thể cho tham chiếu vòng -> tức là không thể cho C -> A 
prototype chỉ có thể được tham chiếu đến null hoặc object, nếu không phải 2 loại
này thì câu lệnh tham chiếu đó sẽ bị bỏ qua.  
*/

const obj = { 
    age:20,
    __proto__:myInfo  
}


// Những điều cần chú ý sau: __proto__ đã cũ. 
Object.setPrototypeOf(obj,myTeacher);   // Nên sử dụng
console.dir(obj)

// __proto__ chỉ được hỗ trợ trên trình duyệt -> với node js không được hỗ trợ -> đa số có thể
// sử dụng được -> phía máy chủ cũng sử dụng được


// prototyte chỉ dùng để đọc các thuộc tính. Khi viết hoặc xóa -> tác động lên object 

const obj1 = { 
    myName:'Tên của object 1', 
    get getMyName() {
        return this.myName
    }, 
    set setMyName(value) {
        this.myName = value
    }
}


const obj2 = { 
    __proto__:obj1
}

// Không thể sữa xóa thông qua prototype

obj2.setMyName = 'thông qua obj2 set'  //  gọi tới hàm setMyName -> thêm thuộc tính myName
console.log(obj2.getMyName)  // thông qua obj2 set  
console.log(obj1.getMyName)  // không thay đổi 


/* 
Giải thích : khi sử dụng setMyName có ứng dụng vào từ khóa this. Và this ở đây chính là
obj2 -> object bị tác động là obj2.  
*/



/* 
Chú ý: khi 1 object lớn là protopyte của những object nhỏ hơn và trong object lớn có nhiều
method . vì vậy khi sữa đổi trên các object nhỏ không khiến các object lớn bị thay đổi 
-> theo ngữ nghĩa từ khóa this  
*/


/* 
- Các property được chia sẽ. Nhưng các trạng thái thay đổi thì không 
- với for in -> lấy ra các thuộc tính của protopyte luôn. 
- còn hàm Object.keys() -> chỉ lấy các key của object.  
- Nếu không muốn điều này -> hasOwnProperty('key') => return true nếu key thuôc object 
*/



/* In JavaScript, all objects have a hidden [[Prototype]] property that’s either another 
object or null. We can use obj.__proto__ to access it (a historical getter/setter, there 
are other ways, to be covered soon).The object referenced by [[Prototype]] is called a 
“prototype”. If we want to read a property of obj or call a method, and it doesn’t exist, 
then JavaScript tries to find it in the prototype. Write/delete operations act directly on 
the object, they don’t use the prototype (assuming it’s a data property, not a setter).
If we call obj.method(), and the method is taken from the prototype, this still references 
obj. So methods always work with the current object even if they are inherited. The for..in 
loop iterates over both its own and its inherited properties. All other key/value-getting 
methods only operate on the object itself. */

