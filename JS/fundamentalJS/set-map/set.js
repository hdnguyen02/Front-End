

// set khác với key là set chỉ có value không có key. Và value đó là suy nhất trong 1 set 

const set = new Set(); 

set.add(1);  // được add 

set.add(1);  

set.add(2); // được add 

set.add(3);  // được add 
set.add(4);  // được add 

console.log(set.size); 

// thử in ra giá trị sau 


// kiểm tra 1 value của set có tồn tại hay không 
if (set.has(2)) { 
    console.log('Delete 2'); 
    set.delete(2); 
    console.log('Set sau khi xóa đi 2',set); 
}

// hàm clear -> xóa toàn bộ VALUE của set 

set.clear(); 
console.log(set); 

// Khởi tạo set với array 

let arraySet = [1,2,1,2,3,4]; 
const initSetWithArray = new Set(arraySet); 
console.log(initSetWithArray);  



// Lặp qua set 

const iterableSet = new Set(arraySet); 

// Lặp qua set với for of 

console.log('Lặp qua với for of'); 


for (value of iterableSet) {
    console.log(value); 
}

// Lặp qua với key của map  
for (key of iterableSet.keys()) {
    console.log(key); 
}

for (value of iterableSet.values()) {
    console.log(value); 
}

console.log('Lặp qua for each'); 

iterableSet.forEach(function (value,SameValue,set){
    console.log(value,SameValue); 
})



// ta có thể chuyển đổi set sang map như sau: 

let arrayFromSet = iterableSet.entries(); 

let map = new Map(arrayFromSet); 
console.log(map); 


// Khởi tạo map từ 1 object  

let object = { 
    fullName:'Hồ Đức Nguyên',
    age:20
}

let arrayFromObject = Object.entries(object);  

// thử tạo set xem sao 

let setFromObject = new Set(Object.entries(object)); 

// lấy ra object từ set 

let objectFrom = Object.fromEntries(setFromObject);   // lấy array trong này biến đổi thành object 
console.log(objectFrom); 


console.log('set from object',setFromObject); 




console.log(arrayFromObject); 



/* 
Map – is a collection of keyed values.

Methods and properties:

new Map([iterable]) – creates the map, with optional iterable (e.g. array) of [key,value] pairs for 
initialization.
map.set(key, value) – stores the value by the key, returns the map itself.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key, returns true if key existed at the moment of the call, 
otherwise false.
map.clear() – removes everything from the map.
map.size – returns the current element count.
The differences from a regular Object:

Any keys, objects can be keys.
Additional convenient methods, the size property.
Set – is a collection of unique values.

Methods and properties:

new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
set.add(value) – adds a value (does nothing if value exists), returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise
false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
Iteration over Map and Set is always in the insertion order, so we can’t say that these collections
are unordered, but we can’t reorder elements or directly get an element by its number. 
*/



// Chưa làm bài tập 








