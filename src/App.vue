<template>
  <div>some header</div>
  <RegisterVue />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import RegisterVue from "./pages/Register.vue";

export default {
  name: "App",
  components: { RegisterVue },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
