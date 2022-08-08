let selectedRow = null;
const api = 'http://localhost:8181/api/model';
let body = {};
const modelname = document.getElementById("rytternavn").value;



const sumbot = document.getElementById("opret");
sumbot.addEventListener('click', postcar);

const fetchPost = {

  method: 'POST',
  headers: {
    "content-type": "application/json"
  },
  body: body
}

let carModel = {
  'bilmodel': modelname
};

function postcar(event) {
  event.preventDefault();
  body = JSON.stringify(carModel);
  fetchPost.body = body;
  alert(body);
  fetch(api, fetchPost).catch((err) => console.log(err));
}

function resetFrom() {
  document.getElementById("rytternavn").value = "";
  document.getElementById("rytterhold").value = "";
  selectedRow = null;
}




