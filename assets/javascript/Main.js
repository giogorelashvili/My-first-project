const headerNav = document.querySelector(".header-nav");
const navList = document.querySelectorAll(".nav-list");
const burger= document.querySelector(".burger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (headerNav.classList.contains("showMenu")) {
    headerNav.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    headerNav.classList.add("showMenu");
    closeIcon.style.display = "block";
    navList.style.display = "none";
  }
}

burger.addEventListener("click", toggleMenu);