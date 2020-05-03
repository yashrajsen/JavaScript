let varOne = 'varOne' //global scope

if(true) {
    console.log(varOne)
    let varTwo = 'varTwo' //local scope
    console.log(varTwo)
}
//throws error
//console.log(varTwo)

if(true){
    let varThree = 'varThree'
    console.log(varThree)

    if(true){
        let varFour = 'varFour'
        console.log(varFour)
    }
}
//Javascript uses lexical scripting