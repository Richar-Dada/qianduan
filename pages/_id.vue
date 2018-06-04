<template>
  <section class="article-list">
    <div class="article-item">
      <div class="article-info">
        <span>dongling</span>
        <span>2018-06-04</span>
        <span>Vue.js/Google</span>
      </div>
      <div class="article-title">
        你或许不知道Vue的这些小技巧
      </div>
    </div>
    <div class="article-item">
      <div class="article-info">
        <span>dongling</span>
        <span>2018-06-04</span>
        <span>Vue.js/Google</span>
      </div>
      <div class="article-title">
        你或许不知道Vue的这些小技巧
      </div>
    </div>
    <div class="article-item">
      <div class="article-info">
        <span>dongling</span>
        <span>2018-06-04</span>
        <span>Vue.js/Google</span>
      </div>
      <div class="article-title">
        你或许不知道Vue的这些小技巧
      </div>
    </div>
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
