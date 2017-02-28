<template>
      <div class="home">
          <div>Resume</div>
          <div><img src="../assets/logo.png"></div>
          <div>Vue.js、Vuex、Vue-i18n、Stylus、Element</div>
          <router-link :to="{ path: 'login' }">Login</router-link>
      </div>
</template>
<script>
    export default {
        name:'home',
    }
</script>


