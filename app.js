document.addEventListener('DOMContentLoaded', function () {
  taskLoader()
})

const input = document.getElementById('task')
input.addEventListener('keydown', addTodo)
const ul = document.querySelector('.task-item')
const deleteIcon = document.querySelector('.task-item')
deleteIcon.addEventListener('click', deleteTodo)

function addTodo (e) {
  const userInput = e.target.value

  if (e.key === 'Enter') {
    if (userInput === '') {
      e.preventDefault()
      return false
    }
    e.preventDefault()
    todoCreator(userInput)
    taskSaver(userInput)
    input.value = ''
  }
}

function markComplete () {
  ul.addEventListener('click', e => {
    const li = e.target.closest('li')
    li.classList.toggle('task-complete')
  })
}

function taskSaver (task) {
  const tasks = taskStorageHelper()
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function taskLoader () {
  const tasks = taskStorageHelper()
  tasks.forEach(task => {
    todoCreator(task)
  })
}

function deleteTodo (e) {
  let li
  if (!e.target.matches('.delete-button')) {
    return
  } else {
    li = e.target.closest('li')
  }
  const liText = li.innerText
  let storedTasks = taskStorageHelper()
  storedTasks = storedTasks.filter(todo => todo !== liText)
  localStorage.setItem('tasks', JSON.stringify(storedTasks))
  li.remove()
}

function todoCreator (task) {
  const li = document.createElement('li')
  ul.appendChild(li)
  li.innerHTML = `
    ${task}
    <button class="delete-button">
      <i class="far fa-trash-alt delete-button"></i>
    </button>`
  markComplete()
  li.classList.add('todo-border')
}

function taskStorageHelper () {
  const todoGetter = JSON.parse(localStorage.getItem('tasks'))
  let tasks
  if (!todoGetter) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  return tasks
}
