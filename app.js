// Capture input text
// output what's typed into the li element
// when click a task add strike through
// delete task when click delete icon
const input = document.getElementById('task')
const todo = document.querySelector('.todo')

input.addEventListener('input', e => {
  console.log(e.target.value)
})
input.addEventListener('input', taskInput)

function taskInput (e) {
  // todo.textContent = e.target.value // deletes the icon
  todo.innerHTML = `<li class="todo">${e.target.value} <button class="deleteButton"><i class="far fa-trash-alt"></i></button> </li>`
  todo.style.borderBottom = '1px solid orange'
}

// todo.textContent = 'TEST'
