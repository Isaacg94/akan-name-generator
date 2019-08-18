function getAkanName() {
  var yearOfBirth = document.getElementById("year-input").value;
  var monthOfBirth = Number(document.getElementById("month-input").value);
  var dayOfBirth = Number(document.getElementById("day-input").value);

  var genders = document.getElementsByName("gender");

  function getGender () {
    for (var gender of genders){
      if (gender.checked){
        return gender.value;
      } else {
        alert("I respect your right not to conform into the binary gender identities but you have to select a gender for this to work.")
      }
    }
  }
  var myGenderValue = getGender();
  function monthValidator () {
      if (monthOfBirth < 1 || monthOfBirth > 12) {
        return false;
      } else {
        return true;
      }
    }
    function dayValidator() {
    if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
      if (dayOfBirth > 28 || dayOfBirth < 1) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth > 29) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth < 1) {
        return false;
      } else {
        return true;
      }
    }else if (dayOfBirth < 1 || dayOfBirth > 31) {
      return false;
    } else {
      return true;
    }
  }
  var monthValid = monthValidator();
  var dayValid = dayValidator();

  var dayOfTheWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7)
