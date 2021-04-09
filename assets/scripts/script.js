var mainpassword = null;
var email;

function validateForm() {
    var checkpassword = validatepassword("clicked");
    var checkconfirmPassword = confirmPassword();
    var checkFirstname = validationFirstname();
    var checkLastname = validationLastname();
    var checkPhonenumber = validationPhonenumber();
    var checkEmail = validateEmail();
    var checkconfirmEmail = confirmEmail();
    var checkZipcode = validationZipcode();
    var checkCity = validationCity();
    var checkState = validateState();
    if (checkFirstname == false || checkLastname == false || checkEmail == false ||
        checkconfirmEmail == false || checkPhonenumber == false || checkZipcode == false ||
        checkpassword == false || checkconfirmPassword == false || checkCity == false || checkState == false) {
        document.getElementById("modalheader").innerHTML = "Error";
        document.getElementById("modaltext").innerHTML = "Please fill all fields to register successfully"
        document.getElementById('id01').style.display = 'block'
    } else {
        document.getElementById("modalheader").innerHTML = "Success";
        document.getElementById("modaltext").innerHTML = "Registerd successfully"
        document.getElementById('id01').style.display = 'block'
    }
    return false;

}
function validatepassword(val) {
    if (val == 'clicked') {
        document.getElementById("error-mainpassword1").innerHTML = "8 Characters";
        document.getElementById("error-mainpassword2").innerHTML = "1 Number";
        document.getElementById("error-mainpassword3").innerHTML = "1 Letter";

        mainpassword = document.forms["myForm"]["main-password"].value;
        var format = /\d/;
        var testletter = /[a-zA-Z]/g;

        if (mainpassword.length > 7) {
            document.getElementById("error-mainpassword1").style.color = "green";
            document.getElementById("error-mainpassword1").innerHTML = "&#10003 8 Characters";
        }
        else {
            document.getElementById("error-mainpassword1").style.color = "red";
            document.getElementById("error-mainpassword1").innerHTML = "8 Characters";
        }
        if (format.test(mainpassword) == true) {
            document.getElementById("error-mainpassword2").style.color = "green";
            document.getElementById("error-mainpassword2").innerHTML = "&#10003 1 Number";
        } else {
            document.getElementById("error-mainpassword2").style.color = "red";
            document.getElementById("error-mainpassword2").innerHTML = "1 Number";
        }
        if (testletter.test(mainpassword) == true) {
            document.getElementById("error-mainpassword3").style.color = "green";
            document.getElementById("error-mainpassword3").innerHTML = "&#10003 1 Letter";
        } else {
            document.getElementById("error-mainpassword3").style.color = "red";
            document.getElementById("error-mainpassword3").innerHTML = "1 Letter";
        }
        if (mainpassword.length > 7 && format.test(mainpassword) == true && testletter.test(mainpassword) == true) {
            return true;
        } else {
            return false;
        }

    }
}
function confirmPassword() {
    var confirmPassword = document.forms["myForm"]["confirmpassword"].value;
    if (mainpassword != confirmPassword || confirmPassword == "") {
        document.getElementById("error-confirmPassword").innerHTML = "Passwords Do Not Match";
        return false;
    } else {
        document.getElementById("error-confirmPassword").innerHTML = "";
        return true;
    }
}
function passwordfocus() {
    document.getElementById("error-mainpassword1").innerHTML = "";
    document.getElementById("error-mainpassword2").innerHTML = "";
    document.getElementById("error-mainpassword3").innerHTML = "";
}
function validateEmail() {
    var confmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    email = document.forms["myForm"]["your-email"].value;
    if (confmail.test(email) == false) {
        document.getElementById("error-email").innerHTML = "Please Enter Vaild Email"
        return false;
    } else {
        document.getElementById("error-email").innerHTML = ""
        return true;
    }
}
function validationFirstname() {
    var firstname = document.forms["myForm"]["first-name"].value;
    if (firstname.length < 1) {
        document.getElementById('error-firstname').innerHTML = "&#42; Please enter your First Name"
        return false;
    } else {
        document.getElementById("error-firstname").innerHTML = "";
        return true;
    }
}
function validationLastname() {
    var lastname = document.forms["myForm"]["last-name"].value;
    if (lastname.length < 1) {
        document.getElementById('error-lastname').innerHTML = "&#42; Please enter your Last Name"
        return false;
    } else {
        document.getElementById("error-lastname").innerHTML = "";
        return true;
    }
}
function validationPhonenumber() {
    var phone = document.forms["myForm"]["your-phone"].value;
    if (phone.length < 1) {
        document.getElementById('error-phone').innerHTML = " Please Enter Your Phone *";
        return false;
    } else {
        document.getElementById("error-phone").innerHTML = "";
        return true;
    }
}
function validationZipcode() {
    var phone = document.forms["myForm"]["zip-code"].value;
    if (phone.length < 1) {
        document.getElementById('error-zipcode').innerHTML = " Please Enter Your Phone *";
        return false;
    } else {
        document.getElementById("error-zipcode").innerHTML = "";
        return true;
    }
}
function confirmEmail() {
    var confirmEmail = document.forms["myForm"]["confirm-email"].value;
    if (email != confirmEmail || confirmEmail == "") {
        document.getElementById("error-confirm").innerHTML = "Emails Do Not Match";
        return false;
    } else {
        document.getElementById("error-confirm").innerHTML = "";
        return true;
    }
}
function validationCity() {
    var city = document.forms["myForm"]["city-name"].value;
    if (city.length < 1) {
        document.getElementById('error-city').innerHTML = "&#42; Please enter your City";
        return false;
    } else {
        document.getElementById("error-city").innerHTML = "";
        return true;
    }
}
function validateState() {
    var state = document.forms["myForm"]["slecltedstate"].value;
    if (state == "") {
        document.getElementById('error-state').innerHTML = "&#42; Please enter your state";
        return false;
    } else {
        document.getElementById("error-state").innerHTML = "";
        return true;
    }
}
