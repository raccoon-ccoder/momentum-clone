const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; 

// localStorage에 작성한 todolist 배열 저장
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// X 버튼 클릭시 화면에서 todo 지우고 localStorage에서도 지움
function deleteToDo(event) {
    // event.tartget : 이벤트를 만든? 타켓이 무엇인지 -> 클릭된 HTML element
    // button.parentElement parentNode : 해당 태그의 부모 태그 알려줌
    // 버튼이 여러개지만 클릭한 버튼의 부모요소를 찾아서 삭제할 수 있게됨
    const li = event.target.parentElement;

    // 삽질 포인트
    // filtering이 되지 않아 toDo.id의 typeof도 봤는데 li.id type 체크하는 걸 생각 못함...
    // li.id는 stirng 배열 id는 number이므로 형변환 필요
    toDos = toDos.filter((toDo) => toDo.id !== Number(li.id));
    saveToDos();
    li.remove();
}

// 화면에서 todo 생성되는 함수
function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    
    toDoList.appendChild(li);
}

// 사용자가 todo 작성 후 엔터 눌렀을 때 일어나는 함수
function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const TodoObj = {
        text: newToDo,
        id: Date.now()
    };    
    toDos.push(TodoObj);
    saveToDos();
    paintToDo(TodoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// 화면 새로고침 혹은 접속시 미리 저장해둔 ToDoList가 있는지 체크, 없다면 null
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}