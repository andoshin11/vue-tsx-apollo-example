<template>
  <div id="app">
    <div class>
      <Header/>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/containers/Header';

export default Vue.extend({
  components: {
    Header
  }
});
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
