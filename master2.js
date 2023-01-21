var continueBtn = document.getElementById("continue-btn");
var email = document.getElementById("email");
var pw = document.getElementById("pw");
var worng = document.getElementById("worng");
var newWin;

continueBtn.addEventListener("click", () => {
  email = email.value;
  pw = pw.value;
  if (email == "groub2" && pw == "123123") {
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", pw);
    newWin = open("index.html", "_self");
  } else {
    worng.textContent = "Wrong Email or Password";
  }
});
