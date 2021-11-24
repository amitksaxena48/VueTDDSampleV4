<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="25%" />
    <HelloComponent />
  </div>
</template>

<script>
import HelloComponent from "./components/Home.vue";

export default {
  name: "App",
  components: {
    HelloComponent: HelloComponent,
  },
};
</script>
<style href="@/css/style.css" />
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
