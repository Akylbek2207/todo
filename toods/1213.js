const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')


btn.addEventListener('click', (e) => {
console.log(input.value)


  if (input.value === '') {
    alert("Вы должны что-то написать!");
  }
  createElement(input.value)
  input.value = ''
})

function createElement(value) {
  const li = document.createElement('li')
  li.className = 'li'
  li.textContent = value


  const btn = document.createElement('button')
  btn.className = 'btn'
  btn.textContent = "🗑"
  li.appendChild(btn)



  btn.addEventListener('click', e => {
    result.removeChild(li)
  })




  li.addEventListener('click', e => {
    li.classList.toggle('li-active')
  })


  const edit = document.createElement('button')
  edit.className = 'edit'
  edit.textContent = '✎'
  
  li.appendChild(edit)



 edit.addEventListener('click', e => {
  li.contentEditable('')
  })

  result.appendChild(li)
}