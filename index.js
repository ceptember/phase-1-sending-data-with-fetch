
let userName = 'Bob'; 
let userEmail = 'bob@example.com'; 

let body = document.querySelector('body');

function submitData(name, email){
    const configObj = {
        method: 'POST', 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }, 
        body: JSON.stringify({
            name: name,
            email: email,
        })
    }

    return fetch('http://localhost:3000/users', configObj)
        .then( resp => resp.json())
        .then ( function(data){
            body.textContent = data.id;
        })
        .catch ( errObj => body.textContent = errObj.message)
};




/*
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
}

const configurationObject = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formData)
}

fetch("http://localhost:3000/dogs", configurationObject)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        console.log(object);
    })
    .catch(function (error) {
        alert("Error!!");
        console.log(error.message);
      });
      */