<template>
  <div class="home">
    <!-- <svg-animation></svg-animation> -->
    <datav-loading width="200" height="200" outsideColor="pink" insideColor="green" duration="2">
      <div style="font-size: 20px;">
        数据大屏加载中...
      </div>
    </datav-loading>
    <div style="width: 50%;background: #333;color: #fff;">
      <datav-flyBox>
        <div>111</div>
        <div>222</div>
        <div>333</div>
        <div>333</div>
        <div>333</div>
        <div>333</div>
      </datav-flyBox>
    </div>
    <div style="width: 100%;background: #333;color: #fff;">
      <datav-flyBox>
        <div>111</div>
        <div>222</div>
        <div>333</div>
        <div>333</div>
        <div>333</div>
        <div>333</div>
      </datav-flyBox>
    </div>
  </div>
</template>

<script>

export default {
  name: 'aboutView'
}
</script>

<style lang="scss" scoped>

</style>
