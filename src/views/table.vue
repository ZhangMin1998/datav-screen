<template>
  <div class="test_table">
    <base-scroll-list :config="config"></base-scroll-list>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'test_table',
  props: {
    // header: {
    //   type: Array,
    //   default: () => []
    // }
  },
  setup () {
    const config = ref({})
    const headerData = ['姓名', '年龄', '城市']
    const headerStyle = [{ color: 'pink', width: '100px' }]

    config.value = {
      headerData,
      headerStyle,
      headerBg: '#999',
      headerHeight: 40,
      headerIndex: true
    }
    return {
      config
    }
  }
}
</script>

<style lang="scss" scoped>
.test_table{
  width: 500px;
  height: 400px;
}
</style>
