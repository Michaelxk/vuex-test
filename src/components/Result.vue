<template>
  <div class="result">
    <ul class="todos">
      <li class="todo" v-for="{ todo, id }  in todos" :key="id" >
        {{ todo }} 
        <router-link :to="{name: 'TodoDetails', params: { todo }}">
          <i class="fa-solid fa-clipboard-list"></i>
        </router-link>
        <i @click="DeleteHandler(id)" class="fa-solid fa-trash-can"></i>
      </li>
    </ul>  <!-- todos -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "Result",
  computed: {
    ...mapState({
      todos: state => state.todos
    })
  },
  methods: {
    DeleteHandler(id) {
      this.$store.commit('DELETE_TODO', id)
    },
  }
}
</script>
<style>
.result {
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.todos {
  width: 100%;
}
.todo {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: .5em;
  font-size: 1.2em;
  background-color: #f5f5f5;
  margin-top: 1em;
}
.fa-solid {
  color: #ff0000;
}
</style>