const exchangeRate = require("./values.json");

const convertMoney = (originalValue, money, convertedValue) => {
  var message = "Converted!"
  var originalMoney = money

  if (originalValue !== convertedValue) {
    if (money > 0) {
      if (originalValue === "€") {
        if (convertedValue === "$") {
          money = money / exchangeRate.values[0].taxConversion
        } else if (convertedValue === "£") {
          money = money / exchangeRate.values[1].taxConversion
        } else if (convertedValue === "¥") {
          money = money / exchangeRate.values[2].taxConversion
        } else {
          return { message: "Not valid!" };
        }
      } else if (originalValue === "$") {
        if (convertedValue === "€") {
          money = money / exchangeRate.values[3].taxConversion
        } else if (convertedValue === "£") {
          money = money / exchangeRate.values[4].taxConversion
        } else if (convertedValue === "¥") {
          money = money / exchangeRate.values[5].taxConversion
        } else {
          return { message: "Not valid!" }
        }
      } else if (originalValue === "£") {
        if (convertedValue === "€") {
          money = money / exchangeRate.values[6].taxConversion
        } else if (convertedValue === "$") {
          money = money / exchangeRate.values[7].taxConversion
        } else if (convertedValue === "¥") {
          money = money / exchangeRate.values[8].taxConversion
        } else {
          return { message: "Not valid!" }
        }
      } else if (originalValue === "¥") {
        if (convertedValue === "€") {
          money = money / exchangeRate.values[9].taxConversion
        } else if (convertedValue === "£") {
          money = money / exchangeRate.values[10].taxConversion
        } else if (convertedValue === "$") {
          money = money / exchangeRate.values[11].taxConversion
        } else {
          return { message: "Not Valid!" }
        }
      }
    } else {
      return { message: "Not enough money!" }
    }
  }

  return {
    originalValue: originalValue + originalMoney,
    amountConverted: convertedValue + Number(money.toFixed(2)),
    //convertedValue: convertedValue,
    message: message,
  }
}

console.log(convertMoney("€", 0, "$"))
console.log(convertMoney("€", 1, "£"))
console.log(convertMoney("€", 1, "¥"))
//Wrong Conv//
console.log(convertMoney("€", 1, "L"))

console.log(convertMoney("$", 1, "€"))
console.log(convertMoney("$", 1, "£"))
console.log(convertMoney("$", 1, "¥"))

console.log(convertMoney("£", 1, "€"))
console.log(convertMoney("£", 1, "$"))
console.log(convertMoney("£", 1, "¥"))

console.log(convertMoney("¥", 10000, "€"))
console.log(convertMoney("¥", 10000, "£"))
console.log(convertMoney("¥", 10000, "$"))
