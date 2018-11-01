import * as types from './mutationType';

export default {
  [types.createTodos](state, payload) {
    const { title, body } = payload;
    state.data.push({
      id: state.nextID,
      title: title,
      body: body
    });
    state.nextID += 1;
  },
  [types.updateTodo](state, payload) {
    const { id, title, body } = payload;
    const pos = state.data
      .map(data => {
        return data.id;
      })
      .indexOf(id);
    state.data[pos].title = title;
    state.data[pos].body = body;
  },
  [types.deleteTodo](state, id) {
    const data = state.data.filter(data => {
      return data.id !== id;
    });
    state.data = data;
  }
}
