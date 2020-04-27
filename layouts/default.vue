<template>
  <div id="app">
    <header>
      <nuxt-link to="/" class="header-item">掲示板</nuxt-link>
      <nuxt-link to="/login" class="header-item">ログイン</nuxt-link>
      <nuxt-link to="/register" class="header-item">登録</nuxt-link>
      <nuxt></nuxt>
    </header>
  </div>
</template>


<style scoped>
.header-item {
  padding: 10px;
}
</style>

<style>
#app {
  margin: 0 auto;

  text-align: center;
}
</style>
