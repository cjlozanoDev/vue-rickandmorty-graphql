import api from '../api';

const actions = {
  async obtenerPersonajes({ commit }, payload) {
    const { data } = await api.obtenerPersonajes(payload);
    commit('LISTADO_RECIBIDO', data.characters);
  },
};

export default actions;
