import axios from "axios";

const API_KEY = AIzaSyBrASPUke7dfoIIWPB78uLPAZBouGXQITU;

const createUser = () => {
  axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
  );
};
