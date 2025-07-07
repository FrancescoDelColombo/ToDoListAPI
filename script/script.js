document.querySelector("#new-todo")
document.addEventListener("click", function () {
  document.querySelector("#new-todo").classList.remove("error-input");
});

const baseUr1 = "https://its-todo-api.azurewebsites.net/api";

document.addEventListener("DOMContentLoaded", function () {
  fetchData().then((todos) => {
    if (todos) {
      console.log("Dati ricevuti:", todos);
      renderTodos(todos)
    }
  }).catch((error) => {
    console.error("Errore durante il fetch dei dati:", error);
  });
});

async function fetchData() {
  
  try{
    const response = await fetch(`${baseUr1}/ToDo`, {
      method: "GET",
      headers:{
        "x-api-key":"V4PaperYx4Ycc6zucdO6",
      },
    });

    if (!response.ok) throw new Error("Errore nella risposta");

    const todos = await response.json();
    return todos;
  } catch (error) {
    console.error("Errore API:", error);
    return null;

    }
  }

function renderTodos(todos) {
  todos.forEach((item, i) => {
    document.querySelector(".todos").insertAdjacentHTML(
      "beforeend",
      `
        <div class="todo-container">
          <div class="todo" id="todo-${i}">${item.description}</div>
          <input type="checkbox" name="chk-${i}" id="chk-${i}" onclick="clicked('chk-${i}')" />
        </div>
        `
    );
  });
}

function addTodo() {
  var todoText = document.querySelector("#new-todo").value;
  const input = document.querySelector("#new-todo");

  if (todoText === "") {
    input.classList.remove("error-input");
    void input.offsetWidth;
    input.classList.add("error-input");
    return;
  }

  let count = document.querySelectorAll(".todo").length;
  let i = ++count;

  document.querySelector(".todos").insertAdjacentHTML("beforeend", `
    <div class="todo-container">
      <div class="todo" id="todo-${i}">${todoText}</div>
      <input type="checkbox" name="chk-${i}" id="chk-${i}" />
    </div>
    `);

  document.querySelector("#new-todo").value = "";
  document.querySelector("#new-todo").focus();
}

  const container = document.querySelector(".todos");
  container.addEventListener("change", function (e) {
    if (e.target && e.target.type === "checkbox") {
      var index = e.target.id.split("-").pop();
      document.querySelector(`#todo-${index}`).classList.toggle("complete");
  }
});