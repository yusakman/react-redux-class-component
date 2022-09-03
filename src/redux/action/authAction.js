import TYPES from "../types";
import axios from "axios";

export const postAuth = (payload) => (dispatch) => {
  axios
    .post("https://reqres.in/api/register", payload)
    .then((res) => {
      dispatch({
        type: TYPES.POST_DATA,
        payload: res.data.token,
      });
    })
    .catch((err) => console.log(err));
};

export const postLogin = (payload) => (dispatch) => {
  axios
    .post("https://reqres.in/api/login", payload)
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      localStorage.getItem(res.data.token);
      dispatch({
        type: TYPES.POST_LOGIN,
        payload: res.data.token,
      });
    })
    .catch((err) => console.log(err));
};
