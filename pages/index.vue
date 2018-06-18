<template>
  <section class="article-container">
    <div class="left">
      <a target="_blank" :href="'/article/' + article.id" v-for="(article, index) in articleList" :key="index">
        <div class="article-item" >
          <div class="article-info">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item class="article-info">{{article.author}}</el-breadcrumb-item>
              <el-breadcrumb-item class="article-info">{{article.updatedAt.split('T')[0]}}</el-breadcrumb-item>
              <el-breadcrumb-item class="article-info">{{article.tags}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="article-title">
            {{article.title}}
          </div>
        </div>
      </a>
      <div class="article-pagination">
        <el-pagination
          @current-change="handleCurrentChange"
          background
          layout="prev, pager, next"
          :total="totalCount">
        </el-pagination>
      </div>
    </div>
    <div class="right">
      <topic></topic>
    </div>

    
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import Topic from '~/components/Topic'

export default {
  name: 'index',
  components: {
    Topic
  },
  asyncData ({ params, error }) {
    return axios.get('/api/articles/all')
      .then((res) => {
        return { articleList: res.data.data, totalCount: res.data.allCount }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Article not found' })
      })
  },
  data () {
    return {
      totalCount: 0,
      articleList: []
    }
  },
  head () {
    return {
      title: `前端`
    }
  },
  methods: {
    handleCurrentChange (val) {
      console.log(val)
      axios.get('/api/articles/all?page=' + val)
        .then((res) => {
          console.log(res.data)
          this.articleList = res.data.data
          this.totalCount = res.data.allCount
        })
        .catch((e) => {
          console.log(e)
        })
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
  min-height: 425px;
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
  min-height: 400px;
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

.article-pagination {
  padding-top: 10px;
  text-align: center;
  height: 40px;
}
</style>
