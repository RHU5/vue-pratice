import Vue from 'vue';
import App from '@/App';
import store from '@/store';
import router from '@/router';
import { formatDate } from './utils/filters';

Vue.config.productionTip = false;
Vue.filter('formatDate', formatDate);

new Vue({
    render: (h) => h(App),
    router,
    store,
}).$mount('#app');
