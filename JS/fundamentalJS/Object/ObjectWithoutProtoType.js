
/*
Như đã đều cập. __proto__ nên được hạn chế sữ dụng  
The modern methods are:
Object.create(proto, [descriptors]) – creates an empty object with given proto as [[Prototype]] and optional property descriptors.
Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.
*/


const myInfo = {
    myName:'Hồ Đức Nguyên',
    age:20
}


// Đối số thứ nhất là [[prototype]] và đối số thứ 2 là mô tả object 
const myTeacher = Object.create(myInfo,{ 
    fullName:{ 
        value:'Minh Thu'
    }
}) 
// lặp qua myTeacher không lấy được key fullName -> flag mặt định là false 
console.log(myTeacher) // với myInfo là [[prototype]]. và myInfo lại có [[prototype]] từ 
// Object.prototype -> vì vậy myTeacher vẫn có thể sử dụng các method được của Object.prototype 

console.log(myTeacher.hasOwnProperty('fullName'))

// nếu [[prototype]] có trỏ đến null đi nữa thì các method như Object.something() vẫn có thể
// sử dụng -> vì không nằm trong property prototype của Object 


// lưu ý rằng : __proto__ là 1 setter/getter  

// nếu người dùng chọn key __proto__ -> không được, Nhưng nếu [[prototype]] null điều này
// có thể 



// bài tập: 

// tạo ra 1 object không có prototype và tạo ra 1 method toString() -> vì không có prototype  

let dictionary = Object.create(null,{ 
    toString:{ 
        value() {
            return Object.keys(this).join()
        }
    }
})

// định nghia các func có value trả về : value() { return value}

// các flag khi defined không được đề cập sẽ là false  
dictionary.__proto__ = 'value __proto__'

for (let key in dictionary) {
    console.log(key)
}

console.log(dictionary.toString())


// có 1 method trong là toString và không được for in lặp qua. 