const descripyion = {
    name: document.querySelector('#name_active'),
    price: document.querySelector('#price_active')
}
const imgActive = document.querySelector('#img_active')
const sliderList = document.querySelector('#slider_list')
const sliderBotton = document.querySelector('#sliderBotton') 
const products = [
    {
        id: 1,
        name: "Стілець м'який поворотний",
        price: 17241,
        img: "product1.jpg"
    },
    {
        id: 2,
        name: "СТІЛ ДЕРЕВ'ЯНИЙ",
        price: 13680,
        img: "product2.jpg"
    },
    {
        id: 3,
        name: "Ліжко Сандра Luxe",
        price: 52521,
        img: "product3.jpeg"
    },
    {
        id: 4,
        name: "СТІЛЕЦЬ ФОРТЕ",
        price: 3570,
        img: "product4.jpg"
    },
]

const renderSlider = (idCandaidate = 1) => {
    let indexActive = null
    products.forEach((product, index)=> {
        if (product.id === idCandaidate) {
            indexActive = index
        }
    })
    descripyion.name.innerHTML = products[indexActive].name
    descripyion.price.innerHTML = `${products[indexActive].price} грн`
    imgActive.src=`./img/${products[indexActive].img}`
    sliderList.innerHTML = ''
    sliderBotton.innerHTML = ''
    products.forEach((product, index)=> {
        if (index != indexActive){
            sliderList.innerHTML += `
            <div id="sliderElement" class="small_block" slider-item="${product.id}">
                <img class="small_block_img" src="./img/${product.img}">
                <p class="small_block_title">${product.name}</p>
                <p class="small_block_price">${product.price}</p>
            </div>
            `
        }
        sliderBotton.innerHTML += index !== indexActive ? `<div id="sliderElement" slider-item="${product.id}" class="slider_item"></div>` : `<div slider-item="${product.id}" class="slider_item_active"></div>`
    })
    let sliderElements = document.querySelectorAll('#sliderElement')
    sliderElements.forEach(sliderItem => {
        sliderItem.addEventListener('click', () => {
            //console.log(sliderItem.getAttribute('slider-item'))
            let idSlider = parseInt(sliderItem.getAttribute('slider-item'))
            renderSlider(idSlider)
        })
    })
}

renderSlider()