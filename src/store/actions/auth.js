import * as constants from "../constants";
const API_BASE_ADDRESS = "http://localhost:4000";

//login
export const loginUser = (email, password) => (dispatch) => {
  var user = { email, password };
  dispatch({ type: constants.LOGIN_LOADING });
  const uri = "http://localhost:4000/auth/login";

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify(user);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:4000/auth/login", requestOptions)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((result) => {
      if (result.status === 200) {
        return dispatch({ type: constants.LOGIN_SUCCESS, payload: result });
      } else {
        return dispatch({ type: constants.LOGIN_FAILURE, payload: result });
      }
    })
    .catch((error) =>
      dispatch({
        type: constants.LOGIN_FAILURE,
        payload: { message: "server error,Please Try again" },
      })
    );
};
export const registerUser = (user) => (dispatch) => {
  dispatch({ type: constants.LOGIN_LOADING });
  const uri = "http://localhost:4000/auth/login";

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify(user);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:4000/auth/signup", requestOptions)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((result) => {
      if (result.status === 200) {
        return dispatch({ type: constants.REGISTER_SUCCESS, payload: result });
      } else {
        return dispatch({ type: constants.REGISTER_FAILURE, payload: result });
      }
    })
    .catch((error) =>
      dispatch({
        type: constants.REGISTER_FAILURE,
        payload: { message: "server error,Please Try again" },
      })
    );
};
export const logout = () => (dispatch) => {
  console.log("logout action");
  return dispatch({ type: constants.LOGOUT });
};
