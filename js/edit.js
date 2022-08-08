async function editEntity(entity, url) {
  let fetchOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entity)
  };
  return await fetch(url, fetchOptions);
}
