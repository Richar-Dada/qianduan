<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="标题" prop="title">
      <el-input v-model="ruleForm.title" width="500px"></el-input>
    </el-form-item>
    <el-form-item label="作者" prop="author" style="width:500px;">
      <el-input v-model="ruleForm.author"></el-input>
    </el-form-item>
    <el-form-item label="来源" prop="source" style="width:500px;">
      <el-input v-model="ruleForm.source"></el-input>
    </el-form-item>
    <el-form-item label="标签" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox v-for="(tag, index) in tags" :key="index" :label="tag.name" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item prop="content">
      
      <vue-editor class="vue-editor" v-model="value" @change="handleChange"></vue-editor>
    </el-form-item>    
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import axios from '~/plugins/axios'
  import hljs from 'highlight.js'
  import VueEditor from '../../components/VueEditor'

  export default {
    layout: 'admin',
    components: {
      VueEditor
    },
    data () {
      return {
        ruleForm: {
          title: '',
          author: '',
          source: '',
          type: [],
          tags: '',
          content: ''
        },
        value: '',
        editorOption: {
          // some quill options
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              ['clean'],
              ['link', 'image', 'video']
            ],
            syntax: {
              highlight: text => hljs.highlightAuto(text).value
            }
          }
        },
        rules: {
          title: [
            { required: true, message: '请输入文章标题', trigger: 'blur' },
            { min: 3, max: 30, message: '长度在 3 到 30 个字符', trigger: 'blur' }
          ],
          author: [
            { required: true, message: '请填写作者', trigger: 'blur' }
          ],
          source: [
            { required: true, message: '请填写来源', trigger: 'blur' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个标签', trigger: 'change' }
          ],
          content: [
            { required: true, message: '文章内容不能为空', trigger: 'blur' }
          ]
        }
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
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var issubmit = confirm('确定创建文章？')
            if (issubmit) {
              let data = {
                title: this.ruleForm.title,
                author: this.ruleForm.author,
                source: this.ruleForm.source,
                tags: this.ruleForm.type.join(','),
                content: `${this.ruleForm.content}`
              }
              axios.post('/api/articles', data)
                .then((res) => {
                  if (res.data.resultCode === 200) {
                    alert('创建成功')
                    window.location = '/admin'
                  } else {
                    alert(res.data.errorMsg)
                  }
                })
            }
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      onEditorChange ({ editor, html, text }) {
        console.log('editor change!', editor, html, text)
        this.ruleForm.content = html
      },
      handleChange (html) {
        this.ruleForm.content = html
      }
    }
  }
</script>

<style>
.quill-editor {
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 20px;
}

.vue-editor {
  line-height: 1.5;  
}

</style>