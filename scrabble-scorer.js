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
     console.log (`0-${simpleScore.name}: ${simpleScore.description}\n1-${vowelBonusScore.name}: ${vowelBonusScore.description}\n2-${scrabbleScore.name}: ${scrabbleScore.description}`)
  //  console.log ("0 - Simple: One point per Charachter\n1 - VouwelBonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system");
   userSelection = input.question("Enter 0, 1, or 2:")
   return userSelection
 
   }
  // console.log (oldScrabbleScorer(userWord));
};

let simpleScore = {
  name:  "Simple Score",
  description: "Each letter is worth 1 point.",
  scoringFunction:  function (word){
   let points = word.length
   console.log (`algorithm name: Simple Score\nScorer Function reult: ${points}`)
    }
};

let vowelBonusScore = {
  name:  "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction:  function (word){
    word = word.toLowerCase()
    let points = 0
    const vowel = ['a', 'e', 'i', 'o', 'u'];
      for (let i =0; i < word.length; i++){
        if (vowel.includes(word[i])){
          points += 3
      }else{
        points += 1
    };
  };
console.log(`algorithm name: Bounus Vowels\nScorer Function reult: ${points}`)
  }
};

let scrabbleScore = {
  name:  "Scrabble",
  description: "The traditional scoring algorithm.",
  scoringFunction:  function (word){
	  word = word.toUpperCase();
	  let letterPoints = 0;
  // console.log (newPointStructure)
      for (let i = 0; i < word.length; i++) {
      // word[ {
		  // letterPoints += word[i]
        const letter = word[i];
      // console.log(`The value of ${letter} is ${newPointStructure[letter]}`);
      letterPoints += newPointStructure[letter]
  };
     console.log (`algorithm name: Scrabble\nScorer Function reult: ${letterPoints}`)
  }
};

let scoringAlgorithms = [simpleScore, vowelBonusScore, scrabbleScore]



function scorerPrompt(userInputed,userWord) {
  if (Number(userInputed) === 0) { 
     simpleScore.scoringFunction(userWord)
   }else if (Number(userInputed) === 1){
     vowelBonusScore.scoringFunction(userWord)
   }else {
     scrabbleScore.scoringFunction(userWord)
   };
};

function transform(letterKey, userWord) {
  // console.log(letterKey)
  let newList = {}
  for (let name in letterKey){
    let structure = letterKey[name]
  // console.log (structure)
    for (let i = 0; i < structure.length; i++){
      newList[structure[i]] = Number(name)
    };
  };
  // console.log(newList)
return newList
};

let newPointStructure = transform(oldPointStructure);


function runProgram() {
   console.clear();
   //initialPrompt();
   let userSelection=initialPrompt()
   let userWord = ""
   userWord = input.question("Let's play some scrabble! Enter a word:"); 

   scorerPrompt(userSelection, userWord);
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

