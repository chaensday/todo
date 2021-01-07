import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        todos: [
            { id: 1, text: 'buy a car', checked: false},
            { id: 2, text: 'play game', checked: false}
        ] 

    },
    mutations: {
        // mutations안에 함수를 정의하고, 함수 안에 state로 접근한 뒤 state변경

        ADD_TODO(state, value){
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false,
              });
        },
        TOGGLE_TODO(state, {id, checked}){
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
              });
              state.todos[index].checked = checked;

        },
        DELETE_TODO(state, todoId){
            // 인덱스를 찾고
            const index = state.todos.findIndex(todo => {
                return todo.id === todoId;
            });
            // 찾은 인덱스 삭제
            state.todos.splice(index, 1);
        }

    },
    actions: {

    },
    getters: {

    }
});