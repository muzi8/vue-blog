<template>
  <div class="main">
    <div class="hongme-content">
      <div class="main-part part-left">
        <avatar />
        <tag />
      </div>
      <div class="main-part part-right">
        <author />
        <article-area />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import avatar from '@/components/avatar'
import tag from '@/components/tag'
import author from '@/components/author'
import articleArea from '@/components/articleArea'
export default {
  name: 'home',
  components: {
    avatar,
    tag,
    author,
    'article-area': articleArea
  }
}
</script>
<style lang='scss' scoped>
@import '../style/scss/_variable.scss';
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  .hongme-content {
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px #dedede;
    .main-part {
      flex: 1;
      width: 100%;
      position: relative;
      &.part-right {
        padding: 1.5rem;
        box-sizing: border-box;
      }
      &.part-right /deep/.author {
        padding: 1.25rem 0;
      }
    }
  }
}
</style>
