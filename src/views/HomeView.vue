<template>
  <div class="home">
    <Container :options="{ width: 3840, height: 2160 }">
      <div class="test">111</div>
    </Container>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

  },
  mounted () {
    // window.addEventListener('resize', () => {
    //   console.log('resize')
    // })
  }
}
</script>

<style lang="scss" scoped>
.home{
  .test{
    width: 100px;
    height: 100px;
    background: pink;
    font-size: 24px;
    color: #000;
    transform: scale(1, 1);
  }
}
</style>
