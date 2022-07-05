
async function getRepInfo() {
    let name = document.querySelector(".inpRepName").value;
    let juris = document.querySelector(".inpRepJuris").value;
    let page = document.querySelector(".inpRepPage").value;
    let endpoint = `https://hopehacksapi.herokuapp.com/personSearch/?name=${name}&juris=${juris}&page=${page}`;
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {console.log(data)})
    .catch(error => console.log(error));
    
}