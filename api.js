// pull data from the api
// and display it in the DOM
const endpoint = "http://ec2-3-84-150-252.compute-1.amazonaws.com:8080/";
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


