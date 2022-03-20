<template>
  <div>
    <h1>Hadi's Todo List</h1>
    <form @submit.prevent="createToDo" class="container-md">
      <div class="container">
        <div class="row">
          <div class="col-10">
            <input
              class="form-control form-control-lg"
              type="text"
              placeholder="Enter a To-Do"
              aria-label=".form-control-lg example"
              v-model.trim="todoList"
            />
          </div>
          <div class="col">
            <button class="btn btn-dark form-control">Create</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      todoList: "",
    };
  },
  methods: {
    async createToDo() {
      await axios
        .post("http://localhost:5000/createToDo", {
          todo: this.todoList,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped></style>
