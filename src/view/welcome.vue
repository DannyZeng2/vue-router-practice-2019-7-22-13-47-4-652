<template>
  <div>
      <!-- <span>Welcome</span> -->
      
      
     <input type="text" v-model="name"/>&nbsp;
     <button @click="goToHome">点击进入</button>
     
  </div>
</template>

<script>

export default {
 name:"Welcome",
   data() {
    return {
      name: ""
    };
  },
 methods:{
    goToHome(){
        
        this.$router.push({name:'Home', params:{name:this.name}})
    }
 }
};
</script>