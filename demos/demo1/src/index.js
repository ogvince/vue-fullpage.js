import Vue from 'vue';

import DemoApp from './DemoApp.vue';
import VueResource from 'vue-resource';
import { BASE_API } from './Constants.js';
import EventEmitter from 'events';

Vue.use(VueResource);
Vue.http.options.root = BASE_API;

Vue.prototype.$events = new EventEmitter;


//init app
const app = new Vue({
  components: {
      'demo-app': DemoApp,
  }
}).$mount('#demoApp');
