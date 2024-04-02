const sliderImage = Array.from(
  document.querySelectorAll(".container-slide img")
);
// console.log(sliderImage);
let slideCount = sliderImage.length;
let currnetSlide = 1;

let slideNumberElement = document.getElementById("slide-number");

let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

nextButton.onclick = nextSlid;
prevButton.onclick = prevSlid;

let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

for (let i = 1; i <= slideCount; i++) {
  let paginationItems = document.createElement("li");
  paginationItems.setAttribute("data-index", i);
  paginationItems.appendChild(document.createTextNode(i));
  paginationElement.appendChild(paginationItems);
}

document.getElementById("indicatores").appendChild(paginationElement);

let paginationCreateUl = document.getElementById("pagination-ul");
const paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currnetSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

theChecker();

function nextSlid() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currnetSlide++;
    theChecker();
  }
}

function prevSlid() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currnetSlide--;
    theChecker();
  }
}

function theChecker() {
  slideNumberElement.textContent = `Slide ${currnetSlide} of ${slideCount}`;

  removeAllAcive();
  sliderImage[currnetSlide - 1].classList.add("active");
  paginationCreateUl.children[currnetSlide - 1].classList.add("active");

  if (currnetSlide === 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (currnetSlide === slideCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

function removeAllAcive() {
  sliderImage.forEach(function (img) {
    img.classList.remove("active");
  });
  paginationBullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}
