<template>
  <section class="article-container">
    <div class="left">
      <!-- 头部 -->
      <div class="header">
        <div class="header-item">
          <strong class="font14">作者:</strong>
          <span class="font14">{{ article.author }}</span> 
        </div>
        <div class="header-item">
          <strong class="font14">来源:</strong>
          <span class="font14">{{ article.source }}</span> 
        </div>
        <div class="header-item">
          <strong class="font14">日期:</strong>
          <span class="font14">{{ article.createdAt.split('T')[0] }}</span> 
        </div>
      </div>
      <!-- 头部 -->
      <!-- 标题 -->
      <div class="title">
        <h5>{{ article.title }}</h5>
      </div>
      <!-- 标题 -->
      <!-- 内容 -->
      <div class="article-content">
        <div v-html="article.content"></div>
      </div>
      <!-- 内容 -->
    </div>
    <div class="right">这是一个广告</div>
   
    
  </section>
</template>

<script>
import axios from '~/plugins/axios'
var marked = require('marked')

function compiledMarkdown (content) {
  return marked(content, {
    sanitize: true,
    highlight: function (code) {
      return require('highlight.js').highlightAuto(code).value
    }
  })
}

export default {
  name: 'id',
  asyncData ({ params, error }) {
    return axios.get('/api/articles/' + params.id)
      .then((res) => {
        res.data.data.content = compiledMarkdown(res.data.data.content)
        return { article: res.data.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Article not found' })
      })
  },
  head () {
    return {
      title: `${this.article.title}`
    }
  }
}
</script>

<style>
.article-container
{
  width: 960px;
  position: relative;
  margin-bottom: 20px;
}

.left
{
  width: 660px;
  background-color: #ffffff;
  padding: 20px;
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

.header
{
  height: 20px;
  padding-bottom: 10px;
}
.header-item{
  display: inline-block;
  width: 33%;
  color: #333;
}

.title{
  margin: 10px 0; 
  padding-bottom: 10px;
  border-bottom: 1px dotted #ccc; 
}

strong{
  padding-right: 5px;
}

h5
{
  margin: 0;
}

.font14
{
  font-size: 14px;
}
</style>
