const input = document.getElementById('task')
const ul = document.querySelector('.task-item')
input.addEventListener('keydown', addTodo)
// const li = document.querySelectorAll('.todo')
let li

function addTodo (e) {
  const userInput = e.target.value
  // const todoArray = []
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
    //     <i class="far fa-trash-alt delete-button"></i>
    // </li>`
    // <li class="todo">
    //   ${userInput}
    //     <i class="far fa-trash-alt delete-button"></i>
    // </li>`
    li.classList.add('todo-border')
    // li.style.borderBottom = '1px solid #d49a3f'
    li.addEventListener('click', (e) => {
      li.classList.toggle('task-complete')
    })
    input.value = ''
  }
}

// const deleteButton = document.querySelector('.delete-button')
// if (deleteButton) {
//   deleteButton.addEventListener('click', e => {
//     console.log('clicked')
//     console.log(deleteButton)
//   })
// }
function deleteTodo (e) {
  // const deleteButton = document.querySelector('.delete-button') // works
  const deleteButton = document.querySelectorAll('.delete-button')
  if (!e.target.matches('.delete-button')) return
  // deleteButton.parentElement.innerHTML = '' // works but first elem only
  for (let i = 0; i < deleteButton.length; i++) {
    // console.log(deleteButton[i])
    if (deleteButton[i] === e.target) {
      // deleteButton[i].parentNode.textContent = ''
      document.querySelectorAll('.todo').innerHTML = ''
      const todos = document.querySelectorAll('.todo')
      for (let i = 0; i < todos.length; i++) {
        todos[i].innerHTML = ''
      }
    }
  }
  // li.classList.remove('todo-border')
}

const deleteIcon = document.querySelector('.task-item')
deleteIcon.addEventListener('click', deleteTodo)
