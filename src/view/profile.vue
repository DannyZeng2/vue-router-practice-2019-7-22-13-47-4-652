<template>
  <div id="profile">
      <img src="../img/photo.jpg" height="100" width="100"/><br/>
      <span>Name: {{name}}</span><br/>
      <span>age: 23</span><br/>
      <span>gender:male</span>

  </div>
</template>
<script>


export default {
  name: "Profile",
  props: ["name"]
};
</script>
