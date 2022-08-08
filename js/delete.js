
async function deleteRow(movie, rowNo, row) {
  out(movie);
  const response = await restDeleteMovie(movie);
  out("nu har vi slettet");
  movieTable.deleteRow(row.rowIndex);
}

async function restDeleteMovie(movie) {
  const url = "http://localhost:8181/movie/" + movie.movieID;

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
} //restDeleteMovie
