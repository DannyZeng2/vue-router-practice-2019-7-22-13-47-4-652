<template>
  <div id="main">
    <div class="outerdiv">
      <div class="rootdiv">
        

        <p>Vue.js To Do List</p>
        <i>Simple Todo List with adding and filter by diff status</i>
        <br />
        <br />

        <Header></Header>
        <Items></Items>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "./Footer";
import Header from "./Header";
import Items from "./Items";

export default {
  name: "Main",
  components: {
    Header,
    Items,
    Footer
  }
};
</script>

<style>
#main {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: block;
  color: #2c3e50;
}
</style>