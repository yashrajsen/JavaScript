const toDos = [
    { text: 'drink green tea', completed: true },
    { text: 'go for walking', completed: false },
    { text: 'take bath', completed: false },
    { text: 'have breakfast', completed: true },
    { text: 'head to Office', completed: false }
]

// const ps = document.querySelectorAll('p')
// ps.forEach(function (p1) {
//     //console.log(p1.textContent)
//     let pr = p1.textContent.search('and')
//     //console.log(pr)
//     if (pr !== -1) {
//         p1.remove()
//     }
//     // another way to search
//     // if(p1.textContent.includes('and')){
//     //     p1.remove()
//     // }
// })
// const pf = document.querySelectorAll('p')
// pf.forEach(function (p) {
//     console.log(p.textContent)
// })
// //print all todo texts in the array
// const printArray = function (todo) {
//     todo.forEach(function (t) {
//         console.log(t.text)
//     })
// }

const filters = {
    filterText: '',
    hideCompleted: false
}

const renderToDos = function (todo, filters) {
    const filteredToDos = todo.filter(function (todos) {
        const searchTextMatch = todos.text.toLowerCase().includes(filters.filterText.toLowerCase())
        const hideCompletedMatch = !todos.completed || !filters.hideCompleted
        return searchTextMatch && hideCompletedMatch
    })
    displayToDos(filteredToDos)
}

const displayToDos = function (todo) {
    document.querySelector('#displayToDos').innerHTML = ''
    todo.forEach(function (todo) {
        const todoElement = document.createElement('p')
        todoElement.textContent = todo.text
        document.querySelector("#displayToDos").appendChild(todoElement)
    })
}

document.querySelector('#search-todo').addEventListener('input', function (e) {
    filters.filterText = e.target.value
    renderToDos(toDos, filters)
})

// get uncompleted to dos
// const t = toDos.filter(function (todo) {
//     return !todo.completed
// })

// //print the uncompleted todos in p element
// const newP = document.createElement('p')
// newP.textContent = `You have ${t.length} todos left`
// newP.style.fontWeight = "bold"
// document.querySelector('body').appendChild(newP)

// //add a p for each todo above 
// t.forEach(function (p) {
//     const newItems = document.createElement('p')
//     newItems.textContent = '   - ' + p.text
//     document.querySelector('body').appendChild(newItems)
// })

// document.querySelector('#add-todo').addEventListener('click', function (e) {
//     const text = 'Play cricket'
//     const completed = false
//     toDos.push({ text, completed })
//     const addP = document.createElement('p')
//     addP.textContent = 'New todo added is : ' + text.toString()
//     document.querySelector('body').appendChild(addP)
//     e.target.textContent = 'The to Do was added'
//     console.log(toDos)
// })

document.querySelector('#search-todo').addEventListener('change', function (e) {
    const inputText = document.createElement('p')
    inputText.textContent = 'Search text was : ' + e.target.value
    document.querySelector('body').appendChild(inputText)
})

//1. create a form with single input for todo text
//2. setup a submit handler and cancel default action
//3. add a new item to the todos array with the text.
//4. Rerender the application
//5. Clear the input field value

document.querySelector('#form-todo').addEventListener('submit', function (e) {
    e.preventDefault()

    toDos.push({ text: e.target.elements.newTodo.value, completed: false })
    renderToDos(toDos, filters)
    e.target.elements.newTodo.value = ''
})

//1. Create a checkbod and setup event listern --> Hide completed
//2. Create a new hideCompleted filter (default false) --this must show all todos
//3. Update hideCompleted and rerender list on the checkbox change
//4. Setup renderTodos to remove completed items

renderToDos(toDos, filters)
document.querySelector('#hideToDo').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderToDos(toDos, filters)
})