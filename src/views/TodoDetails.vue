<template>
  <div>
    <h1>Todo Details</h1>
    <h2>Todo id: {{ todo }}</h2>
  </div>
</template>
<script>
  export default {
    name: "TodoDetails",
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
  }
</script>