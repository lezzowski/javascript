var actualDate = () => {
  var date = new Date();
  return {actualdate: date.getDate() + "/" + (date.getMonth()+ 1) + "/" + date.getFullYear()}
}

var timestamp = () => { 
  return {timestamp: new Date().getTime()}
}

var toTimeStamp = (date) => {
  tmp = date.split("/")
  var dateTimestamp = new Date(Date.UTC(tmp[2], tmp[1]-1, tmp[0]));

  return {Date: date ,Timestamp: dateTimestamp.getTime()};
}

var nearestDate = (date1, date2) => {
  var aux1 = date1.split("/")
  var aux2 = date2.split("/")
  aux1 = new Date(aux1[2], aux1[1]-1, aux1[0])
  aux2 = new Date(aux2[2], aux2[1]-1, aux2[0])
  var today = new Date()

  var diff1 =  Math.abs(today.getTime() - aux1.getTime())
  var diff2 =  Math.abs(today.getTime() - aux2.getTime())

  if(diff1 < diff2){
    return {nearestDate: date1}
  }else{
    return {nearestDate: date2}
  }
}

var daysDifference = (date1, date2) => {
  var aux1 = date1.split("/")
  var aux2 = date2.split("/")
  aux1 = new Date(aux1[2], aux1[1]-1, aux1[0])
  aux2 = new Date(aux2[2], aux2[1]-1, aux2[0])

  var diffTime = Math.abs(aux2 - aux1)
  var diffDays = diffTime / (1000 * 60 * 60 * 24)

  return {First_date: date1,Second_date: date2,Difference_in_days: diffDays} 
}

var addHours = (hoursToAdd) => {
  var newDate = new Date();
  newDate.setHours(newDate.getHours() + hoursToAdd);

  return {Date_before: new Date(), Added_hours: hoursToAdd, Date_after: newDate};
}

var addSomething = (valueToAdd, unitToAdd) => {
  var newDate = new Date();
  switch(unitToAdd){
      case 'm': {
          newDate.setMinutes(newDate.getMinutes() + valueToAdd);
          break;
      }
      case 'h': {
          newDate.setHours(newDate.getHours() + valueToAdd);
          break;
      }
      case 'd': {
          newDate.setDate(newDate.getDate() + valueToAdd);
          break;
      }
      case 'mm': {
          newDate.setMonth(newDate.getMonth() + valueToAdd);
          break;
      }
      case 'y': {
          newDate.setFullYear(newDate.getFullYear() + valueToAdd);
          break;
      }
      default: {
          return {message: "Inserimento non valido"};
      }
  }
  return {Date_before: new Date(), unit: unitToAdd, value: valueToAdd, Date_after: newDate};
}

var nextFriday = () => {
  var date = new Date();
  while(date.getDay() != 5){
      date.setDate(date.getDate() + 1);
  }
  return {Current_date: new Date(), Next_friday: date};
}

console.log(actualDate())
console.log(timestamp())
console.log(toTimeStamp("25/11/2020"));
console.log(nearestDate("27/11/2020", "29/11/2020"))
console.log(daysDifference("23/11/2020", "30/11/2020"))
console.log(addHours(4));
console.log(addSomething(1, 'h'));
console.log(nextFriday());