
const out = function (str) {
  console.log(str);
}

out('vi er igang med fetch bilmodeler');

const ModelUrl = 'http://localhost:8080/api/model';

function fetchAllmodeler() {
  out("get all modeler kaldt");
  return fetch(ModelUrl).then(response => response.json());
}

const modelMap = new Map();
async function createModelMap() {
  out("show alle film");
  const modelList = await fetchAllmodeler();
  modelList.forEach((model) => {
    out(model);
    modelMap.set(model.modelname, model);
  })
}

async function callModelMap(){
  await createModelMap();
}


callModelMap();

const pbFetchModels = document.getElementById('getModels');
const tblMovies = document.getElementById('movieTable');


out(pbFetchModels);
