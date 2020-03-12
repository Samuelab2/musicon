import Vue from 'vue';
import EventBus from '@/plugins/event-bus';
import MstoMm from '@/filters/ms-to-mm';
import blur from '@/directives/blur';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(EventBus);
Vue.use(MstoMm);
Vue.use(blur);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
