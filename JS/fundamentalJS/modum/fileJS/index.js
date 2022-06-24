


// nhận tới 




// nhận hết 1 lược bên này
// import * as objectDuLieu from './duLieu.js'; 

// console.log(objectDuLieu.fullName); // in ra fullName ( cái biến export default)


// EXPORT DEFAUT CHỈ NHẬN KHI IMPORT THEO KIỂU DEFAULT 

// đóng gói và export ra hết 1 lần -> không thể 



// 
// import fullName from './duLieu.js'; 
// export default fullName; 



// công thức vừa nhận vừa dẩy cái default ra ngoài 

// có 1 cách viết code như sau

function returnPerson(name,age) {
    return {
        name,
        age,
        getName() {
            return name; 
        },
        setName(newName) {
            name = newName; 
        },
        logerPerson() {
            console.log(name); 
            console.log(age); 
        }
    }
}


export { default } from './duLieu.js'  // cách viết gộp  



  







