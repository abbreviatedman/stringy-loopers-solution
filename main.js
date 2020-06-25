function challengeBanner(n) {
  console.log(`### Challenge ${n} ACCEPTED.`);
}

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

challengeBanner(1);

const str = 'Regular expressions are for term 2.';
vowelsOnly(str);


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

challengeBanner(2)
const str2 = 'Regular expressions are for term 2.';

first5VowelsOnly(str);
first5VowelsOnly('hello');


function printEveryThirdChar(str) {
  let i = 2;
  while ( i < str.length) {
    console.log(str[i]);

    i = i + 3;
  }
}

challengeBanner(3);
printEveryThirdChar('I am the alfalfa and the omelette.');


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

challengeBanner(4);
printFirstFourAfter(4, `Oh hi, I didn't see you there. Welcome.`)
printFirstFourAfter(36, `Oh hi, I didn't see you there. Welcome.`)


function indexOfU(str) {
  let i = 0;
  while ( i < str.length) {
    i = i + 1;
    if (str[i] === 'u') {
      console.log(i);
    }
  }
}

challengeBanner(5);
indexOfU('You picked the wrong house, bub.');


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

challengeBanner(6);
firstIndexOfU('You picked the wrong house, bub.');


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

challengeBanner(7);
firstIndexOfU2('You picked the wrong house, bub.');
firstIndexOfU2(`I'm Canadian, eh?`);
