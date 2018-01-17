var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
	},
];

var cardsInPlay = [];
var score = 0;

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
		score += 1;
		showScore();
	}
	else {
		alert("Sorry, try again.");
	}
}

var flipCard = function(){
	var cardID=this.getAttribute('data-id');
	cardsInPlay.push(cards[cardID].rank);


	this.setAttribute('src',cards[cardID].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
}

var empty = function() {
	cardsInPlay = [];
	document.getElementById('game-board').innerHTML= "";
	createBoard();
}

var showScore = function(){
	document.getElementById('score').innerHTML= "<p>Your current score is: " + score + "</p>"
}

var createBoard = function() {
	for (var i=0; i<cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
	var reset=document.getElementById('reset').addEventListener('click', empty);
	showScore();
}

createBoard();