document.querySelector("#new-todo")
document.addEventListener("click", function () {
  document.querySelector("#new-todo").classList.remove("error-input");
});

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