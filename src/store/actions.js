import api from '../api';

const actions = {
  async obtenerPersonajes({ commit }, payload) {
    console.log(api);
    const { data } = await api.obtenerPersonajes(payload);
    console.log(data);
    commit('LISTADO_RECIBIDO', data.characters);
  },
};

export default actions;
