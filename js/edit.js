async function updateRow(model, rowNo, row, modelname, acceleration, effectsee, topspeed, milesPrLiter) {
  out(model);
  model.modelname = modelname.value;
  model.acceleration = acceleration.value;
  model.effectsee = effectsee.value;
  model.topspeed = topspeed.value;
  model.milesPrLiter = milesPrLiter.value;


  const response = await restUpdateModel(model);
  out("nu har vi opdateret");
  out(response);

}

async function restUpdateModel(model) {
  const url = "http://localhost:8080/api/cars/" + model.id;

  const fetchOptions = {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: ""
  };

  const jsonString = JSON.stringify(model);
  fetchOptions.body = jsonString;

  //calls backend and wait for return
  const response = await fetch(url, fetchOptions);

  out(response);
  if (!response.ok) {
    out("Det gik ikke godt med update");
  }
  ;

  return response;
}

