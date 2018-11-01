import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
  namespaced: true,

  state: {
    data: [
      {
        id: '1',
        title: 'vuex',
        body: 'vuexでtodo作るよ〜'
      },
      {
        id: '2',
        title: 'todo',
        body: 'vuexでtodo作るよ〜'
      },
    ],
    nextID: 3
 },
  getters,
  mutations,
  actions
}
