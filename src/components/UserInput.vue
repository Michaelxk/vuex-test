<template>
  <div>
      <input type="text" placeholder="write task" v-model="todo" />
      <button class="btn btn-success" @click="setInput">Primary</button>
  </div>
</template>
<script>


export default {
  name: "Query",
  data() {
    return {
       todo: "",
    };
  },
  methods: {
    setInput() {
      this.$emit("setInput", this.todo);
      this.query = "";
    }
  }
}  
</script>