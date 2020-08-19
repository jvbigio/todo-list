// Capture input text
// output what's typed into the li element
// when click a task add strike through
// delete task when click delete icon
const input = document.getElementById('task')
const todo = document.querySelector('.todo')
const taskList = document.querySelector('.task-item')
// console.log(taskList)
// input.addEventListener('input', e => {
//   console.log(e.target.value)
// })
input.addEventListener('input', taskInput)

// input.addEventListener('keydown', ({ key }) => {
//   if (key === 'Enter') {
//     event.preventDefault()
//     console.log('Enter key pressed')
//   }
// })

// function taskInput (e) {
//   const userInput = e.target.value
//   todo.innerHTML = `<li class="todo">${userInput} <button class="deleteButton"><i class="far fa-trash-alt"></i></button> </li>`
//   todo.style.borderBottom = '1px solid orange'
// }
function taskInput (e) {
  const userInput = e.target.value
  input.addEventListener('keydown', ({ key }) => {
    if (key === 'Enter') {
      event.preventDefault()
      // console.log('Enter key pressed')
      todo.innerHTML = `<li class="todo">${userInput} <button class="deleteButton"><i class="far fa-trash-alt"></i></button> </li>`
      todo.style.borderBottom = '1px solid #d49a3f'
    }
  })
}

// todo.textContent = 'TEST'
