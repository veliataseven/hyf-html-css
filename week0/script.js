function changePage() {
  var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(username=="" || password==""){ alert("Username or Password not exist"); return false;}
	document.getElementById("formpage1").style.display = "none";
	document.getElementById("wrap").style.display = "block";
	document.getElementById("demo").innerHTML = "" + username;
}