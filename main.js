// # Setup
// For this exercise, we don't need to run npm test. We will only use the command node main.js in the terminal to see the results of our functions.


// 0. Once again, write a function that accepts a number and prints out a banner with the words "Challenge" and the number in it. Use string interpolation if you want! **Call it before calling each function. Don't call it again if you need to print twice to test a function.**

function challengeBanner(n) {
  console.log(`### Challenge ${n} ACCEPTED.`);
}

challengeBanner(1);

// 1. Write a function that prints out only the vowels from a given string. Do not use regular expressions ("regex"). Now call it with "Regular expressions are for term 2.". You should see an "e" printed, followed by a "u", followed by an "a", and so on.

function vowelsOnly(str) {
  const vowels = 'aeiou';

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i]) /* letter is a vowel */) {
      console.log(str[i]);
    }
  } 
}

const str = 'Regular expressions are for term 2.';

vowelsOnly(str);

// 2. Write a function that prints out the first 5 vowels from the given string. Continue to not use regexes. Now call it with "Regular expressions are for term 2.". You should see an "e" printed, followed by a "u", followed by an "a", followed by an "e", followed by another "e", and then nothing else. Now call it again with "Hello!" You should see only an "e" and an "o" print.

challengeBanner(2)

function first5VowelsOnly(str) {
  const vowels = 'aeiou';
  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i]) && vowelCount < 5) {
      vowelCount++;
      console.log(str[i]);
    }
  } 
}

const str2 = 'Regular expressions are for term 2.';

first5VowelsOnly(str);
first5VowelsOnly('hello');


// 3. Write a function that prints out every third character, _without_ examining every character. In other words, you may _not_ increment your index by one and decide whether to print based on the result of a modulus operation on that index. (A standard solution for this.). Now call it with "I am the alfalfa and the omelette." You should see "a", followed by "t", followed by a space, and so on. An "e" should be the last thing printed, with no `undefined` values showing up.

challengeBanner(3);

function printEveryThirdChar(str) {
  for (let i = 2; i < str.length; i += 3) {
    console.log(str[i]);
  }
}

printEveryThirdChar('I am the alfalfa and the omelette.');


// 4. Write a function that prints out the first four characters after the given index in the given string, or, if there are fewer characters remaining from, prints only the remaining ones. Now call it with 'Oh hi, I didn't see you there. Welcome.' and `4` as your parameters. You should see 'i', followed by ',', followed by a space, followed by an 'I'. Now call it again with 'Oh hi, I didn't see you there. Welcome.' and `36` as your parameters. You should 'm', 'e', and '.' printed, and no fourth printing.
challengeBanner(4);

function printFirstFourAfter(start, str) {
  let count = 0;
  for (let i = start; i < str.length; i++) {
    if (count < 4) {
      console.log(str[i]);
      count++;
    }
  }
}


printFirstFourAfter(36, `Oh hi, I didn't see you there. Welcome.`)

// 5. Write a function that prints out the index of every `u` it finds in the given string. Do not use `indexOf`. Now call it with `'You picked the wrong house, bub.'`. You should see `2`, `23`, and `29` printed out. 

challengeBanner(5);

function indexOfU(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'u') {
      console.log(i);
    }
  }
}

indexOfU('You picked the wrong house, bub.');

//  6. Write a function that prints out the first index of the letter `u` in the given string. Do not use `indexOf`. Now call it with `'You picked the wrong house, bub.'` You should see the number `2` printed, and only that.
challengeBanner(6);


function firstIndexOfU(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'u') {
      console.log(i);
      return;
    }
  }
}

firstIndexOfU('You picked the wrong house, bub.');


// 7. Write a function that prints out the first index of the letter `u` in the given string, with a `-1` printed if it doesn't find it. Do not use `indexOf`. Now call it with `'You picked the wrong house, bub.'` You should see the number `2` printed, and only that. Now call it with `"I'm Canadian."` You should see `-1` print out.


challengeBanner(7);


function firstIndexOfU2(str) {
  for (let i = 0; i < str.length; i++) {
    let found = false;
    if (str[i] === 'u' && found === false) {
      console.log(i);
      found = true;
    }
  }

  if (found === false) {
    console.log('-1')
  }
}

firstIndexOfU2(`I'm Canadian, eh?`);
