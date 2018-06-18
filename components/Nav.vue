<template>
  <nav>
    <ul class="nav-content">
      <li @click="handleClick('')">
        <nuxt-link to="/" :class="{'active': !type}">最新文章</nuxt-link>
      </li>
      <li @click="handleClick('react')">
        <nuxt-link to="/react" :class="{'active': type == 'react'}">React</nuxt-link>
      </li>
      <li @click="handleClick('vue')">
        <nuxt-link to="/vue" :class="{'active': type == 'vue'}">Vue</nuxt-link>
      </li>
      <li @click="handleClick('angular')">
        <nuxt-link to="/angular" :class="{'active': type == 'angular'}">Angular</nuxt-link>
      </li>
      <li @click="handleClick('node')">
        <nuxt-link to="/node" :class="{'active': type == 'node'}">Node</nuxt-link>
      </li>
      <li @click="handleClick('build')">
        <nuxt-link to="/build" :class="{'active': type == 'build'}">构建</nuxt-link>
      </li>
      <li @click="handleClick('interview')">
        <nuxt-link to="/interview" :class="{'active': type == 'interview'}">面试分享</nuxt-link>
      </li>
      <li @click="handleClick('other')">
        <nuxt-link to="/other" :class="{'active': type == 'other'}">其他</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        type: ''
      }
    },
    created () {
      console.log('aa')
      console.log(this.$route.params.id)
      this.type = this.$route.params.id
    },
    methods: {
      handleClick (type) {
        this.type = type
      }
    }
  }
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