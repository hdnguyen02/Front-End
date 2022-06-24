

// Bên này có 1 biến và được import bởi các module khác :

export let person = {
    name:'Hồ Đức Nguyên',
    age:20
} 



// alert(import.meta.url);  // hiển thị tới cái url mà nó đang đứng -> http://127.0.0.1:5500/modum/sayHello.js

/* setTimeout(function () {
    console.log(person.name,'trong file sayHello.js');   // đã bị thay đổi -> chứng tỏ tham trị  
},4000) */

// với file script nào có type là module -> this là không xác định -> file không có type là module 
// thì this là window 

// console.log('this trong file sayHello.js',this);   // Không xác định -> vì file có module 


export let sayHello = 'hello in file sayHello'; 






