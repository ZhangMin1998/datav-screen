<template>
  <div class="average_age">
    <div class="title_box">
      <div class="left">
        <div class="title">深圳外卖用户年龄分布&平均年龄</div>
        <div class="sub_title">Distribution of Age</div>
      </div>
      <div class="right">
        <div class="age">
          <count-to
            :start-val="startAge"
            :end-val="avgAge"
            :duration="1000"
            :decimals="2"
            autoplay
          />
          <span class="age_unit">岁</span>
        </div>
      </div>
    </div>
    <div id="average-age-chart"></div>
  </div>
</template>

<script>
/* eslint-disable */
import * as eCharts from 'echarts'
import { ref, onMounted } from 'vue'

export default {
  name: 'average_age',
  props: {
    avgAge: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  setup (props) {
    const startAge = ref(0)
    const color = ['rgb(59,129,140)', 'rgb(14, 176, 201)', 'rgb(41,183,203)', 'rgb(81,196,211)']

    const getOptions = () => {
      const data = ['年龄分布']
      let max = 0
      props.data.forEach(item => {
        data.push(item.value)
        max += item.value
      })
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          textStyle: {
            fontSize: 28
          },
          padding: 10
        },
        color,
        grid: {
          left: 40,
          right: 40,
          top: 0
        },
        dataset: {
          source: [
            ['指标', '0-20', '20-30', '30-50', '>50'],
            data
          ]
        },
        xAxis: {
          type: 'value',
          splitLine: { show: false },
          max,
          axisLine: {
            lineStyle: {
              color: 'rgb(50,51,53)',
              width: 3
            }
          },
          axisTick: { show: false },
          axisLabel: {
            color: 'rgb(98,105,113)',
            fontSize: 18
          }
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [
          {
            type: 'bar',
            stack: 'total',
            barWidth: 15
          },
          {
            type: 'bar',
            stack: 'total'
          },
          {
            type: 'bar',
            stack: 'total'
          },
          {
            type: 'bar',
            stack: 'total'
          }
        ]
      }
      // return option
      let chart = null
      if (!chart) {
        chart = eCharts.init(document.getElementById('average-age-chart'))
      }
      chart.setOption(option)
    }
    onMounted(() => {
      getOptions()
      console.log(props.avgAge)
    })
    return {
      startAge
    }
  }
}
</script>

<style lang="scss" scoped>
.average_age{
  width: 100%;
  height: 100%;
  background: rgb(32, 51, 70);
  box-shadow: 0 10px 10px rgba(59, 52, 52, 0.3);
  padding: 20px 40px;
  box-sizing: border-box;
  .title_box{
    display: flex;
    align-items: center;
    .left{
      .title{
        font-size: 32px;
      }
      .sub_title{
        font-size: 16px;
        letter-spacing: 1px;
        margin-top: 10px;
      }
    }
    .right{
      flex: 1;
      margin-left: 40px;
      font-weight: bold;
      .age{
        font-size: 68px;
        font-family: DIN;
        .age_unit{
          font-size: 20px;
        }
      }
    }
  }
  #average-age-chart{
    height: 120px;
  }
}
</style>
