require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import router from './router'
import App from './components/App'

Vue.use(VueRouter);
Vue.use(Vuex);

const app = new Vue({
    el: '#app',
    components: { App },
    router,
})
