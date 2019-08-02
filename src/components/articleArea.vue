<template>
  <div>
    <Content/>
    <p class="article-tips">种一棵树最好的时间是十年前，其次就是现在。</p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
@import '../style/scss/_variable.scss';
.article-tips {
  @include font-muted();
  margin-top: $margin-4;
  font-size: .8rem;
  text-align: center;
}
</style>
