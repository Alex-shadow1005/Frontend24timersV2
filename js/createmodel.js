const out = function (str) {
  console.log(str);
}

document.addEventListener('DOMContentLoaded', createFormEventListener);

let modelForm;

onload = async function filldropdown() {
  const dd = document.getElementById("dd");
  const brandList = await fetch("http://localhost:8080/api/brand").then(res => res.json());
  out(brandList);
  for (let i = 0; i < brandList.length; i++) {
    const select = document.createElement("option");
    select.value = brandList[i].id;
    select.innerText = brandList[i].brandname;
    dd.appendChild(select);

  }
}



function createFormEventListener() {
  modelForm = document.getElementById("newModelForm");
  modelForm.addEventListener('submit', handleFormSubmit);
}


async function handleFormSubmit(event) {
  alert()
  event.preventDefault();
  out("hej1");
  const form = event.currentTarget;
  const url = form.action;
  out(form);
  out(url);
  try {
    const formData = new FormData(form);
    let id = formData.get("brandid")
    formData.delete("brandid");
    const responseData = await postFormDataAsJson(url, formData, id);
    out(responseData);
    alert('Model created');

  } catch (err) {
    alert(err.message);
    out(err);
  }
}

async function postFormDataAsJson(url, formData, id) {
  out(formData.entries());
  let plainFormData = Object.fromEntries(formData.entries());
  plainFormData.brand = {"id":id};
  const formDataJsonString = JSON.stringify(plainFormData);
  out(formDataJsonString);

  const fetchOptions = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: formDataJsonString
  };

  const response = await fetch(url, fetchOptions);
  if (!response) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  console.log(response.json);
  return window.location.href = "index.html";
}
