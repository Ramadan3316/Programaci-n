// const image = document.querySelector(".imagePoint")
// const slider = document.querySelector(".imageExample");
// const touch = document.querySelector(".touch");
// const next = document.getElementById("next");
// const nav = document.querySelector("#nav");

// image.addEventListener("click",()=>{
//     slider.style.display = "flex";
//     // slider.style.position = "absolute"
//     nav.style.display = "none";
//     console.log("se presiono la imagen");
//     slider.style.animation = "slider 5s fowards";
// })

// touch.addEventListener("click",()=>{ 
//     slider.style.display = "none";
//     nav.style.display = "block";
//     console.log("Se toco el volver");
//     slider.style.animation = "slider 5s fowards";
// })

// function ver() {
//     document.querySelector(".nav__flex-redesSub").style.display="block";
//     document.querySelector(".nav__flex-redesSub").style.transition="all 2s";
// }
// function ocultar() {
//     document.querySelector(".nav__flex-redesSub").style.display="none";
//     document.querySelector(".nav__flex-redesSub").style.transition="all 2s";
// }

// function showSlides() {
//     var slideIndex = 0;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if(slideIndex > slides.length) slideIndex = 1
//     slides[slideIndex-1].style.display = "block";
// }
// showSlides();


let clickImage = []
function selectImage(index){
    for(let i = 0; i < 5; i++){
        clickImage[i] = document.querySelector(`.imagesGrid__img${i}`);
    }
    imageClass = clickImage[index].classList;
    console.log("las clases de las imagenes son "+imageClass);


}