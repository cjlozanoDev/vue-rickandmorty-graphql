import api from '../api';

const actions = {
  async obtenerPersonajes({ commit, dispatch }, payload) {
    const { data } = await api.obtenerPersonajes(payload);
    commit('LIMPIAR');
    commit('LISTADO_RECIBIDO', data.characters);
    const numeroPaginas = data.characters.info.pages;
    if (numeroPaginas > 1) {
      for (let i = 0; i < numeroPaginas; i += 1) {
        dispatch('obtenerPersonajesPorPagina', {
          nombre: payload.nombre,
          estado: payload.estado,
          numeroPagina: i + 1,
          apollo: payload.apollo,
        });
      }
    }
  },
  async obtenerPersonajesPorPagina({ commit }, payload) {
    const { data } = await api.obtenerPersonajes(payload, payload.numeroPagina);
    commit('LISTADO_RECIBIDO', data.characters);
  },
};

export default actions;
