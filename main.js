const resetFn = () => {
    document.querySelector("#cityValidation").value = "";
    document.querySelector('#stateValidation').value = "";
    document.querySelector("#cityValid").style.display = "none";
    document.querySelector("#stateValid").style.display = "none";
}

function validate() {
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let phoneInput = document.getElementById('phone').value
    var regx = /^[6-9]\d{9}$/ ;
    let batchInput = document.getElementById('batch').value
    let moduleInput = document.getElementById('module').value
    let tnCInput = document.getElementById('tnC').checked
    let stateValidation = document.querySelector('#stateValidation').value;
    let cityValidation = document.querySelector("#cityValidation").value;
    let rdb1 = document.getElementById("male");
    let rdb2 =document.getElementById("female");
    let num = /^[a-zA-Z]+$/;
    
    // document.querySelector("#cityValidation").value = "";
    // document.querySelector('#stateValidation').value = "";
    // document.querySelector("#cityValid").style.display = "none";
    // document.querySelector("#stateValid").style.display = "none";

    let error = false

    if(firstNameInput && num.test(firstNameInput)&& firstNameInput.length >=3) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    } else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        error = true
    }

    if(lastNameInput &&  num.test(lastNameInput)&&lastNameInput.length >=3) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    } else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
        error = true
    }
    if(cityValidation.length >= 3){
        document.querySelector("#cityValid").style.display = "block";
        document.querySelector("#cityInValid").style.display = "none";
      } else {
        document.querySelector("#cityValid").style.display = "none";
        document.querySelector("#cityInValid").style.display = "block";
        error = true;
      }

      if(stateValidation !== ''){
        document.querySelector("#stateValid").style.display = "block";
        document.querySelector("#stateInValid").style.display = "none";
      } else {
        document.querySelector("#stateValid").style.display = "none";
        document.querySelector("#stateInValid").style.display = "block";
        error = true;
      } 
      if(error === false && isSubmitted === true){
        alert('success');
        resetFn();
      } 

    if (emailInput &&
        emailInput.includes("@") &&
        emailInput.includes(".") &&
        emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
        emailInput.indexOf("@") !==0) {
            document.getElementById('email-valid').style.display = 'block';
            document.getElementById('email-invalid').style.display ='none'
    } else {
            document.getElementById('email-invalid').style.display = 'block';
            document.getElementById('email-valid').style.display = 'none'
            error = true;
    }

    if(phoneInput != ' '&& regx.test(phoneInput) &&
        phoneInput.length === 10) {
        document.getElementById("phone-valid").style.display = "block";
        document.getElementById("phone-invalid").style.display = "none";
    }

    else {
        document.getElementById("phone-invalid").style.display = "block";
        document.getElementById("phone-valid").style.display = "none";
        error = true;
    }

    if(batchInput !== 'None'){
      document.getElementById('batch-valid').style.display = "block";
      document.getElementById('batch-invalid').style.display = "none";
    } else {
      document.getElementById('batch-invalid').style.display = "block";
      document.getElementById('batch-valid').style.display = "none";
      error = true
      }
      
      if(moduleInput !== 'None'){
      document.getElementById('module-valid').style.display = "block";
      document.getElementById('module-invalid').style.display = "none";
    } else {
      document.getElementById('module-invalid').style.display = "block";
      document.getElementById('module-valid').style.display = "none";
      error = true
      }
      
      if(tnCInput) {
      document.getElementById("tnC-valid").style.display = "block";
    } else {
      document.getElementById("tnC-invalid").style.display = "none";
      error = true
    }
  
    if(!error) {
      alert('Your details have been saved successfully!')
      document.getElementById('first-name').value = ''
      document.getElementById('last-name').value = ''
      document.getElementById('email').value = ''
      document.getElementById('phone').value = ''
      document.getElementById('batch').value = ''
      document.getElementById('module').value = ''
      document.getElementById('cityvalidation').value = ''
      document.getElementById('statevalidation').value = ''
      document.getElementById('tnC').checked = false
  
      document.getElementById('first-name-valid').style.display = 'none'
      document.getElementById('last-name-valid').style.display = 'none'
      document.getElementById("email-valid").style.display = "none"
      document.getElementById("phone-valid").style.display = "none";
      document.getElementById("batch-valid").style.display = "none";
      document.getElementById('module-valid').style.display = "none";
      document.getElementById('cityvalidation-valid').value = "none";
      document.getElementById('statevalidation-valid').value = "none";
    }  
}