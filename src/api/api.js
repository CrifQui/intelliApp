import axios from 'axios';
import {config} from '../config';
import apiHash from '../utils/hashMarvel';

const {URL_INTELLI_API, URL_MARVEL} = config;

export const login = async credentials => {
  const data = JSON.stringify(credentials);
  try {
    const response = await axios.post(`${URL_INTELLI_API}/login`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return {data: response.data, status: response.status};
  } catch (err) {
    if (err.response) {
      console.log(err.response);
      return {data: err.response.data, status: err.response.status};
    } else if (err.request) {
      console.err('error internet');
    } else {
      console.err('error al llamar api');
    }
  }
};

export const getCharacters = async () => {
  try {
    const response = await axios.get(`${URL_MARVEL}/v1/public/characters`, {
      params: {
        ...apiHash,
        limit: 30,
        offset: 0,
      },
    });
    return {data: response.data.data.results, status: response.data.code};
  } catch (err) {
    if (err.response) {
      console.err('error response');
    } else if (err.request) {
      console.err('error internet');
    } else {
      console.err('error al llamar api');
    }
  }
};

export const getCharacter = async id => {
  try {
    const response = await axios.get(`${URL_MARVEL}/v1/public/characters`, {
      params: {
        ...apiHash,
        id,
      },
    });
    return {data: response.data.data.results, status: response.data.code};
  } catch (err) {
    if (err.response) {
      console.err('error response');
    } else if (err.request) {
      console.err('error internet');
    } else {
      console.err('error al llamar api');
    }
  }
};

export const getDevices = async ({token, query, offset}) => {
  try {
    console.log(token);
    const response = await axios.get(`${URL_INTELLI_API}/devices`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      params: {
        limit: 5,
        offset: offset ? offset : 0,
        search: query.toUpperCase(),
      },
    });
    console.log(response.data.data);
    return {data: response.data.data, status: response.status};
  } catch (err) {
    if (err.response) {
      return {data: err.response.data, status: err.response.status};
    } else if (err.request) {
      console.err('error internet');
    } else if (err) {
      return {data: err.data.msg, status: err.status};
    } else {
      console.err('error al llamar api');
    }
  }
};
