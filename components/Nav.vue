<template>
  <nav>
    <ul class="nav-content">
      <li>
        <nuxt-link to="/" class="active">最新文章</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/react">React</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/vue">Vue</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/angular">Angular</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/node">Node</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/build">构建</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/interveiw">面试分享</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/other">其他</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>

</script>

<style scoped>
nav{
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  background-color: #fff;
}
.nav-content{
  width: 960px;
  height: 46px;
  margin: 0 auto;
  padding-left: 0px;
}
li {
  float: left;
  line-height: 46px;
  padding: 0px 20px;
}
li:first-of-type {
  padding-left: 10px;
}
a {
  color: #999;
}
.active {
  color: #41b883;
}
</style>