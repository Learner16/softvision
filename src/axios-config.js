import axios from 'axios';

const globalConfig = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/',
});

export default globalConfig;
