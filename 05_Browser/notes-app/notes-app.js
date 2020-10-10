console.log('This is from a differnt file')

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

//query all and remove
const ps = document.querySelectorAll('p')
ps.forEach(function (parag) {
    parag.textContent = '*******'
    // console.log(parag.textContent)
})

// add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph)