var mainpassword = null;
var email;
function validatepassword(val) {
    if (val == 'clicked') {
        document.getElementById("error-mainpassword1").innerHTML = "8 Characters";
        document.getElementById("error-mainpassword2").innerHTML = "1 Number";
        document.getElementById("error-mainpassword3").innerHTML = "1 Letter";
        setTimeout(() => {
            mainpassword = document.forms["myForm"]["main-password"].value;
            var format = /\d/;
            var testletter = /[a-zA-Z]/g;

            if (mainpassword.length > 7) {
                document.getElementById("error-mainpassword1").style.color = "green";
            }
            else {
                document.getElementById("error-mainpassword1").style.color = "red";
            }
            if (format.test(mainpassword) == true) {
                document.getElementById("error-mainpassword2").style.color = "green";
            } else {
                document.getElementById("error-mainpassword2").style.color = "red";
            }
            if (testletter.test(mainpassword) == true) {
                document.getElementById("error-mainpassword3").style.color = "green";
            } else {
                document.getElementById("error-mainpassword3").style.color = "red";
            }
            if (mainpassword.length > 7 && format.test(mainpassword) == true && testletter.test(mainpassword) == true) {
                return true;
            } else {
                return false;
            }
        }, 100);
    }
}
function confirmPassword() {
    setTimeout(() => {
        var confirmPassword = document.forms["myForm"]["confirmpassword"].value;
        if (mainpassword != confirmPassword || confirmPassword == "") {
            document.getElementById("error-confirmPassword").innerHTML = "Passwords Do Not Match";
            return false;
        } else {
            document.getElementById("error-confirmPassword").innerHTML = "";
            return true;
        }
    }, 100);
}
function passwordfocus() {
    document.getElementById("error-mainpassword1").innerHTML = "";
    document.getElementById("error-mainpassword2").innerHTML = "";
    document.getElementById("error-mainpassword3").innerHTML = "";
}

function validateForm() {
    var validatepassword = validatepassword("clicked");
    var confirmPassword = confirmPassword();
    var validationFirstname = validationFirstname();
    var validationLastname = validationLastname();
    var validationPhonenumber = validationPhonenumber();
    var validateEmail = validateEmail();
    var confirmEmail = confirmEmail();
    var validationZipcode = validationZipcode();
    var validationCity = validationCity();
    var validationState = validateState();

    if (validationFirstname == false || validationLastname == false || validateEmail == false ||
        confirmEmail == false || validationPhonenumber == false || validationZipcode == false ||
        validatepassword == false || confirmPassword == false || validationCity == false || 
        validationState == false) {
        document.getElementById("alertMsg").style.backgroundColor = "#585858";
        document.getElementById("alertMsg").style.visibility = "visible";
        return false;
    } else {
        document.getElementById("alertMsg").style.backgroundColor = "green";
        document.getElementById("alertMsg").style.visibility = "visible";
        return true
    }
}
function validateEmail() {
    setTimeout(() => {
        var confmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        email = document.forms["myForm"]["your-email"].value;
        if (confmail.test(email) == false) {
            document.getElementById("error-email").innerHTML = "Please Enter Vaild Email"
            return false;
        } else {
            document.getElementById("error-email").innerHTML = ""
            return true;
        }
    }, 100);
}
function validationFirstname() {
    setTimeout(() => {
        var firstname = document.forms["myForm"]["first-name"].value;
        if (firstname.length < 1) {
            document.getElementById('error-firstname').innerHTML = "&#42; Please enter your First Name"
            return false;
        } else {
            document.getElementById("error-firstname").innerHTML = "";
            return true;
        }
    }, 100);
}
function validationLastname() {
    setTimeout(() => {
        var lastname = document.forms["myForm"]["last-name"].value;
        if (lastname.length < 1) {
            document.getElementById('error-lastname').innerHTML = "&#42; Please enter your Last Name"
            return false;
        } else {
            document.getElementById("error-lastname").innerHTML = "";
            return true;
        }
    }, 100);
}
function validationPhonenumber() {
    setTimeout(() => {
        var phone = document.forms["myForm"]["your-phone"].value;
        if (phone.length < 1) {
            document.getElementById('error-phone').innerHTML = " Please Enter Your Phone *";
            return false;
        } else {
            document.getElementById("error-phone").innerHTML = "";
            return true;
        }
    }, 100);
}
function validationZipcode() {
    setTimeout(() => {
        var phone = document.forms["myForm"]["zip-code"].value;
        if (phone.length < 1) {
            document.getElementById('error-zipcode').innerHTML = " Please Enter Your Phone *";
            return false;
        } else {
            document.getElementById("error-zipcode").innerHTML = "";
            return true;
        }
    }, 100);
}
function confirmEmail() {
    setTimeout(() => {
        var confirmEmail = document.forms["myForm"]["confirm-email"].value;
        if (email != confirmEmail || confirmEmail == "") {
            document.getElementById("error-confirm").innerHTML = "Emails Do Not Match";
            return false;
        } else {
            document.getElementById("error-confirm").innerHTML = "";
            return true;
        }
    }, 100);
}
function validationCity() {
    setTimeout(() => {
        var city = document.forms["myForm"]["city-name"].value;
        if (city.length < 1) {
            document.getElementById('error-city').innerHTML = "&#42; Please enter your City";
            return false;
        } else {
            document.getElementById("error-city").innerHTML = "";
            return true;
        }
    }, 100);
}
function validateState(){
    setTimeout(() => {
        var state = document.getElementById('stateSelect');
        if (state.value) {
            document.getElementById('error-state').innerHTML = "&#42; Please enter your state";
            return true;
          }else{
            document.getElementById("error-state").innerHTML = "";
            return false;
          }
    }, 100);
}