

// khai báo 1 map  
const map = new Map(); 

// map chứa nhiều cặp key - value và key không trùng nhau
// Tạo một cặp key value với mehthod set 
map.set('key','value'); // map và key có thể là bất kì kiểu dữ liệu nào. 
// set -> thêm cặp key - value mới vào hoặc sữa đổi nếu cặp key value đó đã tồn tại 
// method set return về chính object map đó nên có thể map chain nhau 

// Lấy ra value với key 
console.log(map.get('key'),'map');  

// khởi tạo ra 1 object 

const object = {
    fullName: 'Hồ Đức Nguyên',
    age:20, 
    logName() {  // Tên hàm cũng chính là key !
        console.log(this.fullName); 
    }
}

console.log(Object.keys(object));  // method static keys 


// Map tương tự với object -> cho phép tạo ra 1 value với key tương ứng, Nhưng sự khác biệt nằm ỡ chỗ 
// key của map có thể là bất kì data type nào



// Các phương thức của map
function checkHasKey(map,key) {   
    if (map.has(key)) {  // 1 phương thức của map return về true nếu có tồn tại key !  
        return true; 
    }
    return false; 
}

// Thuộc tính size trả về số lượng cặp key và value hiện tại 
let sizeMap = map.size; 

// Đối với object key sẽ tự động gán về string -> còn key của map thì không  
map.set(1,'Một'); 
map.set('1',1); 
// 1 và '1' ở đây là khác nhau


// Nếu in theo kiểu này thì nó sẽ hiểu là in ra thuộc tính 1 chứ không phải là in ra value với 
// key là 1 ! 
console.log(map[1],'sử dụng toán tử []');  // in ra undefined  
console.log(map['key'],'gọi ra value của key với toán tử []'); 



// Không thể thêm key - value vào map bằng cách này !
map[{so:5}] = 100;   // Nếu viết thế này thì cặp key 5 - 100 không được cho là 1 phần tử của map mà chỉ là
// một thuộc tính của map 
// Tự động ép kiểu {so:5} về thành [object Object]


console.log(typeof map); // Map vẫn là 1 object 

// in ra cái cặp key - value ( {so:5} - 100)
console.log(map["[object Object]"],'in theo kiểu object'); 

// Lúc thêm key value hoặc lấy ra key value của map nên sử dụng set và get. Không nên sử dụng 
// thêm value theo kiểu object để tránh khiến cặp key-value tự động ép kiểu key về thành string 
// và cặp key - value này không được coi là 1 phần tử của map ( mà được xem là 1 thuộc tính của
// của object 

// Nếu thêm 1 cặp key - value với key là 1 object nữa thì lập tức sẽ bị ghi đè lên cái cặp 
// key value được thêm vào theo kiểu object trước đó 
map[{newKey:'new Key'}] = 'value không phải của map'; 



// set key là 1 object va so sánh với object 
const join = {fullName:'join'}; 

map.set(join,'Anh này là join'); 
console.log(map);   



join.name = 'Hồ Đức Nguyên'; 
console.log(map,'sau khi thay đổi Tên join!'); 

// Bởi vì join là 1 object -> tham chiếu -> nên khi thay đổi join thì chính trong map cũng thay đổi  
// Nếu key là 1 kiểu dữ liệu không phải tham chiếu thì không có vấn đề gì khi thay đổi giá trị 
// của biến vừa mới làm key 



// xóa value dựa vào key 

map.delete(1); // xóa đi cặp key value có key là 1 
map.clear(); // hàm giải phóng đi map -> xóa hết luôn 

// lặp qua map ! 



const iterateMap = new Map([
    ['key-1',1],
    ['key-2',2], 
    ['key-3',3]
]); 



console.log(iterateMap.keys()); // vì là 1 object nên chính map cũng có thể sử dụng keys để return về 
// một iterable chứa key  


// for of  -> Lặp qua và lấy các giá trị của cái mà mình lặp -> lặp qua các value
// for in -> lặp qua các object,cũng có thể lặp qua string,array -> lặp qua cac key 

// sử dụng for in để lặp qua map 

iterateMap[5] = 'Năm';   // Thêm vào 1 property với key là 5 và value Năm

console.log('Lặp qua bằng for in'); 
for (subMap in iterateMap) {  
    console.log(subMap);
}

// Bởi vì for in chỉ lặp qua các key của 1 object mà các key-value của map không được coi là key 
// của object nên không được for in lặp qua 

console.log('Lặp qua bằng for of'); 
for (subMap of iterateMap) {
    console.log(subMap);   // in ra các key - value 
}
// Lặp qua bằng for of được ! 
console.log('Lặp qua các key của map'); 
for (let key of iterateMap.keys()) {
    console.log(key);   //  lặp qua các key của map !
}
 

// lặp qua các value   
for (let value of iterateMap.values()) {  // chỗ này return về 1 array có chứa các value của map 
    console.log(value);
}



// sử dụng forEach 

iterateMap.forEach(function(value,key) {
    console.log(`${key} ${value}`);   //   forEach -> lặp qua giá trị 
})


// Khởi tạo Map từ array và object  

// Viết 1 cái mảng và pass vào trong map 
const arrayMap = [
    ['Một',1],['Hai',2]
]

const initMap = new Map(arrayMap);
console.log(initMap); 
arrayMap[0] = ['Ba',3]; 
console.log(initMap); 
// Map không hề bị tham chiếu khi array dùng để khởi tạo map thay đổi 


let objectOfMap = { 
    fullName:'Giang Hồ', 
    age:20, 
    getAge() {
        console.log('Hello Word'); 
    }
}

let arrayEntrys = Object.entries(objectOfMap);  // trả về 1 array với các value array là 1 cặp [ key, value ]


const initMapWithObject = new Map(arrayEntrys); 


// lấy object biến thành array thì có 1 method biến array thành object fromEntries

// khôi phục lại 1 object như sau 

let objectFromArray = Object.fromEntries(arrayEntrys); 
console.log(objectFromArray);   // Đã nhận được 1 object từ 1 entrys array 


// Ngoài bỏ vào 1 cái mảng thì ta có thể truyền vào map luôn cũng được  

let objectFromMap = Object.fromEntries(initMapWithObject);  

















