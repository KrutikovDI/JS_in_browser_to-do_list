const button = document.getElementById("tasks__add")
const form = document.getElementById("tasks__form")
button.addEventListener("click", (e) => {
  e.preventDefault()
  let input = document.getElementById("task__input")
  let task = document.getElementById("tasks__list")
  let div1 = document.createElement("DIV")
  div1.className = "task"
  task.appendChild(div1)
  div1.innerHTML = "<a href='#' class='task__remove'>&times;</a>"
  let div2 = document.createElement("DIV")
  div2.textContent = input.value
  div2.className = "task__title"
  div1.insertBefore(div2, div1.firstElementChild)
  const dels = document.getElementsByClassName("task__remove")
  let taskChildren = task.children
  for (i=0; i<taskChildren.length; i++) {
    let a = taskChildren[i].children[1]
    a.addEventListener('click', (e) => {
      e.target.parentElement.remove()
    })
  }
})