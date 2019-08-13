import Vue from 'vue';
import VueApollo from 'vue-apollo';
import router from './router';
import App from './App.vue';
import apolloCliente from './graphql/clienteApollo';
import vuetify from './plugins/vuetify';

Vue.use(VueApollo);
Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: apolloCliente,
});

new Vue({
  render: h => h(App),
  router,
  vuetify,
  apolloProvider,
}).$mount('#app');
