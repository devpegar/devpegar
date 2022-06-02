const d = document;
const activePage = window.location.pathname;
const iconMenu = d.querySelector(".icon-menu");
const sidebar = d.querySelector("aside");
const links = d.querySelectorAll(".navbar__link a");
const li = d.querySelectorAll(".navbar__links li");

iconMenu.addEventListener("click", () => {
  const line = iconMenu.firstElementChild;
  if (line.classList.contains("active")) {
    line.classList.remove("active");
    sidebar.classList.remove("open");
  } else {
    line.classList.add("active");
    sidebar.classList.add("open");
  }
});

links.forEach((link) => {
  if (activePage !== "/") {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add("selected");
    }
  } else {
    links[0].classList.add("selected");
  }
});

console.log(li[0]);
