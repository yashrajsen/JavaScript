let name = 'Anil'

console.log(name)

if(true){
    //console.log(name)
    
    let name = 'Senthil'
    if(true){
        console.log(name) //Will print only "Senthil" and not "Anil". This is called variable shadowing
        name = 'Yash'   //If there is no declaration of the variable in above section, the variable gets declared itself .It is called leaked global declaration.
        console.log(name)
    }
}

if(true){
    console.log(name)   // This will print as Anil since there is no local name variable in this block and it will refer global variable.
}