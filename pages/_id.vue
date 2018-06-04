<template>
  <section class="article-container">
    <div class="left">
      <a :href="'/article/' + article.id" v-for="(article, index) in articleList" :key="article">
        <div class="article-item" >
          <div class="article-info">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item class="article-info">dongling</el-breadcrumb-item>
              <el-breadcrumb-item class="article-info">2018-06-04</el-breadcrumb-item>
              <el-breadcrumb-item class="article-info">Vue.js/Google</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="article-title">
            你或许不知道Vue的这些小技巧
          </div>
        </div>
      </a>
      
    </div>
    <div class="right"></div>

    
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'index',
  asyncData ({ params, error }) {
    return axios.get('/api/articles/' + params.id)
      .then((res) => {
        return { articleList: res.data.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Article not found' })
      })
  },
  head () {
    return {
      title: `前端`
    }
  }
}
</script>

<style scoped>
.article-container
{
  width: 960px;
  position: relative;
  margin-bottom: 20px;
}

.left
{
  width: 700px;
  background-color: #ffffff;
}

.right
{
  background-color: #ffffff;
  width: 240px;
  height: 400px;
  position: absolute;
  right: 0;
  top: 0;
}

.article-list{
  background-color: #ffffff;
}

.article-item {
  height: 60px;
  padding: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  cursor: pointer;
}

a:last-child .article-item {
  border-bottom: 0;
}

.article-item:hover {
  background-color: #fcfcfc;
}

.article-info {
  font-size: 12px;
  color: #cccccc;
}

.article-title {
  font-size: 18px;
  font-weight: 600;
  margin: 20px 0 10px 0;
}
</style>
