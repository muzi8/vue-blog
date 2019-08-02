<template>
 <div class="tag">
  <ul>
    <li>博客</li>
    <li>归档</li>
    <li>ME</li>
    <li>简书</li>
    <li>git</li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
.tag {
  position: absolute;
  ul {
    list-style: none;
    padding-left: 0;
    li {
      width: 2rem;
      padding: .4rem 1rem;
      color: #fff;
      border: 1px double #fff;
      margin: .5rem 0;
      border-left: none;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      transition: width .5s ease-in;
      cursor: pointer;
      &:hover {
        width: 4rem;
      }
    }
  }
}
</style>
