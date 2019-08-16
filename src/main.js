import Vue from 'vue';
import Vuex from 'vuex';
import VueApollo from 'vue-apollo';
import router from './router';
import App from './App.vue';
import store from './store';
import apolloCliente from './graphql/clienteApollo';
import vuetify from './plugins/vuetify';

Vue.use(Vuex);
Vue.use(VueApollo);
Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: apolloCliente,
});

new Vue({
  render: h => h(App),
  router,
  vuetify,
  store,
  apolloProvider,
}).$mount('#app');
