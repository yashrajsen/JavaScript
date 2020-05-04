let bookA = {
    title: 'Wings of Fire',
    author: 'Abdul Kalam',
    pageCount: 386
}
let bookB = {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    pageCount: 855
}

let getSummary = function(book){
    return {
        bookSummary: `The book ${book.title} is written by ${book.author}.`,
        pageSummary: `The book ${book.title} has ${book.pageCount} pages.`
    }
}

let summaryB = getSummary(bookB)
console.log(summaryB)