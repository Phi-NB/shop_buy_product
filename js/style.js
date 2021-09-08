let menu_mobile = document.querySelector(".menu");
let bar = document.querySelector("#bar");
let icon_close = document.querySelector("#icon-close");


bar.addEventListener("click", ()=>{
    menu_mobile.classList.toggle("open");
});

icon_close.addEventListener("click", ()=>{
    menu_mobile.classList.toggle("open");
});