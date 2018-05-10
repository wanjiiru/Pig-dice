//business logic


var player1 = "";
var player2 = "";



var throw = function(){
	return Math.floor(6*math.random())+1;
}


function player(turn){
	this.roll=0;
	this.playerScore=0;
	this.totalScore=0;
	this.turn= turn;
	this.playerName;
}


