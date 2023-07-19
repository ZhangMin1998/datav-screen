<template>
  <div class="home">
    <Container>
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
    window.addEventListener('resize', () => {
      console.log('resize')
    })
  }
}
</script>

<style lang="scss" scoped>
.home{
  .test{
    font-style: 14px;
    color: red;
    transform: scale(0.5);
  }
}
</style>
