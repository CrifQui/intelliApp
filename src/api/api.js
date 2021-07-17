import axios from 'axios';
import {config} from '../config';

const {URL_INTELLI_API, URL_MARVEL} = config;

export const login = async credentials => {
  try {
    const response = await axios({
      method: 'post',
      url: `${URL_INTELLI_API}/login`,
      data: credentials,
      config: {headers: {'Content-Type': 'multipart/form-data'}},
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCharacters = async credentials => {
  try {
    const response = await axios({
      method: 'post',
      url: `${URL_MARVEL}/test`,
      data: credentials,
      config: {headers: {'Content-Type': 'multipart/form-data'}},
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getDetailsCharacters = async credentials => {
  try {
    const response = await axios({
      method: 'post',
      url: `${URL_MARVEL}/test`,
      data: credentials,
      config: {headers: {'Content-Type': 'multipart/form-data'}},
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
