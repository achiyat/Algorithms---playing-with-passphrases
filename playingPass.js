// Strategy Stages:
// "I LOVE YOU!!!" => Input
// { A: 'B', B: 'C', ..., Z: 'A', 0: '9', 1: '8', ..., 9: '0' } => Create a dictionary
// ["J", " ", "M", "n", "P", "o", "Y", "p", "V", "w", "!!!"] => Transform the Input by Split and Map
// ["!", "!", "!", "w", "V", "p", "Y", "o", "P", "n", "M", " ", "J"] => reverse
// "!!!wVpYoPnM J" => join

const generateCharDict = (shift) => {
  const CHAR_DICT = {};
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";

  abc.split("").map((char, idx) => {
    CHAR_DICT[char] = abc[(idx + shift) % abc.length];
  });

  digits.split("").map((char) => {
    CHAR_DICT[char] = digits[9 - char];
  });

  return CHAR_DICT;
};

const playPass = (pass, shift) => {
  const CHAR_DICT = generateCharDict(shift);

  return pass
    .split("")
    .map((char, idx) => {
      c = CHAR_DICT[char] ? CHAR_DICT[char] : char;
      return idx % 2 === 0 ? c : c.toLowerCase();
    })
    .reverse()
    .join("");
};

console.log(playPass("I LOVE YOU!!!", 1)); // => "!!!vPz fWpM J"
console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2)); // => "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO"
