import axios from 'axios';

axios.defaults.baseURL = 'http://httpbin.org';
axios.defaults.timeout = 10000;

axios.interceptors.request.use((config) => {
  console.log(config);
  return config;
});

axios.interceptors.request.use((res) => {
  console.log('响应成功');
  return res.data;
});
