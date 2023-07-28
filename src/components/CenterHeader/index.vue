<template>
  <div class="center_header">
    <div class="item_box">

    </div>
    <div class="project_box">

    </div>
  </div>
</template>

<script>
export default {
  name: 'center_header',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  setup () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.center_header{
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(32, 51, 70);
  // box-shadow: 0 10px 10px rgba(59, 52, 52, 0.3);
  padding: 0 40px;
  box-sizing: border-box;
  .item_box{

  }
  .project_box{

  }
}
</style>
