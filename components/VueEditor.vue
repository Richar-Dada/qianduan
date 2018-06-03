<template>
    <section class="container">
        <div id="editor">
            <textarea rows="40" :value="message" @input="update" @keydown.tab.prevent="addtab"></textarea>
            <div id="cmark" v-html="compiledMarkdown"></div>
        </div>
    </section>
</template>
<script>
  var _ = require('lodash')
  var marked = require('marked')
  
  export default {
    data () {
      return {
        message: '# Hello Vue.js \n Using by the full-featured __markdown__ parser and compiler [marked](https://github.com/chjj/marked). \n\n *** \n\trequire(\'highlight.js\')\n\tconsole.log(\'try something here\')\n'
      }
    },
    computed: {
      compiledMarkdown: function () {
        return marked(this.message, {
          sanitize: true,
          highlight: function (code) {
            return require('highlight.js').highlightAuto(code).value
          }
        })
      }
    },
    methods: {
      update: _.debounce(function (e) {
        this.message = e.target.value
        this.$emit('change', this.message)
      }, 200),
      addtab: function (e) {
        var str = e.target.value
        var start = e.target.selectionStart
        this.message = str.substr(0, start) + '\t' + str.substr(start)
        setTimeout(() => {
          e.target.selectionStart = e.target.selectionEnd = start + 1
        }, 100)
        e.preventDefault()
      }
    }
  }
</script>
<style scoped>
  .container {
      padding: 30px 0;
      text-align: left;
      line-height: 1.5;
  }
  
  #editor {
      margin: 0;
      height: 100%;
      font-family: 'Helvetica Neue', Arial, sans-serif;
      color: #333;
      background-color: #f3f5f6;
  }
  
  @media (min-width: 601px) {
      textarea,
      #editor div {
          display: inline-block;
          width: 49%;
          max-height: 680px;
          overflow-y: scroll;
          vertical-align: top;
          box-sizing: border-box;
          padding: 0 20px;
      }
      textarea {
          tab-size: 4;
          border: none;
          resize: none;
          outline: none;
          background-color: #f6f6f6;
          font-size: 14px;
          font-family: 'Monaco', courier, monospace;
          padding: 20px;
          border-right: 1px solid #cccccc;
      }
  }
  
  @media (max-width: 600px) {
      textarea {
          display: block;
          width: 100%;
          box-sizing: border-box;
          height: 17em;
          overflow: auto;
          padding: 6px;
          padding-top: 1em;
          tab-size: 4;
          border: none;
          border-top: 1px dashed #ccc;
          resize: none;
          outline: none;
          font-family: 'Monaco', courier, monospace;
          background-color: #f6f6f6;
      }
      #editor #cmark {
          display: block;
          padding: 3px;
      }
  }

  code {
      color: #f66;
  }
  
  #editor div {
      text-align: left;
  }
  
  #eHeader {
      font-size: 3em;
      color: #bfbfbf;
  }
  
  textarea::selection {
      background: #d7d4f0 !important;
  }
</style>