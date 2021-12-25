// let player1 = 100
// let player2 = 104
// function racetotal () {
//   return player1 + player2
// }
// let total = racetotal()
// console.log(total)

// let variable 'will need a let return variable'
// let random = Math.random()
// console.log(random)
// console.log(Math.floor(random * 6))
// function rollDice () {
//   let randomnum = Math.random()
//   console.log(randomnum)
//   return Math.floor((randomnum * 6) + 1)
// }
// console.log(rollDice())

// how data in database are stored. Using Objects!!
// let course = {
//   title: 'Learn CSS Gride for free',
//   lessons: 16,
//   creator: 'siddhant khanna',
//   length: 23,
//   level: 2,
//   courseFree: true,
//   tags: ['html', 'css']
// }
// console.log(course)
let hands = ['rock', 'paper', 'scissor']

function randomItem () {
  console.log(hands[Math.floor(Math.random() * 3)])
}
randomItem()
