var cards = ["queen", "king", "queen", "king"];
var cardsInPlay = [];

var cardOne;
cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

var cardTwo;
cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cards[0] === cards [1]){
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
}

