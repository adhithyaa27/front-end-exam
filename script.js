const menuBtnMobile = document.querySelector(".header-mobile button");
const menuBtnDesktop = document.querySelector(".sidebar header button");
const sidebar = document.querySelector(".sidebar");

function triggerSidebar() {
  sidebar.classList.toggle("sidebar-active");
}

if (menuBtnMobile) {
  menuBtnMobile.addEventListener("click", (event) => {
    event.stopPropagation();
    triggerSidebar();
  });
}

if (menuBtnDesktop) {
  menuBtnDesktop.addEventListener("click", (event) => {
    event.stopPropagation();
    triggerSidebar();
  });
}

document.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-active");
});