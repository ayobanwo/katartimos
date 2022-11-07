let submitBtn = document.querySelector('.submitBtn');
let form = document.querySelector('form');

submitBtn.addEventListener('click', e=>{
    // e.preventDefault();
    let leader_name = document.querySelector('#leader_name');
    let leader_mobile_number = document.querySelector('#leader_mobile_number');
    let pastor_name = document.querySelector('#pastor_name');
    let first_name = document.querySelector('#first_name');
    let other_name = document.querySelector('#other_name');
    let last_name = document.querySelector('#last_name');
    let gender = document.querySelector('#gender');
    let dob = document.querySelector('#dob');
    let age_group = document.querySelector('#age_group');
    let school = document.querySelector('#school');
    let parent = document.querySelector('#parent');
    let parent_mobile = document.querySelector('#parent_mobile');
    let resident = document.querySelector('#resident');
    let town = document.querySelector('#town');
    let state = document.querySelector('#state');
    let parent_condition = document.querySelector('#parent_condition');

    //Leader Church
    let leader_churchArr =  document.getElementsByName('leader_church'); 
    let leader_church;

    leader_churchArr.forEach( church => {
        if (church.checked ) {
           leader_church = church.value ;
        }
    })

    //Class Group
    let class_groupArr =  document.getElementsByName('class_group'); 
    let class_group
    class_groupArr.forEach( group => {
        if (group.checked ) {
           class_group = group.value ;
        }
    })

    //Parent Realationship
    let relationshipArr =  document.getElementsByName('relationship'); 
    let relationship 
    relationshipArr.forEach( relation => {
        if (relation.checked ) {
           relationship = relation.value ;
        }
    })

    //Parent Approval
    let approvalArr =  document.getElementsByName('approval'); 
    let approval
    approvalArr.forEach( verdict => {
        if (verdict.checked ) {
           approval = verdict.value ;
        }
    })


    dataObj = {leader_name, leader_church, pastor_name, first_name, other_name, leader_mobile_number, last_name, mobile_number, gender, age_group, class_group, resident, town, state, dob, school, parent, relationship, parent_mobile, approval, parent_condition}

    fetch("https://whitefieldmissions.org/backends/api/post/reg_child.php", {
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