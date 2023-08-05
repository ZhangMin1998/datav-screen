<template>
  <div class="right-top1">
    <base-scroll-list :config="config"></base-scroll-list>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
export default {
  name: 'right-top1',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup (props) {
    const config = ref({})

    const update = () => {
      const headerData = ['城市订单量', '店铺数', '接单骑手人数', '新店铺数量', '人均订单量'] // 表头
      const headerStyle = [] // , width: '100px'
      const rowStyle = [{}]
      const rowBg = ['rgb(40,40,40)', 'rgb(55,55,55)']
      const aligns = ['center', 'center', 'center']
      const headerFontSize = 24
      const rowFontSize = 24
      const headerColor = '#fff'
      const rowColor = '#fff'
      const duration = 2000
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
        ['老莫11', 48, '上海'],
        ['老莫12', 48, '上海']
      ]

      config.value = {
        headerData,
        headerStyle,
        headerBg: 'rgb(90, 90, 90)', // 表头背景色
        headerHeight: 55, // 表头高度
        headerColor, // 表头文字颜色
        headerFontSize, // 表头文字大小
        headerIndex: true, // 是否显示序号
        headerIndexContent: '', // 序号列表头文字
        data,
        rowNum: 12, // 显示行数
        rowStyle,
        rowBg,
        rowFontSize,
        rowColor,
        aligns,
        duration
      }
    }

    watch(() => props.data, () => {
      update()
    })
    onMounted(() => {
      update()
    })

    return {
      config
    }
  }
}
</script>

<style lang="scss" scoped>
.right-top1{
  width: 100%;
  height: 100%;
}
</style>
