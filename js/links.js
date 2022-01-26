const linkBtn = document.querySelector(".links-browser__icon");
const linkBox = document.querySelector(".browser-icons");
const linkForm = document.querySelector(".links-form__input");
const linkIcon = document.querySelectorAll(".browser-icons__item");

linkBtn.addEventListener("click", toggle);
linkBox.classList.add("hidden");

function toggle() {
    const notClickedClass = "hidden";
    linkBox.classList.toggle(notClickedClass);
    linkForm.focus();
}
linkIcon.addEventListener("click", changeLinkIcon);

function changeLinkIcon(event) {
    console.dir(event);
}