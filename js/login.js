const USERNAME = "4hc3_ta";
const PASSWORD = "4hc3";

function showHorizontalPrototypeMessage() {
	alert("This feature was not implemented vertically.");
}

function showPassword() {
	var password = document.getElementById("password");
	if (password.type === "password") {
		password.type = "text";
	} else {
		password.type = "password";
	}
}

function validateLogin() {
	var username = document.getElementById("username");
	var password = document.getElementById("password");

	var invalidUsernameFeedback = document.getElementById("invalid-username-feedback");
	var invalidPasswordFeedback = document.getElementById("invalid-password-feedback");

	invalidUsernameFeedback.style.display = "block";
	invalidPasswordFeedback.style.display = "block";

	if (username.value.length === 0) {
		invalidUsernameFeedback.innerText = "Username cannot be left empty"
		username.style.border = "2px solid red";
	} 
	else if (username.value === USERNAME) {
		invalidUsernameFeedback.style.display = "none";
		username.style.border = "2px solid green";
	}
	else {
		invalidUsernameFeedback.innerText = "Username is not correct"
		username.style.border = "2px solid red";
	}

	if (password.value.length === 0) {
		invalidPasswordFeedback.innerText = "Password cannot be left empty"
		password.style.border = "2px solid red";
	} 
	else if (password.value === PASSWORD) {
		invalidPasswordFeedback.style.display = "none";
		password.style.border = "2px solid green";
	}
	else {
		invalidPasswordFeedback.innerText = "Password is not correct"
		password.style.border = "2px solid red";
	}
}