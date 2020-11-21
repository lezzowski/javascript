var convertTemperature = (unitFrom,degree, unitTo) => {
    var message = "Convertito"
    if (unitFrom !== unitTo) {
        if(unitFrom === "K"){
            if (unitTo === "F") {
                degree = degree * (9/5) - 459.67
            }else if(unitTo === "C"){
                degree = degree - 273.15
            }else{
                message= "Non fare il simpatico"
            }
        }else if (unitFrom === "F") {
            if(unitTo === "C"){
                degree = (degree - 32) * (5/9)
            }else if(unitTo === "K"){
                degree = degree * (5/9) + 255.37
            }else{
                message = "Non fare il simpatico"
            }
        }else if (unitFrom === "C") {
            if(unitTo === "F"){
                degree = degree * (9/5) + 32
            }else if(unitTo === "K"){
                degree = degree + 273.15
            }else{
                message = "Non fare il simpatico"
            }
        }else{
            message = "Non fare il simpatico"
        }
    }
    
    return {
        unitFrom: unitFrom,
        degree: degree,
        unitTo: unitTo,
        message: message
    }
}

console.log(convertTemperature("C", 6, "F"))
console.log(convertTemperature("F", 250,"L"))
console.log(convertTemperature("F", 250,"C"))
console.log(convertTemperature("F", 250,"K"))