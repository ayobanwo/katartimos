let getAdult = document.querySelector('#getAdult');
let adultData = document.querySelector('#adultData');
let adultId = document.querySelector('#adultId');
let delAdult = document.querySelector('#delAdult');
let adultMsg = document.querySelector('#adultMsg');

let getChild = document.querySelector('#getChild');
let childData = document.querySelector('#childData');
let childId = document.querySelector('#childId');
let delChild = document.querySelector('#delChild');
let childMsg = document.querySelector('#childMsg');

let _token = sessionStorage.getItem('_token');

//Get and Display registered Adults
getAdult.addEventListener('click', e=>{
    fetch(`https://whitefieldmissions.org/backends/api/get/getAllAdults.php?_token=${_token}`)
    .then((response) => response.json())
    .then((responseData) => {
        console.log(responseData.data);
        adultData.value = JSON.stringify(responseData.data);
    })
})

//Get and Display registered Children
getChild.addEventListener('click', e=>{
    fetch(`https://whitefieldmissions.org/backends/api/get/getAllChildren.php?_token=${_token}`)
    .then((response) => response.json())
    .then((responseData) => {
        console.log(responseData.data);
        childData.value = JSON.stringify(responseData.data);
    })
})

//Delete a Registered Adult
delAdult.addEventListener('click', e=>{
    let id = adultId.value;
    fetch(`https://whitefieldmissions.org/backends/api/delete/deleteAdult.php?_token=${_token}&id=${id}`)
    .then((response) => response.json())
    .then((responseData) => {
        console.log(responseData);
        adultMsg.textContent = responseData.message;
    })
})

//Delete a Registered Child
delChild.addEventListener('click', e=>{
    let id = childId.value;
    fetch(`https://whitefieldmissions.org/backends/api/delete/deleteChild.php?_token=${_token}&id=${id}`)
    .then((response) => response.json())
    .then((responseData) => {
        console.log(responseData);
        childMsg.textContent = responseData.message;
    })
})