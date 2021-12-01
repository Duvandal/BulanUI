// // code 01 -> alert
// var form = document.getElementById("login");

// form.addEventListener("click", validasi)

// function validasi() { 
//     // e.preventDefault();

//     var name = document.getElementById("login-username").innerHTML; 
//     var pass = document.getElementById("login-password").innerHTML; 

//     if (!name || !pass) { 
//         alert('Please fill out this form correctly!');
//     } else {
//         var loginBtn = document.getElementById("button-login");
//         loginBtn.value = "Loading...";
//         var res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         loginBtn.value = "Login";
//         alert("Login success!");
//         // window.location.assign('index.html')
//     }
// }

function validateForm(event){
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    
    var validasipassword = false

    if(email.length < 3){
        event.preventDefault()
        alert("Invalid email")
    }

    for(let i=0; i<password.length; i++){
        if(isNaN(password.charAt(i)) == false){
            validasipassword = true
        }
    }

    if(validasipassword == false){
        event.preventDefault()
        alert("Invalid password")
    }

}
