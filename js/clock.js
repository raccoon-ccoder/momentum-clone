const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 먼저 호출한 이유는 setInterval()는 100ms 뒤에 getClock() 메소드가 호출된다
// 따라서 화면 처음 접속하면 getClock()이 실행되지 않기에 바로 시간을 나타내기 위해 호출
getClock();
setInterval(getClock, 1000);
