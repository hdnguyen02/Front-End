// Trạng thái của property trong object

/* 
có 3 trạng thái: 
writable  : true (được sữa đổi)
enumerable : true (được lặp qua)
configurable : true (có thể delete,sữa đổi)
*/

const obj = {
    myName:'Hồ Đức Nguyên',
    age:20
}

console.log(Object.getOwnPropertyDescriptor(obj, 'myName')); 
// để có thể thay đổi flag sử dụng defineProperty
Object.defineProperty(obj,'myName',{
    writable:false, // Không sứa đổi -> true
})
console.log(Object.getOwnPropertyDescriptor(obj,'myName')); 


// như object đó không tồn tại : -> tạo ra thuộc tính mới thôi  


(function () {
    let resultBefore = []
    let resultAfter = []
    console.log('enumerable'); 
    const myInfo = {
        fullName:'Hồ Đức Nguyên',
        age:20,
        toString() {
            return this.fullName; 
        }
    }

   
    console.log('for in')
    for (let key in myInfo) {
        resultBefore.push(key)
    }
    console.log('Trước khi thay đổi enumerable',resultBefore) // có đầy đủ key được lặp qua


    Object.defineProperty(myInfo,'age',{
        enumerable:false, 
    })
    
    for (let key in myInfo) {  // cái age đã không được lặp qua bởi for in 
        resultAfter.push(key)
    }
    console.log('Sau khi thay đổi enumerable',resultAfter);
    

    // toString là method => không in cái miêu tả thuộc tính ra được 


}) (); 


(function () {

    const myInfo = {
        myName:'Hồ Đức Nguyên',
        age:20,
    }


    console.log('configurable'); 
    // in ra mô tả cua PI trong object MATH 
    // không thể delete và không thể sữa đổi writable 
    // Là con đường 1 chiều : không thể thay đổi được
    console.log('Mô Tả PI',Object.getOwnPropertyDescriptor(Math,'PI'))
    // ví dụ : biến name thành thuộc tính không thể sữa đổi 
    
    console.log('Mô Tả MyName trong myInfo',Object.getOwnPropertyDescriptor(myInfo,'myName'));
    
    Object.defineProperty(myInfo,'myName',{
        configurable:false,
        writable:false, 
        enumerable:false
    })
    console.log('Mô Tả MyName trong myInfo',Object.getOwnPropertyDescriptor(myInfo,'myName'));

    /* 
    nếu như đã định nghĩa chung với tab configurtable thì không thể sữa đổi nữa 
    chỉ có thể thay đổi writable : true -> false. 

    */

    myInfo.myName = 'Tên bị thay đổi'; 
    console.log('Thuộc tính myName sau khi sữa đổi',Object.getOwnPropertyDescriptor(myInfo,'myName'));

})(); 


(function() {
    const id = Symbol('id'); 
    console.log('Object.defineProperties');
    // Điều chĩnh nhiều cái cùng lúc 
    const myInfo = {
        myName:'Hồ Đức Nguyên', 
        myAge:20, 
        [id]:1
    }

    Object.defineProperties(myInfo,{
        myName:{
            writable:false
        }, 
        myAge:{
            writable:false
        }
    })

    // hàm dùng để clone về cả flag 
    console.log('object clone từ defineProperties và getOwnPropertyDescriptors  '); 
    let cloneMyInfo = Object.defineProperties({},Object.getOwnPropertyDescriptors(myInfo));  // clone cả symboi
    console.log(cloneMyInfo); 

    // sữa đổi trên clone 
    clone.myName = 'New Name'; 

    // có thể clone được symboi hay không 

    console.log('object clone từ method assign'); 

    let objectClone = Object.assign(myInfo);
    console.log(objectClone); // vẫn clone symboi 
}) (); 


// Một vài thứ mới lạ hơn 

(function() {
    console.log('Không cho thêm thuộc tính mới vào object'); 
    const myInfo = {
        myName:'Hồ Đức Nguyên', 
        age:20 
    }
    // tiếp tục tạo ra  
    Object.preventExtensions(myInfo); 
    myInfo.myLove = 'ahihi';   // không thêm được 
    console.log(myInfo); 

}) (); 