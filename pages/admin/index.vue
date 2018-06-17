<template>
<div>
  <el-table
    :data="articlesData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="title"
      label="标题"
    >
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者"
      width="200">
    </el-table-column>
    <el-table-column
      prop="source"
      label="来源"
      width="150">
    </el-table-column>
    <el-table-column
      prop="tags"
      label="标签"
      width="200">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="300">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button type="text" size="small" @click="handlePublish(scope.$index, scope.row)" v-if="scope.row.publish == 0">发布</el-button>
        <el-button type="text" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block">
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="10"
      layout="prev, pager, next, jumper"
      :total="totalCount">
    </el-pagination>
  </div>
</div>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    layout: 'admin',
    asyncData ({ error }) {
      return axios.get('/api/articles')
        .then((res) => {
          return { articlesData: res.data.data, totalCount: res.data.allCount }
        })
        .catch((e) => {
          error({ statusCode: 404, message: 'User not found' })
        })
    },
    data () {
      return {
        articlesData: [],
        currentPage: 1,
        totalCount: 0
      }
    },
    methods: {
      handleClick (row) {
        window.open('/article/' + row.id)
      },
      handleEdit (index, row) {
        window.location = '/admin/modify/' + row.id
      },
      handleCurrentChange (val) {
        axios.get('/api/articles?page=' + val)
          .then((res) => {
            this.articlesData = res.data.data
            this.totalCount = res.data.allCount
          })
          .catch((e) => {
            console.log(e)
          })
      },
      handleDelete (index, row) {
        let confirmDelete = confirm('确定删除?')
        if (confirmDelete) {
          let data = { id: row.id }
          axios.post('/api/articles/delete', data)
            .then((res) => {
              if (res.data.resultCode === 200) {
                alert('删除成功')
                window.location = window.location
              }
            })
            .catch((e) => {
              console.log(e)
            })
        }
      },
      handlePublish (index, row) {
        let confirmDelete = confirm('确定发布?')
        if (confirmDelete) {
          let data = {
            id: row.id,
            publish: 1
          }
          axios.post('/api/articles/update', data)
            .then((res) => {
              if (res.data.resultCode === 200) {
                alert('更新成功')
                window.location = window.location
              }
            })
            .catch((e) => {
              console.log(e)
            })
        }
      }
    }
  }
</script>

<style scoped>
.block{
  text-align: right;
  margin-top: 20px;
}
</style>
