console.log("These are my ToDos for the day - ")

const toDos = [
    { text: 'drink green tea', completed: true },
    { text: 'go for walking', completed: false },
    { text: 'take bath', completed: false },
    { text: 'have breakfast', completed: true },
    { text: 'head to Office', completed: false }
]

const ps = document.querySelectorAll('p')
ps.forEach(function (p1) {
    //console.log(p1.textContent)
    let pr = p1.textContent.search('and')
    //console.log(pr)
    if (pr !== -1) {
        p1.remove()
    }
    // another way to search
    // if(p1.textContent.includes('and')){
    //     p1.remove()
    // }
})
const pf = document.querySelectorAll('p')
pf.forEach(function (p) {
    console.log(p.textContent)
})
//print all todo texts in the array
const printArray = function (todo) {
    todo.forEach(function (t) {
        console.log(t.text)
    })
}

// get uncompleted to dos
const t = toDos.filter(function (todo) {
    return !todo.completed
})

//print the uncompleted todos in p element
const newP = document.createElement('p')
newP.textContent = `You have ${t.length} todos left`
document.querySelector('body').appendChild(newP)

//add a p for each todo above 
t.forEach(function (p) {
    const newItems = document.createElement('p')
    newItems.textContent = '   - ' + p.text
    document.querySelector('body').appendChild(newItems)
})
