function getAkanName() {
  var yearOfBirth = document.getElementById("year-input").value;
  var monthOfBirth = Number(document.getElementById("month-input").value);
  var dayOfBirth = Number(document.getElementById("day-input").value);

  var genders = document.getElementsByName("gender");
  var valid = false;
  var i = 0;
  var j = 0;

  function getGender() {

    while (i < genders.length) {
      if (genders[i].checked) {
        valid = true;
      }
      i++;
    }

    if (!valid) {
      alert("I respect your right not to conform to the binary spectrum of gender identities, but you have to select a gender to get your Akan name.")
      document.getElementById("gender_selector").innerHTML = "Select a gender"
      document.getElementById("gender_selector").style.color = "red"

    }

    for (j = 0; j < genders.length; j++) {
      if (genders[j].checked){
        new_gender_value = genders[j].value;
      }
    }

    return new_gender_value;
  }


var myGenderValue = getGender();
console.log("I got passed here " + myGenderValue);
function monthValidator() {
  if (monthOfBirth < 1 || monthOfBirth > 12) {
    return false;
  } else {
    return true;
  }
}
function dayValidator() {
  if (monthOfBirth === 2 && Number(yearOfBirth) % 4 === 0) {
    if (dayOfBirth > 28 || dayOfBirth < 1) {
      return false;
    } else if (monthOfBirth === 2 && dayOfBirth > 29) {
      return false;
    } else if (monthOfBirth === 2 && dayOfBirth < 1) {
      return false;
    } else {
      return true;
    }
  } else if (dayOfBirth < 1 || dayOfBirth > 31) {
    return false;
  } else {
    return true;
  }
}
var monthValid = monthValidator();
var dayValid = dayValidator();
var dayOfTheWeekNumber;

var dayOfTheWeekNumberIndex = Math.floor((((Number(yearOfBirth.slice(0, 2)) / 4) - 2 * Number(yearOfBirth.slice(0, 2)) - 1) + ((5 * Number(yearOfBirth.slice(2, 4)) / 4)) + ((26 * (monthOfBirth + 1) / 10)) + dayOfBirth) % 7)
if(dayOfTheWeekNumberIndex === 0){
  dayOfTheWeekNumber = 6;
}else{
  dayOfTheWeekNumber = dayOfTheWeekNumberIndex -1;
}

var maleAkanNames = [
  "Kwasi!", "Kwadwo!", "Kwabena!", "Kwaku!", "Yaw!", "Kofi!", "Kwame!"
];
var femaleAkanNames = [
  "Akosua!", "Adwoa!", "Abenaa!", "Akua!", "Yaa!", "Afua!", "Ama!"
];

if (myGenderValue === "male" && monthValid && dayValid) {
  switch (dayOfTheWeekNumber) {
    case 0:
      document.getElementById("result").innerHTML = "You were born on a Sunday & your Akan name is " + maleAkanNames[0];
      break;
    case 1:
      document.getElementById("result").innerHTML = "You were born on a Monday & your Akan name is " + maleAkanNames[1];
      break;
    case 2:
      document.getElementById("result").innerHTML = "You were born on a Tuesday & your Akan name is " + maleAkanNames[2];
      break;
    case 3:
      document.getElementById("result").innerHTML = "You were born on a Wednesday & your Akan name is " + maleAkanNames[3];
      break;
    case 4:
      document.getElementById("result").innerHTML = "You were born on a Thursday & your Akan name is " + maleAkanNames[4];
      break;
    case 5:
      document.getElementById("result").innerHTML = "You were born on a Friday & your Akan name is " + maleAkanNames[5];
      break;
    case 6:
      document.getElementById("result").innerHTML = "You were born on a Saturday & your Akan name is " + maleAkanNames[6];
      break;

    default:
      alert("You are not alive");

  }
} else if (myGenderValue == "female" && monthValid && dayValid) {
  switch (dayOfTheWeekNumber) {
    case 0:
      document.getElementById("result").innerHTML = "You were born on a Sunday & your Akan name is " + femaleAkanNames[0];
      break;
    case 1:
      document.getElementById("result").innerHTML = "You were born on a Monday & your Akan name is " + femaleAkanNames[1];
      break;
    case 2:
      document.getElementById("result").innerHTML = "You were born on a Tuesday & your Akan name is " + femaleAkanNames[2];
      break;
    case 3:
      document.getElementById("result").innerHTML = "You were born on a Wednesday & your Akan name is " + femaleAkanNames[3];
      break;
    case 4:
      document.getElementById("result").innerHTML = "You were born on a Thursday & your Akan name is " + femaleAkanNames[4];
      break;
    case 5:
      document.getElementById("result").innerHTML = "You were born on a Friday & your Akan name is " + femaleAkanNames[5];
      break;
    case 6:
      document.getElementById("result").innerHTML = "You were born on a Saturday & your Akan name is " + femaleAkanNames[6];
      break;

    default:
      alert("Try again Robot!")
  }
} else {
  alert("Invalid details")

}
}
