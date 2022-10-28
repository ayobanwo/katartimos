let nextBtn = document.querySelector('.nextBtn');
let form = document.querySelector('form');

nextBtn.addEventListener('click', e=>{
    let fname = document.querySelector('#fname');
    let lname = document.querySelector('#lname');
    let email = document.querySelector('#email');
    let mobNum = document.querySelector('#mobNum');
    let ageGroup = document.querySelector('#ageGroup');
    let address = document.querySelector('#address');
    let membNo = document.querySelector('#membNo');
    let membYes = document.querySelector('#membYes');

    if (membNo.checked) {
        form.action = 'katarRegNM/index.html'
    }

    sessionStorage.setItem('fname', fname);
    sessionStorage.setItem('lname', lname);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('mobNum', mobNum);
    sessionStorage.setItem('ageGroup', ageGroup);
    sessionStorage.setItem('address', address);
})