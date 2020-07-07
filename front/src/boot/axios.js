import Vue from 'vue'

import axiosHttp from 'axios'

export const axios = axiosHttp
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true

Vue.prototype.$axios = axiosHttp
