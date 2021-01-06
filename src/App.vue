<template>
  <div id="app" class="container">
    <h1>Todo App</h1>
    <input type="text" class="w-100 p-2" placeholder="Type todo">
    <hr>
    <Todo />

  </div>
</template>

<script>
import Todo from '@/components/Todo.vue';

export default {
  components: {
    Todo,
  }
}

</script>

