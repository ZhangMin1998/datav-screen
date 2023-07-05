<template>
  <div class="test">
    <h1>This is an test page {{ name }}</h1>
  </div>
</template>

<script>

export default {
  name: 't_est',
  data () {
    return {
      name: 'zm'
    }
  }
}
</script>

<!-- 获取路由
<script>
  import { getCurrentInstance } from 'vue'

  export default {
    setup () {
      const { ctx } = getCurrentInstance()
      console.log(ctx.$router.currentRoute.value)
    }
  }
</script> -->

<style lang="scss" scoped>
.test{
  color: pink;
}
</style>
