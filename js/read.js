let out = function (str) {
  console.log(str);
}

const apiurl = 'http://localhost:8080/api/model';

function fetchModel() {
  return fetch(apiurl).then(svar => svar.json());
}

console.log("vent")

async function ShowModel() {
  let carlist = await fetchModel();
  out(carlist);
  const carListeLang = carlist.length;

  for (let i = 0; i < carListeLang; i++) {
    const cars = carlist[i];
    let table = document.getElementById("rytterlist").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = cars.navn;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = cars.hold;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = '<button class="btn btn-primary" onclick="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>';

  }
}

console.log(ShowModel)
document.addEventListener('DOMContentLoaded', () => {
  ShowModel();
});
