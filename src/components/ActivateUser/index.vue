<template>
  <div class="activate_user">
    <div class="title">地区商家销售排行</div>
    <div class="list_box">
      <div class="list_inner" v-for="(item, index) in headerData" :key="index">
        <div class="list">
          <div class="list_title">{{ item.title }}</div>
          <div class="list_separator_wrapper">
            <div class="list_separator" />
          </div>
          <div class="chart_box">
            <div class="img_box">
              <img :src="item.img">
            </div>
            <div class="chart" :id="`activate-user-chart${index + 1}`" />
          </div>
          <div class="category_box">
            <country-category :data="['商家', '订单数', '销售额']"></country-category>
          </div>
          <div class="scroll_list_box">
            <auto-scroll-table
              :config="config[index]"
              style="width:100%;height:190px;background:rgb(40,40,40);"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect, nextTick } from 'vue'
import * as eCharts from 'echarts'
import CountryCategory from '@/components/CountryCategory'
import AutoScrollTable from '@/components/AutoScrollTable'
export default {
  name: 'activate_user',
  components: {
    CountryCategory,
    AutoScrollTable
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup (props) {
    const headerData = ref([])
    const config = ref([])
    const currentIndex = 0

    watchEffect(() => {
      const currentData = props.data.slice(currentIndex, currentIndex + 3)
      headerData.value = [{
        title: currentData[0].city,
        img: 'https://img.alicdn.com/tfs/TB1Z171qebviK0jSZFNXXaApXXa-30-29.png'
      }, {
        title: currentData[1].city,
        img: 'https://img.alicdn.com/tfs/TB1b8Tzq7T2gK0jSZFkXXcIQFXa-28-24.png'
      }, {
        title: currentData[2].city,
        img: 'https://img.alicdn.com/tfs/TB12MbzqYY1gK0jSZTEXXXDQVXa-28-30.png'
      }]

      const configArray = []
      for (let i = 0; i < currentData.length; i++) {
        const data = []
        const align = []
        const shopData = currentData[i].shop
        for (let j = 0; j < shopData.length; j++) {
          data[j] = []
          align[j] = 'center'
          for (let k = 0; k < 3; k++) {
            let text = ''
            switch (k) {
              case 0:
                text = shopData[j].shop
                break
              case 1:
                text = shopData[j].order
                break
              case 2:
                text = shopData[j].sales
                break
              default:
            }
            if (k === 2) {
              data[j].push(`<div style="color:rgb(34, 162, 195)">${text}</div>`)
            } else {
              data[j].push(`<div>${text}</div>`)
            }
          }
          const _config = {
            data, // 表格数据
            align, // 表格排序
            rowNum: 3, // 显示行数
            oddRowBGC: 'rgb(55, 55, 55)', // 奇数背景色
            evenRowBGC: 'rgb(40, 40, 40)', // 偶数背景色
            columnFontSize: 22 // 表格文字大小
          }
          configArray.push(_config)
        }
      }
      // console.log(configArray)
      config.value = configArray

      nextTick(() => {
        const chart = []
        headerData.value.forEach((item, index) => {
          const id = `activate-user-chart${index + 1}`
          chart[index] = eCharts.init(document.getElementById(id))
          chart[index].setOption(initChart())
        })
      })
    })

    const initChart = () => {
      const data = []
      data[0] = Math.ceil(Math.random() * 100)
      data[1] = 100 - data[0]
      return {
        color: ['#57c3c2', 'rgb(79, 79, 79)'],
        grid: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        },
        title: {
          text: `${data[0]}%`,
          left: 'center',
          top: '60%',
          textStyle: {
            color: '#57c3c2',
            fontSize: 18,
            align: 'center'
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['70%', '90%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: data[0],
                name: '活跃用户'
              },
              {
                value: data[1],
                name: '非活跃用户'
              }
            ]
          }
        ]
      }
    }

    return {
      headerData,
      config
    }
  }
}
</script>

<style lang="scss" scoped>
.activate_user{
  width: 100%;
  height: 100%;
  background-color: #203346;
  padding-right: 20px;
  box-sizing: border-box;
  .title{
    font-size: 36px;
    margin-left: 20px;
    padding: 20px 40px 0;
    box-sizing: border-box;
  }
  .list_box{
    display: flex;
    width: 100%;
    height: 563px;
    margin-top: 20px;
    padding: 0 10px;
    box-sizing: border-box;
    .list_inner{
      flex: 0 0 33.33%;
      width: 33.33%;
      padding: 0 10px;
      box-sizing: border-box;
      .list{
        width: 100%;
        height: 100%;
        background: #353f5b;
        .list_title{
          font-size: 24px;
          padding: 10px 20px;
          box-sizing: border-box;
        }
        .list_separator_wrapper{
          position: relative;
          height: 30px;
          background: #203346;
          .list_separator{
            position: absolute;
            top: 7.5px;
            right: 15px;
            width: 15px;
            height: 15px;
            background: #29b7cb;
          }
        }
        .chart_box{
          position: relative;
          width: 100%;
          height: 200px;
          margin-top: 20px;
          .img_box{
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            width: 100%;
            height: 100%;

            img {
              width: 42px;
              height: 42px;
              margin-top: 60px;
            }
          }
          .chart {
            width: 100%;
            height: 100%;
          }
        }
        .category_box{
          margin-top: 20px;
        }
        .scroll_list_box{
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
