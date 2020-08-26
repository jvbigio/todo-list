const input = document.getElementById('task')
const ul = document.querySelector('.task-item')
input.addEventListener('keydown', addTodo)
let li = document.createElement('li')
const deleteIcon = document.querySelector('.task-item')
deleteIcon.addEventListener('click', deleteTodo)
const savedTasks = localStorage.getItem('tasks')

function addTodo (e) {
  const userInput = e.target.value
  if (e.key === 'Enter') {
    e.preventDefault()
    const li = document.createElement('li')
    ul.appendChild(li)
    li.innerHTML = `
    <li class="todo">
      ${userInput}
      <button class="delete-button">
        <i class="far fa-trash-alt delete-button"></i>
      </button>
    </li>`

    localStorage.setItem('tasks', li.innerHTML)

    li.classList.add('todo-border')
    li.addEventListener('click', (e) => {
      li.classList.toggle('task-complete')
    })
    input.value = ''
  }
}

if (savedTasks) {
  li.innerHTML = savedTasks
  li.classList.toggle('todo-border')
}

function deleteTodo (e) {
  if (!e.target.matches('.delete-button')) return
  li = e.target.closest('li')
  li.parentElement.removeChild(li)
  document.querySelector('.todo-border').classList.remove('todo-border')
}
