const linkBtn = document.querySelector(".links-browser__icon");
const linkBox = document.querySelector(".browser-icons");
const linkForm = document.querySelector(".links-form");
const linkIcon = document.querySelectorAll(".browser-icons__item");
const linkInput = document.querySelector(".links-form__input");

const notClickedClass = "hidden";

function toggle(event) {
    linkBox.classList.toggle(notClickedClass);
    linkInput.focus();
}

linkBtn.addEventListener("click", toggle);
linkBox.classList.add("hidden");

function changeLinkIcon(event) {
    const changeLinkName = event.target.parentElement.id;
    const selectedLink = document.querySelector(".links-browser__icon");
    const selectedLinkArray = selectedLink.classList;
    let selectedLinkId = selectedLink.id;

    switch(changeLinkName) {
        case "icon-google":
            selectedLinkArray.remove(selectedLinkArray[2]);
            selectedLinkArray.add("fa-google");
            selectedLink.id = "link-google";
            break;

        case "icon-naver":
            selectedLinkArray.remove(selectedLinkArray[2]);
            selectedLinkArray.add("fa-neos");
            selectedLink.id = "link-naver";
            break;

        case "icon-daum":
            selectedLinkArray.remove(selectedLinkArray[2]);
            selectedLinkArray.add("fa-dochub");
            selectedLink.id = "link-daum";
            break;
    }
    linkBox.classList.add(notClickedClass);
    linkInput.focus();
}

linkIcon.forEach(item => item.addEventListener("click", changeLinkIcon));

function searchWords(event){
    event.preventDefault();
    const keyWords = document.querySelector(".links-form__input").value;
    document.querySelector(".links-form__input").value = "";
    const choosedLink = document.querySelector(".links-browser__icon").id;

    switch(choosedLink) {
        case "link-google":
            location.href = `https://www.google.com/search?q=${keyWords}`;
            break;
        
        case "link-naver":
            location.href = `https://search.naver.com/search.naver?query=${keyWords}`;
            break;

        case "link-daum":
            location.href = `https://search.daum.net/search?q=${keyWords}`;
            break;
    }
}

linkForm.addEventListener("submit", searchWords);
