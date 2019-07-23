<template>
  <div>
    <div id="welcomediv">
      <a href @click="gotoWelcome">Welcome</a>
      <span style="float:right;">当前用户:{{name}}</span>
    </div>

    <div id="todorouter">
      <a href @click="gotoItemList">TodoList列表</a>
      <br />
      <a href @click="gotoProfile">My Profile</a>
    </div>
    <div id="showInfo">
      <router-view></router-view>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["name"],
  data() {
    return {};
  },
  methods: {
    gotoItemList() {
      this.$router.push({ name: "todoList" });
    },
    gotoProfile() {
      this.$router.push({ name: "myProfile" });
    },

    gotoWelcome() {
      if (confirm("确定返回？")) {
       this.$router.push({ name: "Welcome" });
      } else {
        return;
      }
    }
  }
};
</script>