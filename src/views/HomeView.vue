<template>
  <div class="home">
    <!-- <Container :options="{ width: 3840, height: 2160 }">
      <div class="test">111</div>
    </Container> -->
    <datav-loading width="100" height="100" v-if="loading">
      <div class="loading_text">
        数据大屏加载中...
      </div>
    </datav-loading>
    <Container :options="{width: 3840, height: 2160}" v-else>
      <div class="header">
        <top-header></top-header>
      </div>
    </Container>
  </div>
</template>

<script>
import { ref } from 'vue'
import TopHeader from '@/components/TopHeader/index.vue'

export default {
  name: 'HomeView',
  components: {
    TopHeader
  },
  setup () {
    const loading = ref(false)

    return {
      loading
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  // .test{
  //   width: 100px;
  //   height: 100px;
  //   background: pink;
  //   font-size: 24px;
  //   color: #000;
  //   transform: scale(1, 1);
  // }
  position: relative;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  width: 100%;
  height: 100%;
  background: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;
  #datav_container{
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
    width: 100%;
    height: 100%;
    .header {
      width: 100%;
      height: 167px;
    }
  }
}
</style>
