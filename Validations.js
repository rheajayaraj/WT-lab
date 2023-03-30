function validate() {
    const details=[document.getElementById("name").value,document.getElementById("email").value,document.getElementById("psw").value];
    const regx1 = /^[a-zA-Z0-9_]{5,15}$/;
    const regx2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const regx3 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    if (!details[0].match(regx1)) {
        alert("Invalid username format. Username must be 5-15 characters long and can only contain letters, numbers, and underscores.");
        return false;
    }
    else if (!details[1].match(regx2)) {
        alert("Invalid email format.");
        return false;
    }
    else if (!details[2].match(regx3)) {
        alert("Invalid password format. Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.");
        return false;
    }
    else
    {
        alert("Validation successful.");
        history.back();
        return true;
    }
}