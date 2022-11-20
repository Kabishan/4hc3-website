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

async function validateLogin() {
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var valid = true;

	var invalidUsernameFeedback = document.getElementById("invalid-username-feedback");
	var invalidPasswordFeedback = document.getElementById("invalid-password-feedback");

	invalidUsernameFeedback.style.display = "block";
	invalidPasswordFeedback.style.display = "block";

	if (username.value.length === 0) {
		invalidUsernameFeedback.innerText = "Username cannot be left empty"
		username.style.border = "2px solid red";
		valid = valid && false;
	} 
	else if (username.value === USERNAME) {
		invalidUsernameFeedback.style.display = "none";
		username.style.border = "2px solid green";
	}
	else {
		invalidUsernameFeedback.innerText = "Username is not correct"
		username.style.border = "2px solid red";
		valid = valid && false;
	}

	if (password.value.length === 0) {
		invalidPasswordFeedback.innerText = "Password cannot be left empty"
		password.style.border = "2px solid red";
		valid = valid && false;
	} 
	else if (password.value === PASSWORD) {
		invalidPasswordFeedback.style.display = "none";
		password.style.border = "2px solid green";
	}
	else {
		invalidPasswordFeedback.innerText = "Password is not correct"
		password.style.border = "2px solid red";
		valid = valid && false;
	}

	if (valid) {
		var loginButton = document.getElementById("login-button");
		var loginButtonParent = loginButton.parentNode;

		var loginMessage = document.createElement("div");
		loginMessage.style.setProperty("color", "green");
		loginMessage.style.setProperty("text-align", "center");
		loginMessage.innerText = "Correct Username and Password. Logging you in..."

		loginButtonParent.insertBefore(loginMessage, loginButton);

		await sleep(3000);
		alert("Hello");
	}
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}