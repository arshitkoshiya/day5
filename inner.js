function js() {
    let email = document.getElementById('email').value;
    let passwords = document.getElementById('password').value;
    localStorage.setItem("Email", email)
    localStorage.setItem("Password", passwords)
    alert('welcome to AK gamming')

}