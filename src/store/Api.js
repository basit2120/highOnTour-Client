const API_BASE_ADDRESS = "http://localhost:3000";
export const getUsers = () => {
  const uri = API_BASE_ADDRESS + "/users";
  return fetch(uri, { method: "GET" });
};

export const login = (user) => {
  console.log(user, "api");

  const uri = API_BASE_ADDRESS + "/auth/login";
  fetch(uri, {
    method: "POST",
    headers: {
      Accept: "application/json; charset=utf-8",
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    body: qs.stringify(user),
  })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};
