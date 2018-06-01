<template>
  <nav>
    <ul class="nav-content">
      <li>
        <nuxt-link to="/about" class="active">热点文章</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">React</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">Vue</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">Angular</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">Node</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">面试分享</nuxt-link>
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
  color: #333;
}
.active {
  color: #41b883;
}
</style>