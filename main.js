let bottles = parseInt(prompt("how many beers"))
let counter = 1
for (var i = bottles - 1; i >= 0; i--) {
	console.log(bottles + " bottles of beer on the wall");
	console.log(bottles + " of beer");
	bottles=bottles-counter;
	console.log("take "+ counter +" down pass 'em around");
	counter++ 
	console.log(bottles + " bottles of beer on the wall");
	if(counter >= bottles){
		counter=bottles
		console.log(bottles + " bottles of beer on the wall");
		console.log(bottles + " of beer");
		console.log("take "+ counter +" down pass 'em around");
		console.log("You are very wasted");
		break
	}

}
