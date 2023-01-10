var player1Score = 0;
var player2Score = 0;

function resetScore(){
    player1Score = 0;
    player2Score = 0;
    document.getElementById("player1Score").innerHTML = "score: " + player1Score;
    document.getElementById("player2Score").innerHTML = "score: " + player2Score;

}
function rollDice(){

    var player1Roll = Math.floor(Math.random() * 6) + 1;
    var player2Roll = Math.floor(Math.random() * 6) + 1;

    
    console.log(player1Roll);
    console.log(player2Roll);

    switch(player1Roll){
        case 1:
            document.getElementById("player1").src="/Dicee Challenge - Starting Files/images/dice1.png";
        break;
        case 2:
            document.getElementById("player1").src="/Dicee Challenge - Starting Files/images/dice2.png";
    
        break;
        case 3:
            document.getElementById("player1").src="/Dicee Challenge - Starting Files/images/dice3.png";
    
        break;
        case 4:
            document.getElementById("player1").src="/Dicee Challenge - Starting Files/images/dice4.png";
        break;    
    
        case 5:
            document.getElementById("player1").src="/Dicee Challenge - Starting Files/images/dice5.png";
        break;    
        case 6:
            document.getElementById("player1").src="/Dicee Challenge - Starting Files/images/dice6.png";
        break;
    
    }

    switch(player2Roll){
        case 1:
            document.getElementById("player2").src="/Dicee Challenge - Starting Files/images/dice1.png";
        break;
        case 2:
            document.getElementById("player2").src="/Dicee Challenge - Starting Files/images/dice2.png";
    
        break;
        case 3:
            document.getElementById("player2").src="/Dicee Challenge - Starting Files/images/dice3.png";
    
        break;
        case 4:
            document.getElementById("player2").src="/Dicee Challenge - Starting Files/images/dice4.png";
        break;    
    
        case 5:
            document.getElementById("player2").src="/Dicee Challenge - Starting Files/images/dice5.png";
        break;    
        case 6:
            document.getElementById("player2").src="/Dicee Challenge - Starting Files/images/dice6.png";
        break;
    
    }

    if(player1Roll > player2Roll){
        document.querySelector(".winner").innerHTML = "Player 1 Wins";
        player1Score++;
        document.getElementById("player1Score").innerHTML = "score: " + player1Score;

    } 
    else if(player2Roll > player1Roll){
        document.querySelector(".winner").innerHTML = "Player 2 Wins";
        player2Score++;
        document.getElementById("player2Score").innerHTML = "score: " + player2Score;

    }
    else{
        document.querySelector(".winner").innerHTML = "draw";
    }
}

