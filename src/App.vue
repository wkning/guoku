<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar/Tabbar"
export default {
  name: 'app',
  components:{Tabbar}
}
</script>

<style>
#app {
  
}
</style>
<style lang="scss">
  @import url('./assets/reset.css');
  #app{
    padding-bottom: 45px;
  }
</style>