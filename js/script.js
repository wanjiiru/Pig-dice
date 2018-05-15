//business logic
var player1 = "";
var player2 = "";

player.prototype.rollone = function(){
  if (this.roll === 1) {
  this.playerScore = 0;
  alert("Sorry " + this.playerName + ", you rolled a 1! Next Player!")
  } else {
  this.playerScore += this.roll;
  }
}


function player(turn){
  this.roll=0;
  this.totalScore=0;
  this.turn= turn;
  this.playerName;
	this.playerScore=0;	
}


var throwd = function(){
  return Math.floor(6*Math.random())+1;
}

//reset values
function reset() {
  player1.newGame();
  player2.newGame();
  $("#total-score-1").empty();
  $("#die-roll-1").empty();
  $("#round-total-2").empty();
  $("#total-score-2").empty();
  $("#die-roll-2").empty();
}


// hold
player.prototype.hold = function () {
  this.totalScore += this.playerScore;
  this.playerScore = 0;
  alert(this.playerName + ", your turn is over")


}



//check for winner
player.checkWinner = function(){
	if(this.totalScore>=100){
		alert(this.playerName +"Hurray, you are the winner")
	}
}







//user interface
$(document).ready(function() {

  $("button#start").click(function(event){
    player1 = new player(true);
    player2 =  new player(false);
    $(".player-console").show();
    $(".start-menu").hide();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1.playerName=player1Name;
    player2.playerName=player2Name;

  });
  $("button#new-game").click(function(event){
    $(".player-console").hide();
    reset();
    $(".start-menu").show();
  });

  $("button#player1-roll").click(function(event){
    player1.roll = throwd();
    $("#die-roll-1").text(player1.roll);
    player1.rollone();
    $("#round-total-1").text(player1.playerScore);
  });

  $("button#player2-roll").click(function(event){
    player2.roll = throwd();
    $("#die-roll-2").text(player2.roll);
    player2.rollone();
    $("#round-total-2").text(player2.playerScore);
  });

  $("button#player1-hold").click(function(event){
    player1.hold();
    $("#total-score-1").text(player1.totalscore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
    player1.winnerCheck();
  });

  $("button#player2-hold").click(function(event){
    player2.hold();
    $("#total-score-2").text(player2.totalscore);
    $("#round-total-2").empty();
    $("#die-roll-2").empty();
    player2.winnerCheck();
  });

});

