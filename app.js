const input = document.getElementById('task')
input.addEventListener('keydown', addTodo)
const ul = document.querySelector('.task-item')
const deleteIcon = document.querySelector('.task-item')
deleteIcon.addEventListener('click', deleteTodo)

function addTodo (e) {
  const userInput = e.target.value
  const li = document.createElement('li')

  if (e.key === 'Enter') {
    if (userInput === '') {
      e.preventDefault()
      return false
    }
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
  let li
  ul.addEventListener('click', e => {
    li = e.target.closest('li')
    li.classList.toggle('task-complete')
  })
}

function taskSaver (task) {
  const todoGetter = JSON.parse(localStorage.getItem('tasks'))
  let tasks
  if (!todoGetter) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function taskLoader () {
  const todoGetter = JSON.parse(localStorage.getItem('tasks'))
  let tasks
  if (!todoGetter) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach(task => {
    const li = document.createElement('li')
    ul.appendChild(li)
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

function deleteTodo (e) {
  let li
  if (!e.target.matches('.delete-button')) return
  li = e.target.closest('li')
  li.parentElement.removeChild(li)
  document.querySelector('.todo-border').classList.remove('todo-border')
}

taskLoader()
