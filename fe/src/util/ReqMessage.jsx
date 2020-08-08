import axios from "axios";
import URL from "../constants/url.js";

export const postLogin = (input) => {
  axios
    .post(URL.login, { params: input })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};

export const getUserAll = () => {
  axios
    .post(URL.userInfoAll)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};

export const getUser = (name) => {
  axios
    .post(`URL.userInfo${name}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};

export const getChatBot = (input) => {
  axios
    .get(URL.chatbot, { params: input })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};
