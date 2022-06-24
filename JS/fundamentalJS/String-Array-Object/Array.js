

// Các method hay sử dụng với array 
// Array la object. Đươc tổ chức dưới dạng key-value => Không giống như Array trong các ngôn
// ngữ lập trình khác, vì vậy Array trong js không tuân thủ phải là cùng 1 loại dữ liệu.  

(() => { 
    let arr = [1,2,3]
    // console.log(typeof arr) -> object 
    // muốn kiểm tra chính xác có phải là array hay không 
    console.log(arr instanceof Array,Array.isArray(arr)) // trả về true/false -> true nếu object    
}) (); 




(() => { 
    // Chuyển đổi array sang string -> toString() và join()
    let arr = [1,2,3,4]
    console.log(arr.toString())

    // join() có thêm 1 thông số là phân cách các element sau khi được nối thành 1 chuỗi 

    let strJoin = arr.join('-') // nếu không có tham số -> tương tự toString 
    console.log(strJoin)
    // Ngoài ra Array còn có các method pop.push.shirt,unshirt  (xóa cuối,thêm cuối,xáo đầu,thêm đầu)

}) (); 

(() => { 
    let arr = [1,2,3,4]
    // sử dụng delete trong array 
    delete arr[0]
    console.log(arr[0])


    // Nối mảng thông qua concac 
    let arr1 = [1,2,3,4]
    let arr2 = [4,5,6,7]

    let arr3 = [...arr1,...arr2] // không phải toán tử rest -> phân rã : bởi vì sử dụng toán tử 
    // với biến dã được khởi tạo. 
    
    console.log(arr3)

    let arr4 = arr1.concat(arr2)
    console.log(arr4)
    // 2 phương thức tương tự nhau -> nhưng phân rã trông đẹp hơn 

}) (); 

(() => { 
    // splice : Thêm phần tử vào array.
    // dùng để thêm phần tử 
    let arr = [1,2,3,4,7,8]  
    // thêm 5 6 vào arr  
    arr.splice(4,0,5,6) 
    // Danh sách đối số: 1 : index-start  
    //                   2 : số phần tử sẽ xóa 
    //                3... : các phần tử được thêm vào 

    // xóa đi số 4 5 
    arr.splice(3,2)  //  tham số 3 là optional -> tham chiếu -> thay đổi giá trị trên mảng 

    console.log(arr,'splice')


    //slice() -> cát tạo ra 1 mảng mới -> tham trị -> trả ra 1 mảng mới

    let arr2 = [1,2,3,4]
    let arr3 = arr2.slice(0,2)  //  clone mảng 
    console.log(arr3,'slice')

}) (); 




(() => { 
    // sắp xếp trên array -> sort -> sắp xếp tăng dàn theo string nếu không có tham số 
    let arr = [2,4,3,56,6,2]
    console.log(arr.sort()) // nếu không truyền đối số vào -> so sánh theo string 
    


    // tham số là compare  
    console.log(arr.sort((a,b) => { 
        return a - b
    }))

    // đảo ngược mảng 
    console.log(arr.reverse())


    console.log('5' - '2') // dự đoán ra 3. compare nên return về âm. Dương. số 0  

    // Nếu kết quả trả về âm -> xếp a trước b. Dương thì ngược lại 

}) (); 



(() => {
    // tìm hiểu về filter 
    // trả về 1 mảng mới khi element đó thỏa mản 

    let arrPerson = [ 
        {
            fullName:'Hô Đức Nguyên', 
            age:20
        },
        {
            fullName:'Hồ Đức Nguyên 1', 
            age:15
        },
        {
            fullName:'Hô Đức Nguyên 2', 
            age:13
        },
        {
            fullName:'Hô Đức Nguyên 3', 
            age:37
        }
    ]

    // Lấy ra các phần trên 18 tuổi 

    let resultPerson = arrPerson.filter((value) => { 
        return value.age >= 18 
    })

    console.log(resultPerson,'filter')

    // thực hiện lên phân tử xem thử là tham chiếu hay tham trị 

    resultPerson[0].fullName = 'Nguyễn Bá Dũng'

    console.log(arrPerson)

    // => Nếu element đó là object,array -> tham chiếu  

    // thử dối với mảng có các phần tử là tham trị 

    let arrInt = [1,2,3,4,5,6,7,8]
    let intOld = arrInt.filter((element) => { 
        return element % 2 === 0
    })

    console.log(intOld,'arr old')  

    // thay đổi phần tử thui ->  
   intOld[0] = 'Chuỗi bị thay đổi'
    //console.log(intOld,arrInt) 
   // Đối với element không tham chiếu thì tạo ra từ filter cũng không tham chiếu 

}) (); 

(() => {
    console.log('reduce')

    let arrInt = [1,2,3,4,5,6]

    // reduce là 1 method dùng lấy ra kết quả cuối cùng từ mảng đó khi lặp qua 

    let sum  = arrInt.reduce((total,value,index,thisArr) => { 
        return total + value 
    })

    // tham số thứ nhất -> giá trị khởi tạo -> mặt định là 0. -> biến đó được cộng dồn qua mỗi vòng lặp. Biến thứ 2 phần tử element.  3 và 4 lần lược là index và chính array đó. 
    
    console.log(sum)


    // Ngoài ra còn có các method -> forEach,map,some,every 


}) ();


(() => { 
    // tìm kiếm trong array -> indexOf -> hàm trả về vị trí của phần tử đó trong array 
    // trả về vị trí đầu tiên trong array nếu tìm thấy   
    let arr = [1,2,3,4,4,5]
    let result = arr.indexOf(2)
    console.log(result)

    //  lastIndexOf() tương tự nhưng trả về vị trí cuối cùng trong array nếu tìm thấy 


    // thử tìm kiếm tham chiếu xem sao ! 

    let arrPerson = [ 
        {
            fullName:'Hô Đức Nguyên', 
            age:20
        },
        {
            fullName:'Hồ Đức Nguyên 1', 
            age:15
        },
        {
            fullName:'Hô Đức Nguyên 2', 
            age:13
        },
        {
            fullName:'Hô Đức Nguyên 3', 
            age:37
        }
    ]
    // tiêp tục kiểm tra 
    let indexResult = arrPerson.indexOf({
        fullName:'Hồ Đức Nguyên 1', 
        age:15
    })

    console.log(indexResult,'sult object') // -1 => vì trên kia bản chất là đang so sánh 
    // 2 vùng nhớ với nhau 

    let indexObjectResult = arrPerson.indexOf(arrPerson[2])
    console.log(indexObjectResult)


    // với find -> nhận vào đối số là 1 callback. trả về kết quả đầu tiên pass qua callback này 

    // tham số nhận vào tương tự với những hàm forEach,map... 
    // Hàm find return về chính value đó. Chứ không phải index 
    console.log(arr)
    let reusultFind = arr.find((value,index,thisArr) => { 
        return value % 2 === 0
    })


    


    // findIndex -> return về index  -> đối số nhận vào là 1 callback 


    let objs = [ 
        {value:1}, 
        {vlaue:2}
    ]

    let objFind = objs.find((value) => { 
        return value.value === 1
    })

    
    // thay đổi obj đó 
    console.log(objFind)
    objFind.value = 'giá trị sau khi bị thay đổi'

    console.log(objs)


    // Rút ra kết luận -> liên quan tới array đều là tham chiếu . Còn với kiểu dữ liệu nguyên 
    // thủy -> tham trị  


    




}) (); 