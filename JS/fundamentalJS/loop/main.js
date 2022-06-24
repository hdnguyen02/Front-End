

// Nói về khái niệm for in -> dùng để lặp qua các thuộc tính của 1 object 

// cũng có thể lặp qua các array, string 


let person = {
    age:20, 
    names:'Hồ Đức Nguyên',
    curent:'javascript',
    sayHello() {
        console.log('Hello Word'); 
    }
}

// lặp qua 
for (let key in person) {
    console.log(person[key]) // truy cập vào thuộc tính của key với thuộc tính key 
    // if (typeof person[key] === 'function') {
    //     person[key]();     
    // }
    person[key] = person[key] + ' đã lặp qua'; 
    console.log(person[key]); 
}

// person.sayHello();  Không còn là function nữa -> là string  
//for in lặp qua cả function luôn ! -> nghi hiểm  




// for in -> sử dụng lặp cho qua object  






// sử dụng for in lặp qua các object 

let fullName = 'Hồ Đức Nguyên'; 

for (let key in fullName) {
    console.log(key)  // in ra key thôi -> muốn lấy luôn value -> for of 
}
