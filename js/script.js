function validateForm(){
    let name = document.getElementById('username').value;
    let pass = document.getElementById('pass').checked;


    if(name == "" && pass == "" && pass.length < 8){
        window.alert("Plaese check atleast value");
    }
    else{
        window.alert("Form submitted successfully")
    }
}

function resetForm() {
    document.getElementById('form2').reset();
  }