function validateForm() {
    let x1 = document.forms["contactForm"]["name"].value;
    if (x1 == "") {
        alert("Name must be filled in");
        return false;
    }
    let x2 = document.forms["contactForm"]["email"].value;
    if (x2 == "") {
        alert("Email must be filled in");
        return false;
    }
    let mailformat = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (!document.forms["contactForm"]["email"].value.match(mailformat))
    {
        alert("You have entered an invalid email address");
        return false;
    }
    let x3 = document.forms["contactForm"]["phone"].value;
    if (x3 == "") {
        alert("Phone must be filled in");
        return false;
    }
    let x4 = document.forms["contactForm"]["message"].value;
    if (x4 == "") {
        alert("Message must be filled in");
        return false;
    }
}
function getRadioValue(radio) {
    alert("You selected: " + radio.value);
}
function getCheckboxClick(checkbox) {
    alert("You selected: " + checkbox.value);
}
function getMenuSelection(menu) {
    alert("You selected: " + menu.value)
}
function getTextboxEntry(textbox) {
    alert("You entered: " + textbox.value)
}
