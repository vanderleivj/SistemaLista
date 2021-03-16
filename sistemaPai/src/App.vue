<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'app',
  data () {
    return {
      name: '',
      position: '',
    }
  }
}

</script>

<style>
body {
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
