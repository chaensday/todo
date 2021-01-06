<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
   
<AddTodo 
  @add-todo="addTodo"
/>
<CompletedTodo
  :todos="todos"
  />

  <hr>
  <TodoList
    :todos="todos"
    @toggle-checkbox="toggleCheckbox"
    @click-delete="deleteTodo"
  />
  <!-- {{ todos }} -->
  </div>
</template>

<script>

import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import CompletedTodo from '@/components/CompletedTodo.vue';


export default {
  components: {
    AddTodo,
    TodoList,
    CompletedTodo

  },
  data(){
    return {
      todoText: '',
      todos: [
        { id: 1, text: 'buy a car', checked: false},
        { id: 2, text: 'play game', checked: false}
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

    addTodo(value){ 
      this.todos.push({
        id: Math.random(),
        text: value,
        checked: false,
      });
      this.todoText='';
    },

    toggleCheckbox({id, checked}){
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });
      this.todos[index].checked = checked;
    }
  }
}

</script>

