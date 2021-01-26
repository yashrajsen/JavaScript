//DOM - Document Object Model Manipulation

//1. Delete an element from our HTML document.
// query and remove
// const paragraph = document.querySelector('p')
// console.log(paragraph)
// paragraph.remove()  //removes the p tag and its content.

//query all and remove
// const ps = document.querySelectorAll('p')
// ps.forEach(function (parag) {
//     parag.remove()
// })

// //query all and remove
// const ps = document.querySelectorAll('p')
// ps.forEach(function (parag) {
//     parag.textContent = '*******'
//     // console.log(parag.textContent)
// })

// // add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newParagraph)

//User Interaction

// add a button 
// document.querySelector('#create-note').addEventListener('click', function (e) { //for id we need #
//     console.log('Did this work?')
//     // console.log(e)
//     e.target.textContent = 'The button was clicked'
// })

// Remove the notes
// document.querySelectorAll('button')[1].addEventListener('click', function (e) {
//     console.log('Removed the notes')
// })

// //Query elements by unique IDs
// document.querySelector('#remove-all').addEventListener('click', function (e) {
//     console.log('Delete all notes')
//     document.querySelectorAll('.note').forEach(function (note) {    // for classes we use .
//         note.remove()
//     })
//     e.target.textContent = 'All notes have been removed'
// })

// //add search method for input text
// document.querySelector('#search-text').addEventListener('input', function (e) {
//     console.log(e.target.value)
// })

//Render notes
const myNotes = [{
    title: 'My next trip',
    body: 'I would like to travel to US'
}, {
    title: 'Get my car and things',
    body: 'Collect my car and things from Storage'
}, {
    title: 'look for a house',
    body: 'rent a house near to the office'
}]

// searched content
const filteredText = { searchText: '' }

const renderNotes = function (note, text) {
    const filteredNotes = note.filter(function (note) {
        return note.title.toLowerCase().includes(text.searchText.toLowerCase())
    })
    console.log(filteredNotes)
    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteElements = document.createElement('p')

        if (note.title.length > 0) {
            noteElements.textContent = note.title
        }
        else {
            noteElements.textContent = 'Unnamed note'
        }
        document.querySelector('#notes').appendChild(noteElements)
    })
}

// renderNotes(myNotes, filteredText)

// document.querySelector('#search-text').addEventListener('input', function (e) {
//     filteredText.searchText = e.target.value
//     renderNotes(myNotes, filteredText)
// })

// document.querySelector('#name-form').addEventListener('submit', function (e) {
//     e.preventDefault()
//     console.log(e.target.elements.firstName.value)
//     e.target.elements.firstName.value = ''
// })

// document.querySelector('#sort-filter').addEventListener('change', function (e) {
//     console.log(e.target.value)
// })

//###
//CRUD operations - create, read, update, delete

// create data
//localStorage.setItem('location', 'Bangalore')   

//Read data
// console.log(localStorage.getItem('location'))

// localStorage.removeItem('location')
// localStorage.clear()    // clears all data values
//localStorage always uses string. we can pass an array as a string.


//##
//Convert an Object to a string - using JSON
// const user = {
//     name: 'Anil',
//     age: 34
// }
// const userJSON = JSON.stringify(user)
// console.log(userJSON)

// localStorage.setItem('user', userJSON)

// //retrieve the data from JSON object
// const getJSONData = localStorage.getItem('user')
// const getUser = JSON.parse(getJSONData)
// console.log(`${user.name} is ${user.age} years old`) //getJSONData cannot get the data. it will print undefined.


//##
//Check for existing saved data
let notes = []
const notesJSON = localStorage.getItem('notes')

if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}

document.querySelector('#create-note').addEventListener('click', function (e) {
    notes.push({
        title: '',
        body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filteredText)
})