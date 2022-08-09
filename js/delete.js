
async function deleteRow(model, rowNo, row) {
  out(model);
  const response = await restDeleteModel(model);
  out("nu har vi slettet");
  listofmodels.deleteRow(row.rowIndex);
}

async function restDeleteModel(model) {
  const url = "http://localhost:8080/api/cars/" + model.id;

  const fetchOptions = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    },
    body: ""
  }

  //calls backend and wait for return
  const response = await fetch(url, fetchOptions);

  out(response);
  if (!response.ok) {
    out("Det gik ikke godt med sletning");
  };

  return response;
}

const listofmodels = document.getElementById("listofmodels");
