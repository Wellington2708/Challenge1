const menu = document.getElementById("menu");

function abrirMenu() {
    const nav = document.getElementById("nav")
    nav.classList.toggle("active");
}

menu.addEventListener("click", abrirMenu);