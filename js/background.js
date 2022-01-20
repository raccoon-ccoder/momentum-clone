const randomNumber = Math.floor(Math.random() * 6);

const bgImage = document.createElement("img");
bgImage.src = `img/${randomNumber}.jpg`;
document.body.appendChild(bgImage);
// const body = document.querySelector("body");
// body.style.backgroundImage = `url(img/${randomNumber}.jpg)`;
// body.style.backgroundSize = "cover";