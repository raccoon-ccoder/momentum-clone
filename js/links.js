const linkBtn = document.querySelector(".search-icon");
const linkBox = document.querySelector(".browsers");
const linkForm = document.querySelector(".search__form");
const linkIcon = document.querySelectorAll(".browsers__item");
const linkInput = document.querySelector(".search__input");
const linkSelectIcon = document.querySelector(".fa-chevron-down");

const NOT_CLICKED_CLASS = "hidden";

function toggle(event) {
    linkBox.classList.toggle(NOT_CLICKED_CLASS);
    linkInput.focus();
}

linkBtn.addEventListener("click", toggle);
linkSelectIcon.addEventListener("click", toggle);
linkBox.classList.add("hidden");

// // 수정 코드
// const linkItems = document.querySelector(".browser-icons__list");
// linkItems.addEventListener("click", changeLinkIcon);

// function changeLinkIcon(event) {
//     const changeLinkName = event.target.parentElement.id;
//     const selectedLink = document.querySelector(".links-browser__icon");
//     const selectedLinkArray = selectedLink.classList;
//     let selectedLinkId = selectedLink.id;

//     switch(changeLinkName) {
//         case "icon-google":
//             selectedLinkArray.remove(selectedLinkArray[2]);
//             selectedLinkArray.add("fa-google");
//             selectedLink.id = "link-google";
//             break;

//         case "icon-naver":
//             selectedLinkArray.remove(selectedLinkArray[2]);
//             selectedLinkArray.add("fa-neos");
//             selectedLink.id = "link-naver";
//             break;

//         case "icon-daum":
//             selectedLinkArray.remove(selectedLinkArray[2]);
//             selectedLinkArray.add("fa-dochub");
//             selectedLink.id = "link-daum";
//             break;
//     }
//     // event.currentTarget.querySelector(".browser-icons").classList.add(NOT_CLICKED_CLASS);
//     linkBox.classList.add(NOT_CLICKED_CLASS);
//     linkInput.focus();
// }

function changeLinkIcon(event) {
    const changeLinkName = event.target.parentElement.id;
    const selectedLink = document.querySelector(".search-icon");
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
