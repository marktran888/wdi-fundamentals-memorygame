var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds",
	},
];

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
	cardsInPlay.push(cards[cardID].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
}

flipCard(0);
flipCard(2);