import * as types from './mutationType';

export default {
  createTodos({ commit }, value) {
    commit(types.createTodos, value);
  },
  deleteTodo({ commit }, id) {
    commit(types.deleteTodo, id);
  },
  updateTodo({ commit }, value) {
    commit(types.updateTodo, value);
  }
}
