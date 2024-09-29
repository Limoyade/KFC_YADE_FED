// bron voor de slider (heb dit stap voor stap gevolgd en soms chat GPT extra uitleg gevraagd): https://webdesign.tutsplus.com/how-to-build-a-simple-carousel-with-vanilla-javascript--cms-41734t

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});



button = document.querySelector("article:nth-of-type(2) button");

button.onclick = ietsDoen;

function ietsDoen() {
    if (this.classList.contains("anders")) {
        this.classList.remove("anders"); 
    } else {
        this.classList.add("anders"); 
    };
}