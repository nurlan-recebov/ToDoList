const form = document.querySelector('.form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const button = document.querySelector('.addbtn');
const deleteAllBtn = document.querySelector('.delAll');


let data=[]
function addBtn() {
       if (input.value.trim() === '') return
    data.push(input.value)
    show()
    
}
button.onclick=addBtn

function show(){
    input.value=''
    const dataItem=data.map((item,i)=>
    `<li>${item} <button onclick="del(${i})">delete</button><button onclick="edit(${i})">edit</button></li>`
    )
    ul.innerHTML=dataItem.join('')
     deleteAllBtn.style.display = data.length ? 'block' : 'none'
   

}

function del(i) {
    data.splice(i,1)
    show()
}
function edit(i){
    input.value=data[i]
    button.textContent='Edit'
  
    button.onclick=()=>editShow(i)
}
function editShow(i){
    data[i]=input.value
    show()
    button.textContent='Add'
    button.onclick=addBtn
}
function deleteAll() {
    data = [];
    show();
}