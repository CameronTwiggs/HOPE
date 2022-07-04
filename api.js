// pull data from the api
// and display it in the DOM
const endpoint = "https://hopehacksapi.herokuapp.com/";
function getData(){
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    }
    )
    .catch(error => console.log(error));
}

fetch(endpoint)
.then(response => response.json())
.then(data => {
    console.log(data);
    })
.catch(error => console.log(error));


