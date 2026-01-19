const todoList = document.querySelector(".todo-list");
const input = document.querySelector('input')
const ul = document.querySelector("ul");
const li = document.querySelector("li");
const form = document.querySelector('form')
const addBtn = document.querySelector('.addbtn')
const data = []
let dataIndex = null
form.addEventListener("submit", function (e) {
    e.preventDefault()
    if (input.value.trim() === "") return;
    if (dataIndex !== null) {
        data[dataIndex].name = input.value
        dataIndex = null
        addBtn.innerHTML = 'Add'
    } else {
        data.push({ name: input.value })
    }

    show()


})
function del(i) {
    data.splice(i, 1)
    show()
}
function edit(i) {
    input.value = data[i].name
    dataIndex = i
    addBtn.innerHTML = 'Edit'
}
function show() {
    let word = ''
    input.value = ''
    data.forEach((item, i) => {
        word += `<li>${item.name} <button onclick='del(${i})'>Delete</button> <button onclick='edit(${i})'>Edit</button></li>`
    })
    ul.innerHTML = word
}