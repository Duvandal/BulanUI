
function validateForm(event){
    var email = document.getElementById('email').value;

    if(email.length <= 9){
        alert("Invalid Email")
        event.preventDefault()
    }

    var password = document.getElementById('password').value;
    if(password.length <=6){
        alert("Invalid Password")
    }
    var dob = document.getElementById('dob').value;
    var today = new Date
    if (+dob == " "){
        alert("Invalid Date of Birth")
    }else if (new Date(dob) > new Date(today)) {
        alert("Invalid Date of Birth")
    }
    event.preventDefault()
    // function isDateSelected(){ 
    //     var today =new Date();
    //     var inputDate = document.getElementById('dob').value;
    //     if (inputDate.value == " "){
    //         return false;
    //     } else if (inputDate > today) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }
    // if(isDateSelected()===false){
    //     alert("Invalid Date of Birth")
    // }
    var address = document.getElementById('address').value;
    if(address !== "jl.", address.length <=8){
        alert("Invalid Address")
    }
    
    var gender = document.getElementsByName('gender');
    var gendopt = "No Gender"
    for(let i = 0; i<gender.length; i++){
        if(gender[i].checked){
            gendopt = gender[i].value;
            break;
        }
        else{
            alert("What is your gender?")
        }
    }

    if(document.getElementById('agree').checked) {
        return true;
    }
    else{
        alert("You Must Agree");
        return false;
    }
    
}