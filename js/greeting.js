const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");
const greetingTime = document.querySelector(".greeting__time");
const userName = document.querySelector(".greeting__name");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// Log In 버튼 클릭시 form 태그 사라지고 환영 문구 보여주는 function
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// 로그인을 한 경우 h1 태그에 사용자명을 보여주고 h1 class hidden을 제거하는 함수
function paintGreetings(username) {
    let greetingMessage;
    const now = new Date().getHours();
    if(now >= 6 && now < 12){
        greetingMessage = "Good Morning";
    }else if(now >= 12 && now < 18){
        greetingMessage = "Good Afternoon";
    }else {
        greetingMessage = "Good Evening";
    }
    greetingTime.innerText = `${greetingMessage}, `;
    userName.innerText = `${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 처음 화면 접속시 username이 localStorage에 있는지 확인 후 그에 따른 form or greeting 문구 보여주기
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}