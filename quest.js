function isNumeric(value) {
    return /^-?\d+$/.test(value);
}
const validate_form = () => {
    let names = ["name", "email", "telephone", "gender", "password"];
    names.forEach(function (element) {
        document.getElementById(element + "_error").textContent = "";
    });
    let errorCount = 0;
    names.forEach(function (element) {
        if (element === "telephone") {
            let val = document.forms["register_form"][element].value;
            if (!isNumeric(val)) {
                document.getElementById(element + "_error").textContent = "Must be in number"; ++errorCount
            }
            if (val.length !== 10) {
                document.getElementById(element + "_error").textContent = "Must be 10 digit long"; ++errorCount
            }
        } else if (element === "password") {
            let val = document.forms["register_form"][element].value;
            if (val.length <= 8) {
                document.getElementById(element + "_error").textContent = "Must be greater than 8 characters"; ++errorCount
            }
        } else {
            let val = document.forms["register_form"][element].value;
            if (val === null || val === "") {
                document.getElementById(element + "_error").textContent = "Missing*";
                ++errorCount;
            }
        }
    });
    if (errorCount) {
        return false
    } else {
        swal("Form Submitted!", "Thanks for visiting Diary foods!", "success")
        document.forms["register_form"].reset();
    }
}
const clear_fields = () => {
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("telephone").value = ""
    document.getElementById("gen").value = ""
    document.getElementById("password").value = ""
}