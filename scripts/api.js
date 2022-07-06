
async function getRepInfo() {
    let name = document.querySelector(".inpRepName").value;
    let juris = document.querySelector(".inpRepJuris").value;
    let page = document.querySelector(".inpRepPage").value || 1;
    let endpoint = `https://hopehacksapi.herokuapp.com/personSearch/?name=${name}&juris=${juris}&page=${page}`;
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        let repInfo = data.results;
        let repList = document.querySelector(".repList");
        repList.innerHTML = "";
        repInfo.forEach(rep => {
            const repName = rep.name;
            const repParty = rep.party || "N/A";
            const repJuris = rep.jurisdiction.name || "N/A";
            const repRole = rep.current_role || "N/A";
            const email = rep.email || "N/A";

            let repPage = rep.page;
            let repListItem = document.createElement("li");
            repListItem.innerHTML = `
            <p>Name : ${repName}</p>
            <p>Jurisdiction : ${repJuris}</p>
            <p>Party : ${repParty}</p> 
            <p>Role : ${repRole.title || "N/A"}</p> 
            <p>Email : ${email}</p>
            `;
            repList.appendChild(repListItem);
        }
        )
    })
    .catch(error => console.log(error));
}

async function getBillInfo() {
    let bill = document.querySelector(".inpBillName").value;
    let endpoint = `https://hopehacksapi.herokuapp.com/billSearch/?bill=${bill}`;
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        let billInfo = data.results;
        let billList = document.querySelector(".billList");
        billList.innerHTML = "";
        billInfo.forEach(bill => {
            const billTitle = bill.title;
            const billSummary = bill.summary;
            const billDate = bill.date;
            const billLink = bill.link;

            let billListItem = document.createElement("li");
            billListItem.innerHTML = `
            <p>Title : ${billTitle}</p>
            <p>Summary : ${billSummary}</p>
            <p>Date : ${billDate}</p>
            <p>Link : ${billLink}</p>
            `;
            billList.appendChild(billListItem);
        }
        )
    })
    .catch(error => console.log(error));
}
