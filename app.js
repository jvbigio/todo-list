const input = document.getElementById('task')
const ul = document.querySelector('.task-item')
input.addEventListener('keydown', addTodo)
// let li = document.createElement('li')
const deleteIcon = document.querySelector('.task-item')
deleteIcon.addEventListener('click', deleteTodo)
const todoGetter = JSON.parse(localStorage.getItem('tasks'))
let tasks, li

function addTodo (e) {
  const userInput = e.target.value
  if (e.key === 'Enter') {
    // validateForm()
    e.preventDefault()
    ul.appendChild(li)
    li.innerHTML = `
    <li class="todo">
      ${userInput}
      <button class="delete-button">
        <i class="far fa-trash-alt delete-button"></i>
      </button>
    </li>`

    taskSaver(userInput)
    li.classList.add('todo-border')
    markComplete()
    input.value = ''
  }
}

function markComplete () {
  ul.addEventListener('click', e => {
    li = e.target.closest('li')
    li.classList.toggle('task-complete')
  })
}

function taskSaver (task) {
  if (!todoGetter) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function taskLoader () {
  if (!todoGetter) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach(task => {
    console.log(task)
    console.log(tasks)
    ul.appendChild(li)
    li = document.createElement('li')

    li.textContent = tasks
    li.innerHTML = `
    <li class="todo">
      ${task}
      <button class="delete-button">
        <i class="far fa-trash-alt delete-button"></i>
      </button>
    </li>`
    markComplete()
    li.classList.add('todo-border')
  })
}

// function validateForm () {
//   const x = document.forms.todoInput.fname.value
//   return (x === '') ? alert('Input field cannot be blank') : false
// }

function deleteTodo (e) {
  if (!e.target.matches('.delete-button')) return
  li = e.target.closest('li')
  li.parentElement.removeChild(li)
  document.querySelector('.todo-border').classList.remove('todo-border')
}

taskLoader()
