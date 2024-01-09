
 document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;


  console.log("Username:", username);
  console.log("Password:", password);
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  
  const newUsername = document.getElementById("newUsername").value;
  const newPassword = document.getElementById("newPassword").value;


  console.log("New Username:", newUsername);
  console.log("New Password:", newPassword);
});