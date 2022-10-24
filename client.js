// Shoe_Size
let topSize = document.querySelectorAll(".top-sizes .size")
topSize.forEach((item) => {
    item.onclick = (eo) => {
        topSize.forEach((item) => {
            item.classList.remove("active")
        })
        eo.target.classList.add("active")
    }
})
// Shoe_Size
let shoeSize = document.querySelectorAll(".shoe-sizes .size")
shoeSize.forEach((item) => {
    item.onclick = (eo) => {
        shoeSize.forEach((item) => {
            item.classList.remove("active")
        })
        eo.target.classList.add("active")
    }
})
// Shoe_Size
let color = document.querySelectorAll(".colors .color")

color.forEach((item) => {
    item.onclick = (eo) => {
        color.forEach((item) => {
            item.classList.remove("active")
        })
        eo.target.classList.add("active")
    }
})

// Show_Main-Image
let allImgs = document.querySelectorAll(".all-imgs .img img")
allImgs.forEach(img => {
    img.onclick = (eo) => {
        allImgs.forEach(img => {
            img.parentElement.classList.remove("active")
        })
        document.querySelector(".main-img img").src = eo.target.src
        img.parentElement.classList.add("active")
    }
});

// Quantite
let quantite = document.querySelector(".quantite")
let inputQuantite = document.querySelector(".quantite input")

quantite.onclick = (eo) => {
    eo.preventDefault()
        if(eo.target.classList.contains("minus") && inputQuantite.value > 1){
            inputQuantite.value--
            console.log("minus")
        }else if(eo.target.classList.contains("plus") && inputQuantite.value < 10){
            inputQuantite.value++
            console.log("plus")
        }
}
