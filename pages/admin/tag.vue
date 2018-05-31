<template>
  <div>
    <el-form ref="form" :model="listform" label-width="80px">
      <el-form-item label="标签列表:">
        <el-checkbox-group v-model="listform.type">
          <el-checkbox v-for="(tag, index) in tags" :key="index" :label="tag.name" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即删除</el-button>
        <el-button @click="dialogFormVisible = true">添加新标签</el-button>
      </el-form-item>
    </el-form>

    <!-- Form -->
    
    <el-dialog title="添加标签" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="新标签" label-width="150">
          <el-input v-model="form.newTag" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addTag">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    layout: 'admin',
    data () {
      return {
        form: {
          newTag: ''
        },
        listform: {
          type: []
        },
        dialogFormVisible: false,
        tags: ''
      }
    },
    asyncData ({ error }) {
      return axios.get('/api/tags')
        .then((res) => {
          return { tags: res.data }
        })
        .catch((e) => {
          error({ statusCode: 404, message: 'User not found' })
        })
    },
    methods: {
      onSubmit () {
        if (this.listform.type.length === 0) {
          alert('请选择要删除的表情')
          return
        }

        var isDelete = confirm('确定要删除')
        if (isDelete) {
          axios.post('/api/tags/delete', this.listform.type)
            .then((res) => {
              if (res.data.resultCode === 200) {
                alert('删除成功')
                window.location = window.location
              } else {
                alert(res.data.errorMsg)
              }
            })
        }
      },
      addTag () {
        let data = { tag: this.form.newTag.trim() }
        axios.post('/api/tags', data)
          .then((res) => {
            if (res.data.resultCode === 200) {
              window.location = window.location
            } else {
              alert(res.data.errorMsg)
            }
          })
          .catch((e) => {
            console.log('error')
          })
      }
    }
  }
</script>