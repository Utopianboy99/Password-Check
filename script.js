let message = document.getElementById("message")
let Passowrd = document.getElementById("pass1")
let Password2 = document.getElementById("pass2")
let button = document.getElementById("cornfim")


button.addEventListener('click', (e) => {
    e.preventDefault()

    if (Passowrd.value == "" || Password2.value == "") {
        alert("Please fill in all fields")
    } else {
        if (Passowrd.value == Password2.value || Password2.value == Passowrd.value) {
            message.innerHTML = "Correct Password"
            message.style.display = "block"
            message.style.color = "green"
            Passowrd.style.border = "3px solid green"
            Password2.style.border = "3px solid green"

            setTimeout(() => {
                Passowrd.style.border = "1px solid black"
                Password2.style.border = "1px solid black"
                message.style.display = "none"
            }, 2000)

            Passowrd.value = ""
            Password2.value = ""
        }
        if (Passowrd.value != Password2.value || Password2.value != Passowrd.value) {
            message.innerHTML = "Password does not match"
            message.style.display = "block"
            message.style.color = "red"
            Passowrd.style.border = "3px solid red"
            Password2.style.border = "3px solid red"

            setTimeout(() => {
                Passowrd.style.border = "1px solid black"
                Password2.style.border = "1px solid black"
                message.style.display = "none"
            }, 2000)

        }
    }
})









