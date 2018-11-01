export default {
  getTodos: state => {
    return state.data;
  },
  selectEditItem: state => id => {
    const data = state.data.filter(data => {
      return data.id === id;
    });
    return data[0];
  }
};
