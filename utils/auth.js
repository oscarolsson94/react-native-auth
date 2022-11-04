import axios from "axios";

const API_KEY = AIzaSyBrASPUke7dfoIIWPB78uLPAZBouGXQITU;

export const createUser = async (email, password) => {
  const response = axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
};
