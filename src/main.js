/* eslint-disable import/no-unresolved,import/first */

import { layout, VueExtendLayout } from 'vue-extend-layout';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Multiselect from 'vue-multiselect';
import stores from './stores/index';
import router from './router';
import Vuelidate from 'vuelidate';
import twinNum from 'vue-tween-number';
import vueMoment from 'vue-moment';

// axios global
window.axios = require('axios');

Vue.use(VueExtendLayout);
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(vueMoment);

Vue.component('vue-multiselect', Multiselect);
Vue.component('tween-num', twinNum);

// import this project scss
import './sass/main.scss';
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// import 'line-awesome/dist/font-awesome-line-awesome/css/all.min.css';
// import 'line-awesome/dist/font-awesome-line-awesome/css/all.css';
import 'line-awesome/css/line-awesome.css';
import 'vue-multiselect/dist/vue-multiselect.min.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: stores,
  ...layout,
});
