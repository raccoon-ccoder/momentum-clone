const randomNumber = Math.floor(Math.random() * 6);

// 방법 1
const bgImage = document.createElement("img");
bgImage.setAttribute("src", `img/${randomNumber}.jpg`);
document.body.appendChild(bgImage);

// // 방법 2
// const body = document.querySelector("body");
// body.style.backgroundImage = `url(img/${randomNumber}.jpg)`;
// body.style.backgroundSize = "cover";