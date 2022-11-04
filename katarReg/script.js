let nextBtn = document.querySelector('.nextBtn');
let form = document.querySelector('form');

nextBtn.addEventListener('click', e=>{
    let fisrt_name = document.querySelector('#first_name');
    let last_name = document.querySelector('#last_name');
    let email = document.querySelector('#email');
    let mobile_number = document.querySelector('#mobile_number');
    let age_group = document.querySelector('#age_group');
    let resident = document.querySelector('#resident');
    let town = document.querySelector('#town');
    let state = document.querySelector('#state');
    let membNo = document.querySelector('#membNo');
    let membYes = document.querySelector('#membYes');

    if (membNo.checked) {
        form.action = 'katarRegNM/index.html'
    }

    sessionStorage.setItem('first_name', first_name);
    sessionStorage.setItem('last_name', last_name);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('mobile_number', mobile_number);
    sessionStorage.setItem('age_group', age_group);
    sessionStorage.setItem('resident', resident);
    sessionStorage.setItem('state', state);
    sessionStorage.setItem('town', town);
})

fetch("https://lightstream-app.herokuapp.com/api/new/form", {
        method: 'post',
        body: JSON.stringify(dataObj),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response){
        return response.json();
    }).then(function (responseData){
        let message = responseData.message;
        if(message === 'Form succesfully created'){
            console.log(responseData);
            form.submit();
        }
      return message;
    }).catch(function (error){
        console.log(error);
    })

})