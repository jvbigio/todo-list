const input = document.getElementById('task')
const ul = document.querySelector('.task-item')
input.addEventListener('keydown', addTodo)
let li = document.createElement('li')
const deleteIcon = document.querySelector('.task-item')
deleteIcon.addEventListener('click', deleteTodo)
const savedTasks = localStorage.getItem('tasks')
let tasks

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

    // localStorage.setItem('tasks', userInput)
    taskSaver(userInput)
    li.classList.add('todo-border')
    markComplete()
    input.value = ''
  }
}

function taskSaver (task) {
  if (!tasks) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function taskLoader () {
  if (!tasks) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach(task => {
    console.log(task)
    ul.appendChild(li)
    ul.innerHTML = `
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

function markComplete () {
  ul.addEventListener('click', e => {
    console.log('clicked')
    li = e.target.closest('li')
    console.log(li)
    li.classList.toggle('task-complete')
  })
}

function deleteTodo (e) {
  if (!e.target.matches('.delete-button')) return
  li = e.target.closest('li')
  li.parentElement.removeChild(li)
  document.querySelector('.todo-border').classList.remove('todo-border')
}

taskLoader()
