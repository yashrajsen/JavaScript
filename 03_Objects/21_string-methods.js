let name = 'Senthil D'

console.log(name.length)

let isValidPassword= function (passwordstring) {
    return passwordstring.length > 8 && !passwordstring.includes('password') 
}

console.log(isValidPassword('abwe23'));
console.log(isValidPassword('abwe231&*%32w89'));
console.log(isValidPassword('abwe23password138'));
