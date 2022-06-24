
// Viết 1 hàm nhận data 
const limitData = 24 // giới hạn data tìm kiếm -> phía sau bị lỗi
const charactersList = document.getElementById('charactersList') // ul render vào
const searchBar = document.getElementById('searchBar') 
let dataOutside = new Array()  


searchBar.addEventListener('keyup',function (event) {  
    let valueInput = event.target.value.toLowerCase();   
    if (dataOutside.length != 0) {  
        let arrayResult = dataOutside.filter(function (character) {  
            return character.name.toLowerCase().includes(valueInput)
        })
        renderData(arrayResult)
    }

})

async function getData() {  
    const linkData = 'https://hp-api.herokuapp.com/api/characters'
    const dataJSON = await fetch(linkData)
    dataOutside = await dataJSON.json()
    dataOutside.splice(limitData,dataOutside.length) // đối số thứ 3 là phần tử chèn vào 
    renderData(dataOutside)
}
 getData()


function renderData(data) { 
    let dataHtml = data.map(function(childData){
        return `<li class="character"> 
                <h2>${childData.name}</h2>
                <p>House: ${childData.house}</p> 
                <img src="${childData.image}"></img>
                </li>
        `
    })
    charactersList.innerHTML = dataHtml.join('')

}



