var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cards[0] === cards [1]){
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
}

var flipCard = function(cardID){
	cardsInPlay.push(cards[cardID]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	console.log("User flipped " + cards[cardID]);
}

flipCard(0);
flipCard(2);

