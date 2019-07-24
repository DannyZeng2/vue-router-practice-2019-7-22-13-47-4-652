<template>
  <div>
    <div>
      <a-input id="additem" v-model="todoItem" type="text" />&nbsp;
      <a-button id="addBtn" @click="add">Add</a-button>
    </div>
    <br/>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      todoItem: ""
    };
  },
  methods: {
    add() {
      if (this.todoItem == undefined || this.todoItem == "") {
        return;
      }
      this.$store.commit("add", this.todoItem);
      this.todoItem = "";
    }
  }
};
</script>

<style scoped>
@import "../css/style.css";
</style>