<template>
  <div class="home">
    <div class="container">
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1>{{ welcome }}</h1>
      <div class="container-button">
        <UserInput @setInput="InputHandler" />
      </div>
      <Result @DeleteHandler="DeleteHandler" :todos="todos" />
    </div>
  </div>
</template>

<script>
import UserInput from '../components/UserInput.vue'
import Result from '../components/Result.vue'

// @ is an alias to /src
export default {
  name: "Home",
  components: { UserInput, Result },
  data() {
    return {
      welcome: "Vuex Test",
      result: true,
      todos: []
    };
  },
  methods: {
    InputHandler(todo) {
      if(todo === "") {
        alert("Please write a task")
      } else {
        this.$store.commit('ADD_TODO', todo )
        this.result = true
      }
    },
  }
};
</script>
<style>
.container {
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
 .container-button {
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
 }
</style>