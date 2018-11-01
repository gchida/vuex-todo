import Vue from 'vue';
import Vuex from 'vuex';
import todos from './todos';

Vue.use(Vuex);

// ストアを作成する
const store = new Vuex.Store({

  // モジュールを分割することによって管理しやすくします。
  modules: {
    todos,
  }
});

export default store;
