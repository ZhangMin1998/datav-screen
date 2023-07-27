<template>
  <div class="bar_chart">
    <div class="title_box">
      <div class="left">
        <div class="title">当前热卖品类</div>
        <div class="sub_title">Hot Categories</div>
      </div>
      <div class="right">
        <div class="sub_title">最后更新时间：{{date}} {{time}}</div>
      </div>
    </div>
    <div id="average-age-chart3" />
  </div>
</template>

<script>
// /* eslint-disable */
import { ref, onMounted, watch } from 'vue'
import * as eCharts from 'echarts'
import { clock as useClock } from '@/utils/clock'

export default {
  name: 'bar_chart',
  props: {
    data: {
      type: Object,
      defaule: () => {}
    }
  },
  setup (props) {
    const { time, date } = useClock()
    const chart = ref(null)
    const colors = ['rgb(14, 176, 201)', 'rgb(124,136,146)']
    let currentChart = 0
    const sourceData = ref([])

    const initChart = () => {
      const { data1, data2 } = props.data
      if (currentChart === 0) {
        data1.axisX.forEach((axis, index) => {
          sourceData.value.push([axis, data1.data1[index], data1.data2[axis]])
        })
      } else {
        data2.axisX.forEach((axis, index) => {
          sourceData.value.push([axis, data2.data1[index], data2.data2[axis]])
        })
      }
      const source = [
        ['指标', '国内', '海外'],
        ...sourceData.value
      ]

      const option = {
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: 20,
          right: 0,
          bottom: 30,
          top: 20
        },
        dataset: {
          source
        },
        xAxis: {
          type: 'category',
          splitLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: 'rgb(98,105,113)',
            fontSize: 16
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: 'rgb(124,136,146)'
            }
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dotted'
            }
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: 'rgb(124,136,146)'
            }
          },
          axisLabel: {
            color: 'rgb(98,105,113)',
            fontSize: 16
          },
          axisTick: { show: false }
        },
        series: [
          {
            type: 'bar',
            stack: 'total',
            barWidth: 40
          },
          {
            type: 'bar',
            stack: 'total'
          }
        ]
      }
      if (!chart.value) {
        chart.value = eCharts.init(document.getElementById('average-age-chart3'))
      }
      chart.value.setOption(option)
      if (currentChart === 0) {
        currentChart = 1
      } else {
        currentChart = 0
      }
    }
    watch(() => props.data, () => {
      initChart()
    })
    onMounted(() => {
      initChart()
    })

    return {
      time,
      date
    }
  }
}
</script>

<style lang="scss" scoped>
.bar_chart{
  width: 100%;
  height: 100%;
  background: rgb(32, 51, 70);
  box-shadow: 0 10px 10px rgba(59, 52, 52, 0.3);
  padding: 20px 40px;
  box-sizing: border-box;
  .title_box{
    display: flex;
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
      text-align: right;
      .sub_title{
        font-size: 16px;
        letter-spacing: 1px;
        margin-top: 10px;
      }
    }
  }
  #average-age-chart3 {
    width: 100%;
    height: 250px;
  }
}
</style>
