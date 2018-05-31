<template>
  <div>
    <el-container>
      <el-header class="el-header">文章管理</el-header>
      <el-container>
        <!-- 侧边导航 -->
        <el-aside class="el-aside" width="200px">
          <el-row class="tac">
            <el-col>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  <span slot="title">文章列表</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">发布文章</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <!-- 侧边导航 -->
        <el-main>
          <nuxt/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}

.el-header
{
  background-color: #fff;
  border-bottom: solid 1px #e6e6e6;
  text-align: center;
  line-height: 60px;
  font-weight: 600;
  color: #409EFF;
}

</style>
