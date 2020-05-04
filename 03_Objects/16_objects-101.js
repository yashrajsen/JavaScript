//Object has related piece of information all in a single container
//To create an object, define a variable with curly braces

let myBook = {
    //add a property for the object myBook
    title: 'Wings of Fire',
    author: 'Abdul Kalam',
    pageCount: 386
}
console.log(myBook);
// console.log(myBook.title);
// console.log(myBook.author);
// console.log(myBook.pageCount);

myBook.title = 'Alchemist'
myBook.author= 'Paulo Cheolo'

console.log(`The book titled ${myBook.title} is writen by ${myBook.author} has ${myBook.pageCount} pages`)

console.log(myBook);

// Person object

let person = {
    name: 'Devarajan',
    age: 62,
    location: 'Coimbatore'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)
person.name = 'Senthil'
person.age = 31
person.location = 'New Delhi'
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)