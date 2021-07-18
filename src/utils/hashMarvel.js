import md5 from 'md5';
import {config} from '../config';

const {MARVEL_KEY, MARVEL_PRIVATE_KEY, TS} = config;
const ts = TS;
const publicKey = MARVEL_KEY;
const privateKey = MARVEL_PRIVATE_KEY;
const hash = md5(`${ts}${privateKey}${publicKey}`);

const apiKey = {
  ts,
  apikey: publicKey,
  hash,
};

export default apiKey;
