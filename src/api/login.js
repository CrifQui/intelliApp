import axios from 'axios';
import {config} from '../config';

const URL = config?.URL_INTELLI_API;

export const login = async credentials => {
  try {
    const response = await axios({
      method: 'post',
      url: `${URL}/login`,
      data: credentials,
      config: {headers: {'Content-Type': 'multipart/form-data'}},
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
