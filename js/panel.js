// LOAD BUTTON
let hum = document.querySelector(".hum-btn");
let panel = document.querySelector(".panel-right");
hum.addEventListener('click',e => {
    panel.classList.toggle("open");
});