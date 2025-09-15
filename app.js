const input = document.querySelector('input')
const list = document.querySelector('.list')

let todoList = [];
let todoInputValue = '';
let counter = 0;

function onInputChange(event) {
  todoInputValue = event.target.value;
}

function handleInputKeyUp(event) {
  if(event.key === 'Enter'){
    addTodo()
  }
}

function addTodo() {
  if(!todoInputValue) {
    return
  }

  todoList.push({
    id: counter++,
    task: todoInputValue,
  })
  renderTodos()
  input.value = ''
  todoInputValue = ''
}

function renderTodos() {
  list.innerHTML = todoList.map((element) =>
  `<li>
          ${element.task}
          <button class="todo__delete" onclick="deleteTodo(${element.id})">
            x
          </button>
        </li>
  `
  ).join('')
}

function deleteTodo(id) {
  todoList = todoList.filter((todo) => todo.id !== id)
  renderTodos()
}