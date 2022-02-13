const linkBtn = document.querySelector(".search-icon");
const linkBox = document.querySelector(".browsers");
const linkForm = document.querySelector(".search__form");
const linkIcon = document.querySelectorAll(".browsers__item");
const linkInput = document.querySelector(".search__input");
const linkSelectIcon = document.querySelector(".fa-chevron-down");

const NOT_CLICKED_CLASS = "hidden";

function toggle(event) {
    linkBox.classList.toggle(NOT_CLICKED_CLASS);
    document.querySelector("body").addEventListener("click", closeBrowserBox);
    linkInput.focus();
}

function closeBrowserBox(event) {
    const target = event.target;

    if(target == event.currentTarget.querySelector(".search-icon")) {
        return;
    }
    if(target == event.currentTarget.querySelector(".fa-chevron-down")) {
        return;
    }
    if(target == event.currentTarget.querySelector(".browsers__title")) {
        return;
    }
    if(target == event.currentTarget.querySelector(".browsers__item")) {
        return;
    }if(target == event.currentTarget.querySelector(".browsers__icon")) {
        return;
    }

    if(!linkBox.classList.contains(NOT_CLICKED_CLASS)){
        linkBox.classList.add(NOT_CLICKED_CLASS);
    }
}

linkBtn.addEventListener("click", toggle);
linkSelectIcon.addEventListener("click", toggle);
linkBox.classList.add("hidden");

function changeLinkIcon(event) {
    const changeLinkName = event.target.parentElement.id;
    const selectedLink = document.querySelector(".search-icon");
    const selectedLinkArray = selectedLink.classList;
    let selectedLinkId = selectedLink.id;

    switch(changeLinkName) {
        case "icon-google":
            selectedLinkArray.remove(selectedLinkArray[2]);
            selectedLinkArray.add("fa-google");
            selectedLinkId = "link-google";
            break;

        case "icon-naver":
            selectedLinkArray.remove(selectedLinkArray[2]);
            selectedLinkArray.add("fa-neos");
            selectedLinkId = "link-naver";
            break;

        case "icon-daum":
            selectedLinkArray.remove(selectedLinkArray[2]);
            selectedLinkArray.add("fa-dochub");
            selectedLinkId = "link-daum";
            break;
    }
    linkBox.classList.add(NOT_CLICKED_CLASS);
    linkInput.focus();
}

linkIcon.forEach(item => item.addEventListener("click", changeLinkIcon));

function searchWords(event){
    event.preventDefault();
    const keyWords = document.querySelector(".search__input").value;
    document.querySelector(".search__input").value = "";
    const choosedLink = document.querySelector(".search-icon").id;

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
