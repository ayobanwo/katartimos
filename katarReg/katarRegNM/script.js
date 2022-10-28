let submitBtn = document.querySelector('.submitBtn');
let form = document.querySelector('form');

nextBtn.addEventListener('click', e=>{
    let knowConf = document.querySelector('#knowConf'); 
    let confArrange = document.querySelector('#confArrange'); 
    let confXpect = document.querySelector('#confXpect'); 
    let kNo = document.querySelector('#kNo').checked; 
    let k21 = document.querySelector('#k21').checked; 
    let k20 = document.querySelector('#k20').checked; 
    let k19 = document.querySelector('#k19').checked; 
    let k18 = document.querySelector('#k18').checked; 
    let k17 = document.querySelector('#k17').checked; 

    sessionStorage.setItem('knowConf', knowConf);
    sessionStorage.setItem('confArrange', confArrange);
    sessionStorage.setItem('confXpect', confXpect);
    sessionStorage.setItem('kNo', kNo);
    sessionStorage.setItem('k21', k21);
    sessionStorage.setItem('k20', k20);
    sessionStorage.setItem('k19', k19);
    sessionStorage.setItem('k18', k18);
    sessionStorage.setItem('k17', k17);
})