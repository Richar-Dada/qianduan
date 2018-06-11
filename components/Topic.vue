<template>
  <aside>
    <h3 class="topic-header">插件推荐</h3>
    <div class="topic-container">
      <div class="topic-item">
        <a target="_blank" href="https://www.awesomes.cn/subject/vue">
          <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/subject/160508225211-60-1.jpg?x-oss-process=style/subject" alt="">
        </a>
      </div>
      <div class="topic-item">
        <a target="_blank" href="https://www.awesomes.cn/subject/bootstrap">
          <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/subject/160112005719-92-1.jpg?x-oss-process=style/subject" alt="">
        </a>
      </div>
      <div class="topic-item">
        <a target="_blank" href="https://www.awesomes.cn/subject/react">
          <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/subject/160112120100-26-1.jpg?x-oss-process=style/subject" alt="">
        </a>
      </div>
    </div>
  </aside>
</template>

<script>
  export default {}
</script>

<style scoped>
.topic-header {
  padding: 15px 20px;
  font-size: 16px;
  border-bottom: 1px solid #f4f4f4;
  margin: 0;
}

.topic-container {
  padding: 20px;
}

.topic-item {
  margin-bottom: 10px;
}

.topic-item:last-child {
  margin-bottom: 0;
}
</style>
