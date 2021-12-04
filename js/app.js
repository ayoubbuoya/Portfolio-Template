let hamburgerButton = document.getElementById("hamburger");
let navList = document.getElementById("nav-list");

function toggleButton() {
    navList.classList.toggle("show"); 
}
hamburgerButton.addEventListener("click",toggleButton);