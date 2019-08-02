<template>
  <div class="author">
    <p class="author-name">{{ name }}</p>
    <p class="author-job">{{ job }}</p>
    <div class="author-hobby">爱好：
      <span class="hobby-item" v-for="(item, index) in hobby" :key="index">{{ item }}</span>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '李某某',
      job: '前端一枚',
      hobby: [
        '吃',
        '喝',
        '玩',
        '乐'
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../style/scss/_variable.scss';
.author {
  display: flex;
  text-align: center;
  flex-direction: column;
  .author-name {
    @include font-title;
    margin-bottom: $margin-1;
  }
  .author-job {
    @include font-muted;
    margin-bottom: $margin-1;
  }
  .author-hobby {
    color: #666;
    display: flex;
    align-items: center;
    justify-content: center;
    .hobby-item {
      margin: 0 6px;
      color: $theme-indigo;
      font-size: 0.875rem;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      line-height: 2rem;
      box-shadow: 0px 0px 10px #dedede;
      border: 2px solid $theme-indigo;
      transition: all .5s ease-in-out;
      &:hover {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
