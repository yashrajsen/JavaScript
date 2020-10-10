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
//console.log(myNotes)

//filter - returns a subset of an array
const findNotes = function (notes, query) {
    return filteredNotes = myNotes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch  // return whichever is true
    })
}
// console.log(findNotes(myNotes, 'the'))

//Sorting

const sortNotes = function (notes) {
    return notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0    // to do nothing
        }
    })
}

sortNotes(myNotes)
console.log(myNotes)