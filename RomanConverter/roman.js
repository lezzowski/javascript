var decToRom = (num) => {
  var romanNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  arabic = num;
  result = "";

  for (var key of Object.keys(romanNum)) {
    var value = romanNum[key];
    var division = Math.floor(num / value);

    result += String(key).repeat(division);
    num -= value * division;
  }

  return { arabic: Number(arabic), roman: String(result) };
};

console.log(decToRom(550));
