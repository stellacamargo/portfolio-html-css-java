function toggleMenu() {
    const menu = document.getElementById("menu");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }