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
