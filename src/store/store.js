import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: []
  },
  getters: {},
  mutations: {
    addTodos(state, payload) {
      state.todos.push(payload);
    }
  },
  actions: {}
});
