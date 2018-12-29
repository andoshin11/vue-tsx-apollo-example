<template>
  <div id="app">
    <div class>
      <Header/>
    </div>
    <router-view/>
    <a
      href="https://github.com/andoshin11/vue-tsx-apollo-example"
      target="_blank"
      class="github"
    >GitHub</a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/containers/Header";

export default Vue.extend({
  components: {
    Header
  }
});
</script>


<style>
body {
  margin: 0;
}

#app {
  position: relative;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.github {
  position: absolute;
  top: 0;
  left: 0;
  background: #222;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  text-decoration: none;
  transition: 0.3s;
}

.github:hover {
  text-decoration: underline;
}
</style>
