import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    getTodos(state) {
      return state.todos;
    }
  },
  mutations: {
    addTodos(state, payload) {
      state.todos.push(payload);
    },
    updateTodos(state, payload) {
      state.todos = payload;
    }
  },
  actions: {}
});
