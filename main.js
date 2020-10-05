function printChars(str) {
  let i = 0;
  while (i < str.length) {
    console.log(str[i]);
    i = i + 1;
  }
}

// printChars('Hello.')
// printChars('Oh hi.')

function printEveryThirdChar(str) {
  let i = 2;
  while ( i < str.length) {
    console.log(str[i]);

    i = i + 3;
  }
}

// printEveryThirdChar('I am the alfalfa and the omelette.');

function printCharsBackwards(str) {
  let i = str.length - 1;
  while (i >= 0) {
    console.log(str[i]);
    i = i - 1;
  }
}

// printCharsBackwards('Hello.')
// printCharsBackwards('Oh hi.')

function vowelsOnly(str) {
  const vowels = 'aeiou';
  let i = 0;
  while (i < str.length) {
    if (vowels.includes(str[i])) {
      console.log(str[i]);
    }

    // or, without the includes:
    // if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
    //   console.log(str[i]);
    // }

    i = i + 1;
  }
}

// const str = 'Regular expressions are for term 2.';
// vowelsOnly(str);

function printAfter(start, str) {
  let i = start;
  while ( i < str.length) {
    console.log(str[i]);
    i = i + 1;
  }
}

// printAfter(1, 'slaughter')
// printAfter(7, "I don't love you!")

function indexOfU(str) {
  let i = 0;
  while ( i < str.length) {
    i = i + 1;
    if (str[i] === 'u') {
      console.log(i);
    }
  }
}

// indexOfU('You picked the wrong house, bub.');

function first5VowelsOnly(str) {
  const vowels = 'aeiou';
  let vowelCount = 0;
  let i = 0;
  while ( i < str.length) {
    if (vowels.includes(str[i]) && vowelCount < 5) {
      vowelCount++;
      console.log(str[i]);
    }

    i = i + 1;
  }
}

const str2 = 'Regular expressions are for term 2.';

// first5VowelsOnly(str2);
// first5VowelsOnly('hello');


function firstIndexOfU(str) {
  let i = 0;
  while ( i < str.length) {
    i = i + 1;
    if (str[i] === 'u') {
      console.log(i);
      return;
    }
  }
}

// firstIndexOfU('You picked the wrong house, bub.');
// firstIndexOfU('This is unheard of!');

function printFirstFourAfter(start, str) {
  let count = 0;
  let i = start;
  while ( i < str.length) {
    if (count < 4) {
      console.log(str[i]);
      count++;
    }

    i = i + 1;
  }
}

// printFirstFourAfter(4, `Oh hi, I didn't see you there. Welcome.`)
// printFirstFourAfter(36, `Oh hi, I didn't see you there. Welcome.`)


function firstIndexOfU2(str) {
  let found = false;
  let i = 0;
  while ( i < str.length) {
    i = i + 1;
    if (str[i] === 'u' && found === false) {
      console.log(i);
      found = true;
    }
  }

  if (found === false) {
    console.log('-1')
  }
}

// firstIndexOfU2('You picked the wrong house, bub.');
// firstIndexOfU2(`I'm Canadian, eh?`);
