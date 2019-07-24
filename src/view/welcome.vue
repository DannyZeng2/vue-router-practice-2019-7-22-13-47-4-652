<template>
  <div>
    <!-- <span>Welcome</span> -->
    <div id = "maindiv">
      <a-input id="additem" placeholder="请输入姓名" type="text" v-model="name" />&nbsp;
      <a-button id="inputBtn" @click="goToHome">开始使用</a-button>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      name: ""
    };
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "Home", params: { name: this.name } });
      this.$router.push({ name: "todoList" });
    }
  }
};
</script>