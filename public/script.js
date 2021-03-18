document.getElementById("btn").addEventListener("click", inputplayers);
document.getElementById("btn").addEventListener("click", calculate);

function inputplayers(){

let team1 = document.getElementById("players1").value;
let team2 = document.getElementById("players2").value;

var arr1 = team1.split('\n');
var arr2 = team2.split('\n');

if (arr1.length==11){
arr1.forEach(element => console.log(element));
}

else{
	console.log("Not enough/more players in 1st team")
}

if (arr2.length==11){
arr2.forEach(element => console.log(element));
}

else{
	console.log("Not enough/more players in 2nd team")
}

}

function calculate(){

let score1 = document.getElementById("score1").value;
let score2 = document.getElementById("score2").value;

score1 = parseInt(score1);
score2 = parseInt(score2);


let result = score1 + score2;


if (result<=7){	
	if(score1<score2){
		res1.innerHTML="Team 2 won";
	}

	else if(score1==score2){
		res1.innerHTML="Draw";
	}

	else{
		res1.innerHTML="Team 1 won";
	}
	
	if(score1==1){
	sl1.innerHTML="Team 1 scored: 1";
}

else if (score1==2){
	random = Math.floor(Math.random() * 2);

	if(random==0){
		sl1.innerHTML="Team 1 scored: 1,1";
	}

	else{
		sl1.innerHTML="Team 1 scored: 2";
	}
}

else if (score1==3){
	random = Math.floor(Math.random() * 3);

	
	if(random==0){
		sl1.innerHTML="Team 1 scored: 1,1,1";
	}
	
	else if(random==1){
		sl1.innerHTML="Team 1 scored: 1,2";
	}

	else{
		sl1.innerHTML="Team 1 scored: 3";
	}
}

else if (score1==4){
	random = Math.floor(Math.random() * 4);
	
	if(random==0){
		sl1.innerHTML="Team 1 scored: 1,1,1,1";
	}
	
	else if(random==1){
		sl1.innerHTML="Team 1 scored: 1,1,2";
	}
	
	else if(random==2){
		sl1.innerHTML="Team 1 scored: 1,3";
	}

	else{
		sl1.innerHTML="Team 1 scored: 4";
	}
}

else if (score1==5){
	random = Math.floor(Math.random() * 5);
	
	if(random==0){
		sl1.innerHTML="Team 1 scored: 1,1,1,1,1";
	}
	
	else if(random==1){
		sl1.innerHTML="Team 1 scored: 1,1,1,2";
	}
	
	else if(random==2){
		sl1.innerHTML="Team 1 scored: 1,1,3";
	}
	
	else if(random==3){
		sl1.innerHTML="Team 1 scored: 1,4";
	}

	else{
		sl1.innerHTML="Team 1 scored: 5";
	}
}

else if (score1==6){
	random = Math.floor(Math.random() * 7);
	
	if(random==0){
		sl1.innerHTML="Team 1 scored: 1,1,1,1,1,1";
	}
	
	else if(random==1){
		sl1.innerHTML="Team 1 scored: 2,2,2";
	}
	
	else if(random==2){
		sl1.innerHTML="Team 1 scored: 1,1,2,2";
	}
	
	else if(random==3){
		sl1.innerHTML="Team 1 scored: 1,1,2,1,1";
	}
	
	else if(random==4){
		sl1.innerHTML="Team 1 scored: 2,4";
	}
	
	else if(random==5){
		sl1.innerHTML="Team 1 scored: 1,4,1";
	}
	
	else if(random==6){
		sl1.innerHTML="Team 1 scored: 1,5";
	}	

	else{
		sl1.innerHTML="Team 1 scored: 6";
	}
}

else if (score1==7){
	random = Math.floor(Math.random() * 8);
	
	if(random==0){
		sl1.innerHTML="Team 1 scored: 1,1,1,1,1,1,1";
	}
	
	else if(random==1){
		sl1.innerHTML="Team 1 scored: 2,2,2,1";
	}
	
	else if(random==2){
		sl1.innerHTML="Team 1 scored: 1,1,2,2,1";
	}
	
	else if(random==3){
		sl1.innerHTML="Team 1 scored: 1,1,2,1,1,1";
	}
	
	else if(random==4){
		sl1.innerHTML="Team 1 scored: 2,4,1";
	}
	
	else if(random==5){
		sl1.innerHTML="Team 1 scored: 1,4,1,1";
	}
	
	else if(random==6){
		sl1.innerHTML="Team 1 scored: 1,5,1";
	}	
	
	else if(random==7){
		sl1.innerHTML="Team 1 scored: 5,2";
	}	

	else{
		sl1.innerHTML="Team 1 scored: 7";
	}
}


else{
	sl1.innerHTML="Team 1 not scored";
}

if(score2==1){
	sl2.innerHTML="Team 2 scored: 1";
}

else if (score2==2){
	random = Math.floor(Math.random() * 2);
	
	if(random==0){
		sl2.innerHTML="Team 2 scored: 1,1";
	}

	else{
		sl2.innerHTML="Team 2 scored: 2";
	}
}

else if (score2==3){
	random = Math.floor(Math.random() * 3);
	
	if(random==0){
		sl2.innerHTML="Team 2 scored: 1,1,1";
	}
	
	else if(random==1){
		sl2.innerHTML="Team 2 scored: 1,2";
	}

	else{
		sl2.innerHTML="Team 2 scored: 3";
	}
}

else if (score2==4){
	random = Math.floor(Math.random() * 4);
	
	if(random==0){
		sl2.innerHTML="Team 2 scored: 1,1,1,1";
	}
	
	else if(random==1){
		sl2.innerHTML="Team 2 scored: 1,1,2";
	}
	
	else if(random==2){
		sl2.innerHTML="Team 2 scored: 1,3";
	}

	else{
		sl2.innerHTML="Team 2 scored: 4";
	}
}

else if (score2==5){
	random = Math.floor(Math.random() * 5);
	
	if(random==0){
		sl2.innerHTML="Team 2 scored: 1,1,1,1,1";
	}
	
	else if(random==1){
		sl2.innerHTML="Team 2 scored: 1,1,1,2";
	}
	
	else if(random==2){
		sl2.innerHTML="Team 2 scored: 1,1,3";
	}
	
	else if(random==3){
		sl2.innerHTML="Team 2 scored: 1,4";
	}

	else{
		sl2.innerHTML="Team 2 scored: 5";
	}
}

else if (score2==6){
	random = Math.floor(Math.random() * 7);
	
	if(random==0){
		sl2.innerHTML="Team 2 scored: 1,1,1,1,1,1";
	}
	
	else if(random==1){
		sl2.innerHTML="Team 2 scored: 2,2,2";
	}
	
	else if(random==2){
		sl2.innerHTML="Team 2 scored: 1,1,2,2";
	}
	
	else if(random==3){
		sl2.innerHTML="Team 2 scored: 1,1,2,1,1";
	}
	
	else if(random==4){
		sl2.innerHTML="Team 2 scored: 2,4";
	}
	
	else if(random==5){
		sl2.innerHTML="Team 2 scored: 1,4,1";
	}
	
	else if(random==6){
		sl2.innerHTML="Team 2 scored: 1,5";
	}	

	else{
		sl2.innerHTML="Team 2 scored: 6";
	}
}

else if (score2==7){
	random = Math.floor(Math.random() * 8);
	
	if(random==0){
		sl2.innerHTML="Team 2 scored: 1,1,1,1,1,1,1";
	}
	
	else if(random==1){
		sl2.innerHTML="Team 2 scored: 2,2,2,1";
	}
	
	else if(random==2){
		sl2.innerHTML="Team 2 scored: 1,1,2,2,1";
	}
	
	else if(random==3){
		sl2.innerHTML="Team 2 scored: 1,1,2,1,1,1";
	}
	
	else if(random==4){
		sl2.innerHTML="Team 2 scored: 2,4,1";
	}
	
	else if(random==5){
		sl2.innerHTML="Team 2 scored: 1,4,1,1";
	}
	
	else if(random==6){
		sl2.innerHTML="Team 2 scored: 1,5,1";
	}	
	
	else if(random==7){
		sl2.innerHTML="Team 2 scored: 5,2";
	}	

	else{
		sl2.innerHTML="Team 2 scored: 7";
	}
}


else{
	sl2.innerHTML="Team 2 not scored";
}
	
	
	res2.innerHTML= score1 + "-" + score2;
}

else{
	res1.innerHTML="Match can not be done, because goals are too many or have not been started";
}


}
