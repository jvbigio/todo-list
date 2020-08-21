const input = document.getElementById('task')
const ul = document.querySelector('.task-item')
input.addEventListener('keydown', addTodo)
const li = document.querySelectorAll('.todo')

function addTodo (e) {
  const userInput = e.target.value
  const todoArray = []
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

    li.style.borderBottom = '1px solid #d49a3f'
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
  if (!e.target.matches('.delete-button')) return
  // console.log(e.target)
  // ul.removeChild(li)
  // ul.firstElementChild.innerHTML = ''
  for (let i = 0; i < li.length; i++) {
    if (li[i] === e.target) {
      // li[i].innerHTML = ''
      ul.innerHTML = ''
    }
  }
  // item.children.innerHTML = ''
  // li.style.borderBottom = 'none'
}

const deleteIcon = document.querySelector('.task-item')
deleteIcon.addEventListener('click', deleteTodo)
