const fetchPerson = () => {
  return fetch("https://randomuser.me/api")
    .then((x) => x.json())
    .then((x) => x.results[0]);
};
