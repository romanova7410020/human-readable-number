module.exports = function toReadable(number) {
  const primenumbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  const firstTen = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    '',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const hundreds = [
    '',
    'one hundred',
    'two hundred',
    'three hundred',
    'four hundred',
    'five hundred',
    'six hundred',
    'seven hundred',
    'eight hundred',
    'nine hundred',
  ];

  if (number === 0) return primenumbers[0];
  const result = [];
  const a = Math.floor(number / 100);
  const b = Math.floor((number % 100) / 10);
  const c = Math.floor(number % 10);

  if (a > 0) {
    result.push(hundreds[a]);
  }

  if (b === 1) {
    result.push(firstTen[c]);
  } else {
    if (b > 1) {
      result.push(tens[b]);
    }
    if (c > 0) {
      result.push(primenumbers[c]);
    }
  }
  return result.join(' ');
};
