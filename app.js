// Capture input text
// output what's typed into the li element
// when click a task add strike through
// delete task when click delete icon
const input = document.getElementById('task')
const ul = document.querySelector('.task-item')
const deleteBtn = document.querySelector('.deleteButton')
const button = document.querySelector('button')
// deleteBtn.addEventListener('click', deleteTodo)
input.addEventListener('keydown', addTodo)
// input.addEventListener('input', taskInput)

// function addTodo (e) {
//   const userInput = e.target.value
//   todo.innerHTML = `<li class="todo">${userInput} <button class="deleteButton"><i class="far fa-trash-alt"></i></button> </li>`
//   todo.style.borderBottom = '1px solid orange'
// }

// function addTodo () {
//   const userInput = document.getElementById('task').value
//   const li = document.createElement('li')
//   input.addEventListener('keydown', ({ key }) => {
//     if (key === 13) {
//       event.preventDefault()
//       console.log(userInput)
//       li.appendChild(userInput)
//       taskList.appendChild(li)
//     }
//   })
// }

// WORKS, but just one list item
// function addTodo (e) {
//   const userInput = e.target.value
//   input.addEventListener('keydown', ({ key }) => {
//     if (key === 'Enter') {
//       event.preventDefault()
//       // console.log('Enter key pressed')
//       todo.innerHTML = `<li class="todo">${userInput} <button class="deleteButton"><i class="far fa-trash-alt"></i></button> </li>`
//       todo.style.borderBottom = '1px solid #d49a3f'
//       // make input blank after entering task
//       clrInput()
//     }
//   })
// }
function addTodo (e) {
  const userInput = e.target.value
  const todoArray = []
  input.addEventListener('keydown', ({ key }) => {
    if (key === 'Enter') {
      event.preventDefault()
      const li = document.createElement('li')
      ul.appendChild(li)
      li.innerText = userInput
      li.innerHTML = `<li class="todo">${userInput} <button class="deleteButton"><i class="far fa-trash-alt"></i></button> </li>`
      // li.innerHTML = `<li class="todo">${userInput} <button class="deleteButton"><i class="far fa-trash-alt"></i></button> </li>`
      li.style.borderBottom = '1px solid #d49a3f'
      li.addEventListener('click', e => {
        // li.classList.toggle('task-complete')
      })
      // clear input field after submission
      input.value = ''
    }
  })
  const deleteBtn = document.querySelector('.fa-trash-alt')
  if (deleteBtn) {
    // deleteBtn.addEventListener('click', deleteTodo)
    deleteBtn.addEventListener('click', e => {
      console.log('clicked')
    })
  }
}
// function deleteTodo (e) {
//   console.log('Clicked')
// }
// // The easiest approach would be to just check that el is not null before adding an event listener:
// var el = document.getElementById('overlayBtn')
// if (el) {
//   el.addEventListener('click', swapper, false)
// }

// function addTodo (e) {
//   const userInput = document.getElementById('task').value
//   input.addEventListener('keydown', ({ key }) => {
//     if (key === 'Enter') {
//       event.preventDefault()
//       // create li elem
//       // const li = `<li>${userInput}</li>`
//       const li = document.createElement('li')
//       li.innerText = userInput
//       // append li to ul
//       console.log(userInput) // works
//       ul.appendChild(li)

//     }
//   })
// }
