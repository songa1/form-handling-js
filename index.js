// const form = document.querySelector('.form');

// console.log(form);

let email = document.getElementById("email-input");
let names = document.getElementById("names-input");
let username = document.getElementById("username-input");
let password = document.getElementById("password-input");
let cpass = document.getElementById("cpass-input");
let submitBtn = document.getElementById("register");

// Ways of saving form data
/**
 * Arrays
 * Local Storage
 * Cookies
 */

let data = [];

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log(email.value, names.value, username.value, password.value, cpass.value);

  // Validation

  if (password.value !== cpass.value) {
    alert("Password do not match!");
  } else if (email.value === "") {
    alert("Email is required!");
  } else if (username.value === "") {
    alert("Username is required!");
  } else if (names.value === "") {
    alert("Names are required!");
  } else if (password.value === "") {
    alert("Password is required!");
  } else {
    console.log("All fields are provided!");
  }

  // Saving data

  let user = {
    email: email.value,
    username: username.value,
    names: names.value,
    password: password.value,
  };

  // Check if user already exists

  let userExists = data.filter((u) => u.email === email.value);

  if (userExists.length > 0) {
    alert("User already exists!");
  } else {
    data.push(user);
    console.log(data);
    localStorage.setItem("user", JSON.stringify(user));
    document.cookie = `user=${JSON.stringify(user)}`;
  }
});
