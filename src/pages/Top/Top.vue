<template>
  <div id="app">
    <div class="app_title">vuex-todo</div>
    <div class="todo_form">
      <form @submit.prevent="createTodos(form)">
        タイトル : <input type="text" v-model.trim="form.title">
        内容 : <input type="text" v-model.trim="form.body">
        <input class="submit_btn" type="submit" value="作成">
      </form>
    </div>
    <div class="w__todo" v-for="(todo, index) in todoslist" :key="index">
      <div class="todo_lists" @click="editTodoID(todo.id)">
        <div class="todo_list">{{ todo.title }}</div>
        <div class="todo_list">{{ todo.body }}</div>
      </div>
      <button type="button" class="delete_btn" @click="deleteTodo(todo.id)">削除</button>
    </div>
      <template v-if="editTodo.length !== 0">
        <div class="todo_form">
          <div class="edit_title">Todo編集</div>
          <form
            @submit.prevent="updateTodo(editTodo)"
            class="editForm">
            <label>タイトル : &nbsp;</label>
            <input type="text" v-model="editTodo.title"/>
            <label>内容 : </label>
            <input type="text" v-model="editTodo.body"/>
            <input class="submit_btn" type="submit" value="変更"/>
          </form>
        </div>
      </template>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import cloneDeep from "lodash/cloneDeep";

 export default {
   name: 'app',
   data() {
     return {
       todos: [],
       form: {
         title: '',
         body: ''
       },
       editTodo: ""
     };
   },
   computed: {
     ...mapState("todos", {
      todoslist: state => cloneDeep(state.data)
    }),
    ...mapGetters("todos", ["getTodos", "selectEditItem"]),
    sample() {
      console.log(this.editTodo);
      return false;
    }
  },
  created() {},
  methods: {
   ...mapActions("todos", ["createTodos", "updateTodo", "deleteTodo"]),
   editTodoID(id) {
     this.editTodo = cloneDeep(this.selectEditItem(id));
   }
 }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app input {
  height: 24px;
  font-size: 14px;
}

#app .edit_title {
  font-size: 24px;
}

#app .app_title {
  margin-bottom: 48px;
  font-size: 32px;
}

#app .todo_list {
  display: inline-block;
  padding-right: 16px;
  margin-bottom: 16px;
}

#app .todo_lists {
  display: inline-block;
}

#app .todo_lists:hover {
  cursor: pointer;
}

#app .delete_btn {
  background-color: #FA6681;
  color: white;
  border-radius: 2px;
  border: none;
  font-weight: bold;
}

#app .delete_btn:hover {
  cursor: pointer;
  opacity: 0.9;
}

#app .todo_form {
  margin: 48px 0;
}

#app .todo_form input {
  margin-right: 24px;
}

#app .todo_form .submit_btn {
  background-color: #0080FF;
  width: 80px;
  color: white;
  border-radius: 2px;
  border: none;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
}

#app .todo_form .submit_btn:hover {
  cursor: pointer;
  opacity: 0.9;
}

#app .editForm {
  padding-top: 48px;
}
</style>
