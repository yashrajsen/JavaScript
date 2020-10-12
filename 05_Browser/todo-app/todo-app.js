console.log("These are my ToDos for the day - ")

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


//Starts
const filters = {
    filterText: ''
}

const renderToDos = function (todo, filters1) {
    const filteredToDos = todo.filter(function (todos) {
        return todos.text.toLowerCase().includes(filters1.filterText.toLowerCase())
    })
    console.log(filteredToDos)

    document.querySelector('#todos').innerHTML = ''

    filteredToDos.forEach(function (todo) {
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.text
        todoEl.style.color = 'blue'
        document.querySelector('#todos').appendChild(todoEl)
    })
}

document.querySelector('#search-todo').addEventListener('input', function (e) {
    filters.filterText = e.target.value
    renderToDos(toDos, filters)
})

// get uncompleted to dos
const t = toDos.filter(function (todo) {
    return !todo.completed
})

//print the uncompleted todos in p element
const newP = document.createElement('p')
newP.textContent = `You have ${t.length} todos left`
newP.style.fontWeight = "bold"
document.querySelector('body').appendChild(newP)

//add a p for each todo above 
t.forEach(function (p) {
    const newItems = document.createElement('p')
    newItems.textContent = '   - ' + p.text
    document.querySelector('body').appendChild(newItems)
})
//Ends

document.querySelector('#add-todo').addEventListener('click', function (e) {
    const text = 'Play cricket'
    const completed = false
    toDos.push({ text, completed })
    const addP = document.createElement('p')
    addP.textContent = 'New todo added is : ' + text.toString()
    document.querySelector('body').appendChild(addP)
    e.target.textContent = 'The to Do was added'
    console.log(toDos)
})

document.querySelector('#search-todo').addEventListener('change', function (e) {
    const inputText = document.createElement('p')
    inputText.textContent = 'Search text was : ' + e.target.value
    document.querySelector('body').appendChild(inputText)

})

//1. create div for all the todos
//2. setup filter object and wire up filter input to change
//3. Render function to render