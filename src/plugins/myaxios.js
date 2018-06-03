import axios from 'axios';

const MyAxios = {};
MyAxios.install = function (Vue) {
  // 设置全局axiosbaseUrl
  // axios.defaults.baseURL = 'http://localhost:3000';

  const instance = axios.create({
    baseURL: 'http://localhost:3000'
  });
  Vue.prototype.$http = instance;
};

export default MyAxios;

