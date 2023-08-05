<template>
  <div class="right-top1">
    <div class="title">区域销售大盘环比分析</div>
    <div class="list">
      <base-scroll-list
        :config="config"
        style="width:100%;height:820px;background:rgb(40,40,40);"
      ></base-scroll-list>
    </div>
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
      const aligns = []
      const headerFontSize = 24
      const rowFontSize = 24
      const headerColor = '#fff'
      const rowColor = '#fff'
      const duration = 2000
      const data = []

      const headerIndexData = []
      for (let i = 0; i < props.data.length; i++) {
        data[i] = []
        aligns[i] = 'center'

        if (i % 2 === 0) {
          headerIndexData[i] = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background: rgb(40,40,40);">
            <div style="width:15px;height:15px;background:rgb(14, 176, 201);border-radius:50%;border:1px solid #fff;"/>
          </div>`
        } else {
          headerIndexData[i] = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
            <div style="width:15px;height:15px;background:rgb(59, 129, 140);border-radius:50%;border:1px solid #fff;"/>
          </div>`
        }
        for (let j = 0; j < 5; j++) {
          let text = ''
          switch (j) {
            case 0:
              text = props.data[i].order
              break
            case 1:
              text = props.data[i].shop
              break
            case 2:
              text = props.data[i].rider
              break
            case 3:
              text = props.data[i].newShop
              break
            case 4:
              text = props.data[i].avgOrder
              break
            default:
          }
          if (j === 1 || j === 3) {
            data[i].push(`<div style="color:rgb(34, 162, 195)">${text}</div>`)
          } else {
            data[i].push(`<div>${text}</div>`)
          }
        }
      }

      config.value = {
        headerData,
        headerStyle,
        headerBg: 'rgb(90, 90, 90)', // 表头背景色
        headerHeight: 55, // 表头高度
        headerColor, // 表头文字颜色
        headerFontSize, // 表头文字大小
        headerIndex: true, // 是否显示序号
        headerIndexContent: '', // 序号列表头文字
        headerIndexData, // 序号列数据内容
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
      // update()
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
  // padding: 20px 40px;
  background-color: #203346;
  .title {
    font-size: 36px;
    margin-left: 20px;
  }
  .list {
    width: 100%;
    height: 880px;
    margin-top: 20px;
    padding: 30px 0;
    box-sizing: border-box;
    background: rgb(40, 40, 40);
  }
}
</style>
