<template>
  <div class="avatar">
    <img :src="avatarImg" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      avatarImg: '/img/43306-tillamook_1280x1707.jpg'
    }
  }
}
</script>

<style lang='scss' scoped>
.avatar {
  font-size: 0;
  img {
    max-width: 100%;
  }
}
</style>
