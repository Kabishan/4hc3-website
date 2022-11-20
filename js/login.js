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
	} 
	else if (username.value === USERNAME) {
		invalidUsernameFeedback.style.display = "none";
	}
	else {
		invalidUsernameFeedback.innerText = "Username is not correct"
	}

	if (password.value.length === 0) {
		invalidPasswordFeedback.innerText = "Password cannot be left empty"
	} 
	else if (password.value === PASSWORD) {
		invalidPasswordFeedback.style.display = "none";
	}
	else {
		invalidPasswordFeedback.innerText = "Password is not correct"
	}
}