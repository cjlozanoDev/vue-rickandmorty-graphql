import Vue from 'vue';
import VueApollo from 'vue-apollo';
import App from './App.vue';
import apolloCliente from './graphql/clienteApollo';

Vue.use(VueApollo);
Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: apolloCliente,
});

new Vue({
  render: h => h(App),
  apolloProvider,
}).$mount('#app');
