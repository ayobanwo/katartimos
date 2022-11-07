let male = document.querySelector('#male')
let female = document.querySelector('#female')
let dorm1 = document.querySelector('#dorm1')
let dormAc = document.querySelector('#dormAc')
let hostelAc = document.querySelector('#hostelAc')
let selfcon = document.querySelector('#selfcon')
let selfconEx = document.querySelector('#selfconEx')
let accomodDiv = document.querySelector('.accomodDiv')
let hostelType = document.querySelector('#hostelType')

female.addEventListener('click', e=>{
    if (female.checked === true) {
        accomodDiv.style.display = 'block';
        hostelType.innerHTML = "Female Accomodation"
        dorm1.href = 'https://flutterwave.com/pay/femaledorm'
        dormAc.href = 'https://flutterwave.com/pay/femaledormac'
        hostelAc.href = 'https://flutterwave.com/pay/femalehostelac3'
        selfcon.href = 'https://flutterwave.com/pay/femaleselfcon'
        selfconEx.href = 'https://flutterwave.com/pay/femaleexecutive'
    }
})

male.addEventListener('click', e=>{
    if (male.checked === true) {
        accomodDiv.style.display = 'block';
        hostelType.innerHTML = "Male Accomodation"
        dorm1.href = 'https://flutterwave.com/pay/maledorm'
        dormAc.href = 'https://flutterwave.com/pay/maledormac'
        hostelAc.href = 'https://flutterwave.com/pay/malehostelac3'
        selfcon.href = 'https://flutterwave.com/pay/maleselfcon'
        selfconEx.href = 'https://flutterwave.com/pay/maleexecutive'
    }
})

