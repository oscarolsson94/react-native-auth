import axios from "axios";

const API_KEY = AIzaSyBrASPUke7dfoIIWPB78uLPAZBouGXQITU;

export const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
};

export const createUser = async (email, password) => {
  const response = await authenticate("signUp", email, password);
};

export const login = async (email, password) => {
  const response = await authenticate("signInWithPassword", email, password);
};
