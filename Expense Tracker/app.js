const Item = document.querySelector("#item")
const price = document.querySelector("#price")
const form = document.querySelector("#form")
const items = document.querySelector(".products")


let data = JSON.parse(localStorage.getItem('products')) || []

form.addEventListener("submit", addItem)

function addItem(event){
    event.preventDefault()

    const itemValue = item.value.trim();
    const priceValue = price.value.trim();

    let product = {
        item:itemValue,
        price:priceValue
    }

    data.push(product)
    
    localStorage.setItem('products', JSON.stringify(data))

    item.value = ""
    price.value = ""
    updatePage();
}


function showData(){
    items.innerHTML = ''
    data.forEach((item)=>{
        items.innerHTML +=`
        <p>${item.item}</p>
        <p>${item.price}</p>
        `
    })
}


// function totalItems(){
//     let total = 0;
//     data.forEach((item) => {
//         total += parseFloat(item.price)
//     })
//     console.log(total)
// }

function totalItems(){
    let total = data.reduce((accu,curr) => {
        return accu + +curr.price
    },0)
    console.log(total)
}


function updatePage(){
    showData();
    totalItems();
}

updatePage();


