const button = document.getElementById("tasks__add")
const form = document.getElementById("tasks__form")
button.addEventListener("click", (e) => {
  e.preventDefault()
  let input = document.getElementById("task__input")
  let task = document.getElementById("tasks__list")
  if (input.value.trim() != "") {
    task.insertAdjacentHTML("beforeEnd", `<div class="task"><div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a></div>`)
  input.value = ""
  }
  let taskChildren = task.children
  for (let i=0; i<taskChildren.length; i++) {
    let a = taskChildren[i].children[1]
    a.addEventListener('click', (e) => {
      e.target.parentElement.remove()
    })
  }
})
