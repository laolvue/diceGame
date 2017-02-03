"use strict";

function displayRules(){
	alert("RULES OF THE GAME:\nPlayers have to predict whether the dice will roll a high or low number, and awarded 1 point if they guess correctly. For example:\n\nAn 8 sided dice will have\nlow numbers: 1,2,3,4\nhigh numbers: 5,6,7,8\n\nThe game ends when someone reaches 3 points.");
	chooseOptions();
}
	
function chooseOptions(){
	var diceChoice=chooseDice();
	var numberOfAi=choosePlayers();
	startGame(diceChoice,numberOfAi)
}

function chooseDice(){
	var diceChoice=prompt("Which type of dice would you like to play with:\n\nType 1 for: 4 sided\nType 2 for: 6 sided\nType 3 for: 8 sided\nType 4 for: 10 sided\nType 5 for: 12 sided\nType 6 for: 20 sided");
	return diceChoice;
}

function choosePlayers(){
	var numberOfAi =prompt("How many AI do you want to play against: ");
	
	for(var i=0; i<numberOfAi; i++){
		aiPoints[i]=0;
	}
	return(numberOfAi);
}

function startGame(diceChoice,numberOfAi){
	var i;
	var aiChoice= new Array;
	var points=0;
	do{
		var userChoice=promptUser();
		var aiChoice=promptAi(numberOfAi)

		randomizeNumber(diceChoice,userChoice,aiChoice);
		for(i=0; i<aiChoice.length;i++){
			if(userPoints<aiPoints[i] && aiPoints[i]==3){
				alert("Game Over! AI "+(i+1)+" wins!");
				points=1;
				break;
			}
			else if(userPoints==3 && userPoints==aiPoints[i]){
				alert("It's a tie!");
				points=1;
				break;
			}
			else if(userPoints==3 && userPoints>aiPoints[i] && i==(aiChoice.length-1)){
				alert("You win!");
				points=1;
				break;
			}
		}
	}while(points==0);
}

function promptUser(){
	var userChoice=prompt("Place your bet!\n\nEnter 1: Low   2: High\n");
	if(userChoice==1){
		console.log("\nYou chose: Low");
	}
	else
		console.log("\nYou chose: High");
	return userChoice;
}

function promptAi(numberOfAi){
	var i,j;
	var aiChoice = new Array;
	for(i=0; i<numberOfAi; i++)
	{
		aiChoice[i]= (Math.random()*(2 - 1) + 1).toFixed(0);
		
	}
	
	for(j=0; j<numberOfAi; j++)
	{
		if(aiChoice[j]==1){
			console.log("AI "+(j+1)+" chooses: Low");
		}
		else{
			console.log("AI "+(j+1)+" chooses: High");
		}
	}
	return aiChoice;
}


function randomizeNumber(diceChoice,userChoice, aiChoice){
	var sides, number,i;
	if (diceChoice==1){
	number = (Math.random()*(4 - 1) + 1).toFixed(0);
	sides=4;
	}
	else if(diceChoice==2){
		
	number = (Math.random()*(6 - 1) + 1).toFixed(0);
	sides=6;
	}
	else if(diceChoice==3){
	number = (Math.random()*(8 - 1) + 1).toFixed(0);
	sides=8;
	}
	else if(diceChoice==4){
	number = (Math.random()*(10 - 1) + 1).toFixed(0);
	sides=10;
	}
	else if(diceChoice==5){
	number = (Math.random()*(12 - 1) + 1).toFixed(0);
	sides=12; 
	}
	else if(diceChoice==6){
	number = (Math.random()*(20 - 1) + 1).toFixed(0);
	sides=20;
	}
	checkResults(number,sides,userChoice,aiChoice);
}

function checkResults(roll,sides,userChoice,aiChoice){
	console.log("Dice rolled: "+roll+"\n\n");
	if(roll>(sides/2)){
		roll=2;
	}
	else if(roll<=(sides/2)){
		roll=1;
	}
	playerResult(roll,userChoice);
	aiResult(roll,aiChoice);
}

function playerResult(roll,userChoice){
	if(roll==userChoice)
	{
		userPoints++;
		console.log("you win! Score: "+userPoints);
	}
	else if(roll!=userChoice)
	{
		console.log("you lose! Score: "+userPoints);
	}
}

function aiResult(roll,aiChoice){
	var i;
	for(i=0; i<aiChoice.length;i++)
	{	
		if(roll==aiChoice[i])
		{
			aiPoints[i]=aiPoints[i]+1;
			console.log("AI "+(i+1)+" wins! Score: "+aiPoints[i]);
		}
		else if(roll!=aiChoice)
		{
			console.log("AI "+(i+1)+" lose! Score: "+aiPoints[i]);
		}
	}
}

var userPoints=0;
var aiPoints = new Array;
displayRules();