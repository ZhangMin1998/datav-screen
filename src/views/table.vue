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
    const headerStyle = [{ color: 'pink', width: '100px' }] // , width: '100px'
    const rowStyle = [{ color: 'blue' }]
    const rowBg = ['rgb(180,180,180)', 'rgb(155,155,155)']
    const aligns = ['center', 'center', 'center']
    const headerFontSize = 24
    const rowFontSize = 20
    const headerColor = 'pink'
    const rowColor = '#fff'
    const data = [
      ['小明', 28, '深圳'],
      ['小白', 38, '广州'],
      ['老莫', 48, '上海'],
      ['老莫', 48, '上海'],
      ['老莫', 48, '上海'],
      ['老莫66', 48, '上海'],
      ['老莫77', 48, '上海'],
      ['老莫88', 48, '上海'],
      ['老莫99', 48, '上海'],
      ['老莫10', 48, '上海'],
      ['老莫11', 48, '上海']
    ]

    config.value = {
      headerData,
      headerStyle,
      rowStyle,
      headerBg: '#999',
      headerHeight: 40,
      headerIndex: true,
      data,
      rowNum: 5,
      rowBg,
      aligns,
      headerFontSize,
      rowFontSize,
      headerColor,
      rowColor
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
