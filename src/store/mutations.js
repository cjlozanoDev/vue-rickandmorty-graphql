const mutations = {
  LISTADO_RECIBIDO(state, data) {
    state.infoListadoPersonajes = data.info;
    state.listadoPersonajes.push(...data.results);
  },
  LIMPIAR(state) {
    state.listadoPersonajes = [];
  },
};

export default mutations;
