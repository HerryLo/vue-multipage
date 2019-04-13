<template>
  <div id="app">
    <a href="other.html">4456456</a>
    <img src="./../../assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './../../components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
