<template>
  <div>
    <router-link to="/" style="float:left;">Welcome</router-link>

    <span style="text-align:center;">Home</span>

    <span style="float:right;">{{name}}</span>

    
  </div>
</template>

<script>
export default {
  name: "Home",
  props:["name"],
  data() {
    return {
     
    };
  },

};
</script>