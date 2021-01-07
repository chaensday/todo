<template>
<div>
    <input 
      v-model="todoText"
      type="text" 
      class="w-100 p-2" 
      placeholder="Type todo"
      @keyup.enter="addTodo"
    >
</div>
  
</template>

<script>
export default {
    data(){
        return {
            todoText: '',
        }
    },
    methods: {
        // 이벤트를 사용하는 대신 mutations 사용
        addTodo(e) {
            // console.log(e.target.value) 
            // 두 번째 인자값으로는 index.js의 ADD_TODO 메소드 파라미터인 (state, value) 중에 state를 제외하고 value를 사용
            this.$store.commit('ADD_TODO', e.target.value);
            this.todoText='';
            // this.$emit('add-todo', e.target.value);
        }
    }
}
</script>

<style>

</style>