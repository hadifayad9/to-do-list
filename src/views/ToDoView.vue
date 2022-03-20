<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <create-todo></create-todo>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateTodo from "../components/CreateToDo.vue";

export default {
  components: {
    CreateTodo,
  },
};
</script>
