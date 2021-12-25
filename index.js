let player = {
  name: 'Siddhant',
  money: 10000
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let cardEl = document.getElementById('card-el')
let sumEl = document.getElementById('sum-el')
let playerEl = document.getElementById('player-el')

function getRandomCard () {
  let random = Math.random() // 0.00000 - 0.99999
  let newRandomCard = Math.floor((random * 13) + 1)
  if (newRandomCard === 1) {
    return 11
  } else if (newRandomCard > 10) {
    return 10
  } else {
    return newRandomCard
  }
}

playerEl.textContent = player.name + ': ₹' + player.money
function startGame () {
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  isAlive = true
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}
function renderGame () {
  cardEl.textContent = "Cards are: "
  for (var i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + ' '
  }
  // cardEl.textContent = 'Card: ' + cards[0] + ' ' + cards[1]
  sumEl.textContent = 'Sum: ' + sum
  if (sum < 21) {
    message = "do you want to draw a new card?😉"
  } else if (sum === 21) {
    message = "wuhhuu!! it's a Blackjack!!😍"
    hasBlackJack = true
  } else {
    message = "you're out of the game!!😭"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard () {
  if (isAlive && hasBlackJack === false) {

    let nextCard = getRandomCard()
    sum += nextCard
    cards.push(nextCard)
    renderGame()
}
}
