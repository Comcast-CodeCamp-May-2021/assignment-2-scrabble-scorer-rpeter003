// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let userSelection = "";
   console.log ("Let's play some Scrabble!");
   for (let i = 0; 1 < scoringAlgorithms.length; i++) {
     console.log (`0-${simpleS.name}: ${simpleS.description}\n1-${vowelBonus.name}: ${vowelBonus.description}\n2-${scrabbleS.name}: ${scrabbleS.description}`)
  //  console.log ("0 - Simple: One point per Charachter\n1 - VouwelBonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system");
   userSelection = input.question("Enter 0, 1, or 2:")
   return userSelection

   
   }
  // console.log (oldScrabbleScorer(userWord));
};

function simpleScore (word){
   let points = word.length
console.log (`algorithm name: Simple Score\nscorerFunction reult: ${points}`) 
}

function vowelBonusScore(word){
  word = word.toLowerCase()
  let points = 0
  const vowel = ['a', 'e', 'i', 'o', 'u'];
   for (let i =0; i < word.length; i++){
    if (vowel.includes(word[i])){
      points += 3
    }else{
      points += 1
    }
  } 
console.log(`algorithm name: Bounus Vowels\nscorerFunction reult: ${points}`)
  
};

function scrabbleScore(word){
	word = word.toUpperCase();
	let letterPoints = 0;
  // console.log (newPointStructure)
    for (let i = 0; i < word.length; i++) {
      // word[ {
		  // letterPoints += word[i]
      const letter = word[i];
      // console.log(`The value of ${letter} is ${newPointStructure[letter]}`);
      letterPoints += newPointStructure[letter]
  }
	console.log (`algorithm name: Scrabble\nscorerFunction reult: ${letterPoints}`)
}

let simpleS = {
  name:  "Simple Score",
  description: "Each letter is worth 1 point.",
  scoringFunction: "A function with a parameter for user input that returns a score."
};
let vowelBonus = {
  name:  "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction: "A function that returns a score based on the number of vowels and consonants."
};
let scrabbleS = {
  name:  "Scrabble",
  description: "The traditional scoring algorithm.",
  scoringFunction: "Uses the oldScrabbleScorer() function to determine the score for a given word."
};

const scoringAlgorithms = [simpleS, vowelBonus, scrabbleS]



function scorerPrompt(userInputed,userWord) {
  if (Number(userInputed) === 0) {
     console.log (simpleScore(userWord))
   }else if (Number(userInputed) === 1){
     console.log (vowelBonusScore(userWord))
   }else {
     console.log (scrabbleScore(userWord))
   }
}

function transform(letterKey, userWord) {
  // console.log(letterKey)
  let newList = {}
  for (let name in letterKey){
    let structure = letterKey[name]
  // console.log (structure)
    for (let i = 0; i < structure.length; i++){
      newList[structure[i]] = Number(name)
    }
  }
  // console.log(newList)
return newList
}

let newPointStructure = transform(oldPointStructure)


function runProgram() {
   console.clear();
   //initialPrompt();
   let userSelection=initialPrompt()
   let userWord = ""
   userWord = input.question("Let's play some scrabble! Enter a word:"); 

   scorerPrompt(userSelection, userWord)
   }



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

