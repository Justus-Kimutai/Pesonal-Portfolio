const listsContainer = document.querySelector('[data-lists]')
const newlistForm = document.querySelector('[new-list-form]')
const newlistinput = document.querySelector('[new-list-input]')
const deleteListButton = document.querySelector('[delete-list-button]')
const ListDisplayContainer = document.querySelector('[data-list-display-container]')
const listTitleElement = document.querySelector('[data-list-title]')
const listCountElement = document.querySelector('[data-list-count]')
const taskContainer = document.querySelector('[data-tasks]')
const taskTemplate = document.getElementById('task-template')
const newTaskForm = document.querySelector('[data-new-task-form]')
const newTaskInput = document.querySelector('[data-new-task-input]')
const clearCompleteTaskButton = document.querySelector('[clear-complete-task-button]')

//stores the list items and ids
const LOCAL_STORAGE_LIST_KEY = 'task.lists'
const LOCAL_STORAGE_LIST_ID_KEY = 'task.selectedListId'

let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []
let selectedListId = localStorage.getItem(LOCAL_STORAGE_LIST_ID_KEY)


//Adding eventListener to the parentContainer
listsContainer.addEventListener('click', e =>{
    if(e.target.tagName.toLowerCase() === 'li'){
        selectedListId = e.target.dataset.listId
        saveandRender()
    }
})

taskContainer.addEventListener('click', e =>{
    if(e.target.tagName.toLowerCase() === 'input'){
        const selectedList = lists.find(list  => list.id === selectedListId)
        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)
        selectedTask.complete = e.target.checked
        save()
        renderTaskCount(selectedList)
    }
})

clearCompleteTaskButton.addEventListener('click', e =>{
    const selectedList = lists.find(list => list.id === selectedListId)
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
    saveandRender()
})

//delete selected list
deleteListButton.addEventListener('click', e =>{
    lists = lists.filter(list => list.id !== selectedListId)
    selectedListId = null
    saveandRender()
})

//takes users iput and places it to the array lists
newlistForm.addEventListener('submit', e =>{
    e.preventDefault()
    const listName = newlistinput.value 
    if(listName == null || listName === '') return
    const list = createList(listName) 
    newlistinput.value = null 
    lists.push(list)
    saveandRender()
})
newTaskForm.addEventListener('submit', e =>{
    e.preventDefault()
    const taskName = newTaskInput.value 
    if(taskName == null || taskName === '') return
    const task = createTask(taskName) 
    newTaskInput.value = null 
    const selectedList = lists.find(list => list.id === selectedListId) 
    selectedList.tasks.push(task)
    saveandRender()
})

function createList(name){
    return {
        id:Date.now().toString(), 
        name:name, 
        tasks:[]
    }
}
function createTask(name){
    return {
        id:Date.now().toString(), 
        name:name, 
        complete: false
    }
}

function saveandRender(){
    save()
    render()
}

function save(){
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
    localStorage.setItem(LOCAL_STORAGE_LIST_ID_KEY, selectedListId)
}

//creates the 'li' element
function render(){
    clearElement(listsContainer)

    renderLists()

    const selectedList = lists.find(list => list.id === selectedListId)
    if(selectedListId == null){
        ListDisplayContainer.style.display = 'none'
    }else{
        ListDisplayContainer.style.display = ''
        listTitleElement.innerText = selectedList.name
        renderTaskCount(selectedList)
        clearElement(taskContainer)
        renderTasks(selectedList)
    }
}

function renderTasks(selectedList){
    selectedList.tasks.forEach(task =>{
        const taskElement = document.importNode(taskTemplate.content, true)
        const checkbox = taskElement.querySelector('input')
        checkbox.id = task.id
        checkbox.checked = task.complete
        const label = taskElement.querySelector('label')
        label.htmlFor = task.id
        label.append(task.name)
        taskContainer.appendChild(taskElement)
    })
}

function renderTaskCount(selectedList){
    const incompleteTaskCount = selectedList.tasks.filter(task => !task.complete).length
    const taskString = incompleteTaskCount === 1 ? "task" : "tasks"
    listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`
}

function renderLists(){
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add("list-name")
        listElement.innerText = list.name
        if(list.id === selectedListId){
            listElement.classList.add("active-list")
        }
        listsContainer.appendChild(listElement)
    })
}

function clearElement(element) {
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

render()