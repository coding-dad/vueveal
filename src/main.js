import Vue from 'vue';
import App from './App.vue';

import RHelper from './RHelper';

// window.Reveal = require('reveal.js');

Vue.prototype.$RHelper = RHelper;

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
