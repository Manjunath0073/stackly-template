const email = localStorage.getItem("userEmail");

if(email){
  document.getElementById("userEmail").innerText = email;
} else {
  // If user directly opens dashboard
  window.location.href = "login.html";
}

function logout(){
  localStorage.removeItem("userEmail");
  window.location.href = "login.html";
}