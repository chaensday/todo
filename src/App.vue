<template>
  <div id="app" class="container">
    <h1>Todo App</h1>
   
    <hr>

<AddTodo 
  @add-todo="addTodo"
/>

  <TodoList
    :todos="todos"
    @toggle-checkbox="toggleCheckbox"
    @click-delete="deleteTodo"
  />
  {{todos}}
  </div>
</template>

<script>

import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';

export default {
  components: {
    AddTodo,
    TodoList,
  },
  data(){
    return {
      todoText: '',
      todos: [
        { id: 1, text: 'buy a car', checked: false},
        { id: 2, text: 'play game', checked: false},
      ] 
    }
  },
  methods: {
            deleteTodo(id){
            const index = this.todos.findIndex(todo => {
                return todo.id === id;
            });
            this.todos.splice(index, 1);
        },
    addTodo(e){
      console.log(e);
      console.log(e.target.value);

      this.todos.push({
        id: Math.random(),
        text: e.target.value,
        checked: false,
      });
      this,this.todoText='';
    },
    toggleCheckbox({id, checked}){
      console.log(id, checked)
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });
      this.todos[index].checked = checked;
    }
  }
}

</script>

