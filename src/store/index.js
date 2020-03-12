import Vue from 'vue';
import Vuex from 'vuex';

import api from '@/services/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    track: {},
  },

  getters: {
    trackTitle(state) {
      if (!state.track.name) return '';
      return `${state.track.name} - ${state.track.artists[0].name}`;
    },
  },

  mutations: {
    setTrack(state, track) {
      state.track = track;
    },
  },
  actions: {
    getTrackById(context, payload) {
      return api.getById(payload.id)
        .then((res) => {
          context.commit('setTrack', res);
          return res;
        });
    },
  },
  modules: {
  },
});
