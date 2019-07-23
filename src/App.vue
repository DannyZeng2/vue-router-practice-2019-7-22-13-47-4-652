<template>
  <div id="app">  

    <router-view></router-view>
  </div>
</template>

<script>

import Main from "./components/Main";


export default {
  name: "app",
  components: {
    Main
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  display: block;
  color: #2c3e50;
}
</style>
