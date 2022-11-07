let nextBtn = document.querySelector('.nextBtn');
let form = document.querySelector('form');
let membNo = document.querySelector('#membNo');
let membYes = document.querySelector('#membYes');
let nonMemb = document.querySelector('#nonMemb');

membNo.addEventListener('click', e=>{
    if (membNo.checked === true) {
        nonMemb.style.display = 'flex';
    }
    else{
        nonMemb.style.display = 'none';
    }
})

membYes.addEventListener('click', e=>{
    if (membYes.checked === true) {
        nonMemb.style.display = 'none';
    }
})


nextBtn.addEventListener('click', e=>{
    e.preventDefault();
    let first_name = document.querySelector('#first_name').value;
    let last_name = document.querySelector('#last_name').value;
    let email = document.querySelector('#email').value;
    let mobile_number = document.querySelector('#mobile_number').value;
    let gender = document.querySelector('#gender').value;
    let age_group = document.querySelector('#age_group').value;
    let resident = document.querySelector('#resident').value;
    let town = document.querySelector('#town').value;
    let state = document.querySelector('#state').value;
    let knowledge = document.querySelector('#knowledge').value; 
    let made_arrangement = document.querySelector('#made_arrangement').value; 
    let expectation = document.querySelector('#expectation').value; 

    
    if(membNo.checked === true){
        member = "not a member"
    }
    else if(membYes.checked === true){
        member = "member"
    }

    let attend_Conference =  document.getElementsByName('attend_Conference'); 
    let attended_before = ''
    
    attend_Conference.forEach( year => {
        if (year.checked ) {
            attended_before += " " + year.value ;
        }
    })

    attended_before = attended_before.replace('undefined', '');

    
    dataObj = {first_name, last_name, email, mobile_number, gender, age_group, resident, state, town, member, knowledge, made_arrangement, expectation, attended_before }

console.log(dataObj);

    fetch("https://whitefieldmissions.org/backends/api/post/reg_adult.php", {
            method: 'post',
            body: JSON.stringify(dataObj),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response){
            return response.json();
        }).then(function (responseData){
            let status = responseData.status;
            let message = responseData.message;
            console.log(status, message);
            if(status === 'success'){
                console.log(responseData);
                form.submit();
            }
          return status;
        }).catch(function (error){
            console.log(error);
        })
})


