const inputName = document.getElementById("input-name"); //
const inputEmail = document.getElementById("input-email");
const inputPhone = document.getElementById("input-phone");
const inputAge = document.getElementById("input-age");

const submitBtn = document.getElementById("submit-btn");

const outputName = document.getElementById("output-name");
const outputEmail = document.getElementById("output-email");
const outputPhone = document.getElementById("output-phone");
const outputAge = document.getElementById("output-age");

// process = function

const handleSubmit = () => {
  // we clear previous entry on new submit click
  outputName.textContent = "";
  outputEmail.textContent = "";
  outputPhone.textContent = "";
  outputAge.textContent = "";

  // we fetch data from textfield/input box and store into new variable.
  const name = inputName.value;
  const email = inputEmail.value;
  const phone = inputPhone.value;
  const age = inputAge.value;

  // string -> number

  // if form is empty then alert message will be shown.
  if (name === "" || email === "" || phone === "" || age === "") {
    alert("Please fill all the details !");
    return;
  }

  // check phone length by if condition.
  if (phone.length != 10) {
    alert("Enter valid phone number !");
    return;
  }

  // check age length by if condition - age must lessthan 100 and greater than 0
  if (age > 100 || age <= 0) {
    alert("Enter valid age number !");
    return;
  }

  // --->

  // variable value -:> output element set/print.
  outputName.textContent = name;
  outputEmail.textContent = email;
  outputPhone.textContent = phone;
  outputAge.textContent = age;
};

submitBtn.addEventListener("click", handleSubmit); // we create a click event, and connect handle submit function to butn.

// if phone number's digit is not equal 10. to dialoge box -> enter valid phone number.