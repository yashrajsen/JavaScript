// arguments: students score, total possible score
// 15/20 => You got a C (75%)
// grades are A: 91-100 B: 81-90 C: 61-80 D: 41-60 and F:0-40

let getScore = function(studentScore,totalScore = 100) {
    let scorePercent = studentScore/totalScore *100
    let grade
    if(scorePercent > 90) {
        grade = 'A'
    }else if(scorePercent > 80 && scorePercent <= 90){
        grade = 'B'
    }else if(scorePercent > 60 && scorePercent <= 80){
        grade = 'C'
    }else if(scorePercent > 40 && scorePercent <= 60){
        grade = 'D'
    }else grade = 'F'

    return `You got a ${grade} (${scorePercent}%).`
}

let resultA = getScore(36,120)
let resultB = getScore(140,150)
let resultC = getScore(70)

console.log(resultA)
console.log(resultB)
console.log(resultC)