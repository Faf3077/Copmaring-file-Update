import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    file: [],
    fileSecond: [],
    fileName: "",
    fileNameSecond: "",
    dataFail: "",
    dataFail2: "",
    selected_1: '',
    selected_2: '',

  },
  getters: {
    FIRST_SELECTED(state) {
      return state.selected_1
    },
    SECOND_SELECTED(state) {
      return state.selected_2
    },
  },
  mutations: {
    GET_DATA_FILE_FIRST: (state, payload) => {
      state.file = payload;
    },
    GET_DATA_FILE_SECOND: (state, payload) => {
      state.fileSecond = payload;
    },
    SET_FIRST_SELECTED: (state, payload) => {
      state.selected_1 = payload;
    },
    SET_SECOND_SELECTED: (state, payload) => {
      state.selected_2 = payload;
    },

  },
  actions: {
  },
  modules: {
  }
})
