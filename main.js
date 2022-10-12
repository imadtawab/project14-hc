// onOff
let onOff = document.querySelectorAll(".onOff")
let aa
onOff.forEach((item) => {
    item.onclick = (eo) => {
        eo.target.classList.toggle("on")
        eo.target.parentElement.parentElement
        .querySelector(".props").classList.toggle("dn")
    }
})


// Shoe_Size
let shoeSize = document.querySelectorAll(".widget .size")

shoeSize.forEach((item) => {
    item.onclick = (eo) => {
        eo.target.classList.toggle("active")
    }
})
// Shoe_Size
let color = document.querySelectorAll(".widget .color")

color.forEach((item) => {
    item.onclick = (eo) => {
        eo.target.classList.toggle("active")
    }
})
// Delete_Image
let deleteImg = document.querySelectorAll("#galleryImages .par-img .close");


// Add_Image
const addImageBtn = document.querySelector("#addImage");
// const miniImg = document.querySelector("#miniImg");
const galleryImages = document.querySelector("#galleryImages");
function defaultBtnActive() {
    addImageBtn.click();
}
addImageBtn.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
    //   let newImg = document.createElement("img")
    //   newImg.src = result;
      galleryImages.innerHTML+=`<div class="par-img">
                                    <img src="${result}" alt="">
                                    <div class="close">x</div>
                               </div>`
    //   galleryImages.append(newImg)
    deleteImg = document.querySelectorAll("#galleryImages .par-img .close")
    // delte_image
    deleteImg.forEach((item) => {
        item.onclick=function(eo){
            eo.target.parentElement.remove()
        }
    })
    };
    reader.readAsDataURL(file);
  }
});
window.file.accept = "image/*";




