import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    ADD_TODO (state, todo ) {
      let id = new Date().getTime().toString()
      state.todos.push({ todo, id })
    },
    DELETE_TODO (state, id ) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    }
  },
  actions: {
  },
  modules: {
  }
})
