import React from "react";

function validatePassword(password) {
  const minLength = 6;
  const maxLength = 24;
  const maxRepeatedChars = 2;

  if (password.length < minLength) {
    console.log("too short");
    return "too short";
  }

  if (password.length > maxLength) {
    console.log("too long");
    return "too long";
  }

  if (!/[A-Z]/.test(password)) {
    console.log("missing uppercase letter");
    return "missing uppercase letter";
  }

  if (!/[a-z]/.test(password)) {
    console.log("missing lowercase letter");
    return "missing lowercase letter";
  }

  if (!/\d/.test(password)) {
    console.log("missing number");
    return "missing number";
  }

  if (!/.*[!@#$%&'()*+=?{}[\]:;].*[!@#$%&'()*+=?{}[\]:;].*/.test(password)) {
    console.log("missing special characters");
    return "missing special characters";
  }

  const repeatedCharsRegex = /(.)\1{2,}/g;
  const repeatedChars = password.match(repeatedCharsRegex);

  if (repeatedChars && repeatedChars.some((chars) => chars.length > maxRepeatedChars)) {
    console.log("too many repeated characters");
    return "too many repeated characters";
  }

  console.log("Password is valid");
  return "password is valid";
}

function testPassword() {
  let password = document.getElementById("password").value;
  let text = validatePassword(password);
  document.getElementById("text").innerHTML = text;
  if (text === "password is valid") {
    document.getElementById("text").style.color = "green";
    document.getElementById("password").style.borderColor = "green";
  }
  else {
      document.getElementById("text").style.color = "red";
      document.getElementById("password").style.borderColor = "red";
    }
}

function App() {

  return (
    
    <div>
      <label> Enter the password </label>
      <input id="password" type="password" />
      <button onClick={testPassword}>Submit password</button>
      <p id="text"></p>
    </div>
  );
}

export default App;
