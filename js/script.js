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


//check for one
player.firstRoll =  function(){
	if (this.roll = 1) {
		this.playerScore=0;
		alert("Sorry" this.playerName + ", you rolled a 1! Your turn is over")
	} else{
		this.playerScore=this.roll;
	}
}



//hold
player.hold=function(){
	this.totalScore+=playerScore;
	this.totalScore =0;
	alert("Sorry" this.playerName + ",Your turn is over")


}



//check for winner
player.checkWinner = function(){
	if(this.totalScore>=100){
		alert(this.playerName +"Hurray, you are the winner")
	}
}




//user interface

