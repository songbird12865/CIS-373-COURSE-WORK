function validateForm() {
    let x1 = document.forms["contactForm"]["name"].value;
    if (x1 == "") {
        alert("Name must be filled in");
        return false;
    }
    let x2 = document.forms["contactForm"]["email"].value;
    let x3 = document.forms["contactForm"]["phone"].value;
    if (x2 == "" && x3 == "") {
        alert("Please provide either an email address or a phone number");
        return false;
    }
    if (x2 != ""){
        let mailformat = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if (!x2.match(mailformat)) {
            alert("You have entered an invalid email address");
            return false;
        }
    }
    if (x3 != "") {
        let phoneformat = new RegExp('^\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$');
        if (!x3.match(phoneformat)) {
            alert("Please enter a valid phone number, e.g. (123) 456-7890");
            return false;
        }
    }
    let x4 = document.forms["contactForm"]["message"].value;
    if (x4 == "") {
        alert("Message must be filled in");
        return false;
    }
}
function showContactField(radio) {
    document.getElementById('email_field').style.display = 'none';
    document.getElementById('phone_field').style.display = 'none';
    if (radio.value === 'email') {
        document.getElementById('email_field').style.display = 'block';
    } else if (radio.value === 'phone') {
        document.getElementById('phone_field').style.display = 'block';
    }
}