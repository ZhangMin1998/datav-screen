<template>
  <div class="home">
    <div class="icon-wrapper">
      <test-component></test-component>
      <!-- <svg width="30" height="30" viewBox="0 0 100 100" style="color: red">
        <use href="#more2"></use>
      </svg> -->
      <!-- <svg width="30" height="30" style="color: rgb(67, 201, 219)">
        <use href="#more2"></use>
      </svg> -->
      <!-- <Icon name="more2" :style="{width:50, height: 50}"></Icon> -->
      <Icon name="more2" class="common-icon"></Icon>
      <Icon name="zdxm" class="common-icon"></Icon>
    </div>
    <!-- <test-component2></test-component2>
    <test-component3></test-component3> -->
  </div>
</template>

<script>

export default {
  name: 'HomeView'
}
</script>

<style lang="scss" scoped>
.icon-wrapper{
  color: #42b983;
}
.common-icon{
  width: 100px;
  height: 100px;
  color: pink;
}
</style>
