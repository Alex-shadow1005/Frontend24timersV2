let out = function (str) {
  console.log(str);
}

const apiurl = 'http://localhost:8080/api/cars/sorted';

function HentModeler() {
  return fetch(apiurl).then(svar => svar.json());
}

console.log("vent")

async function Vismodeler() {
  let modelliste = await HentModeler();
  out(modelliste);
  const modelListeLang = modelliste.length;

  for (let i = 0; i < modelListeLang; i++) {
    const bilmodel = modelliste[i];
    let table = document.getElementById("listofmodels").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    const inp1 = document.createElement('input');
    inp1.type = "text";
    inp1.setAttribute("value", bilmodel.brand.brandname);
    cell1.appendChild(inp1);


    let cell2 = newRow.insertCell(1);
    const inp2 = document.createElement('input');
    inp2.type = "text";
    inp2.setAttribute("value", bilmodel.brand.nationality);
    cell2.appendChild(inp2)

    const inp3 = document.createElement('input');
    let cell3 = newRow.insertCell(2);
    inp3.type = "text";
    inp3.setAttribute("value", bilmodel.modelname);
    cell3.appendChild(inp3);

    const inp4 = document.createElement('input');
    let cell4 = newRow.insertCell(3);
    inp4.type = "text";
    inp4.setAttribute("value", bilmodel.acceleration);
    cell4.appendChild(inp4);


    const inp5 = document.createElement('input');
    let cell5 = newRow.insertCell(4);
    inp5.type = "text";
    inp5.setAttribute("value", bilmodel.effectsee);
    cell5.appendChild(inp5);

    const inp6 = document.createElement('input');
    let cell6 = newRow.insertCell(5);
    inp6.type = "text";
    inp6.setAttribute("value", bilmodel.topspeed);
    cell6.appendChild(inp6);

    const inp7 = document.createElement('input');
    let cell7 = newRow.insertCell(6);
    inp7.type = "text";
    inp7.setAttribute("value", bilmodel.milesPrLiter);
    cell7.appendChild(inp7);


    let cell8 = newRow.insertCell(7);
    const pbDelete = document.createElement("input");
    pbDelete.type = "button";
    pbDelete.setAttribute('value', 'Slet');
    pbDelete.onclick = function () {
      deleteRow(bilmodel, modelListeLang, newRow);
    }
    cell8.appendChild(pbDelete);


    let cell9 = newRow.insertCell(8);
    const pbEdit = document.createElement("input");
    pbEdit.type = "button";
    pbEdit.setAttribute('value', 'Updater');
    pbEdit.onclick = function () {
      updateRow(bilmodel,modelListeLang,newRow,inp3,inp4,inp5,inp6,inp7);
    }
    cell9.appendChild(pbEdit);

  }
}









console.log(Vismodeler)
document.addEventListener('DOMContentLoaded', () => {
  Vismodeler();
});



