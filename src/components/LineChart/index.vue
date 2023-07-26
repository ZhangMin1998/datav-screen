<template>
  <div class="line_chart">
    <div class="title_box">
      <div class="title">深圳外卖骑手概况</div>
      <div class="sub_title">Rider Growth rate</div>
    </div>
    <div id="average-age-chart2" />
  </div>
</template>

<script>
// /* eslint-disable */
import { ref, onMounted, watch } from 'vue'
import * as eCharts from 'echarts'

export default {
  name: 'line_chart',
  props: {
    data: {
      type: Array,
      defaule: () => []
    }
  },
  setup (props) {
    console.log(props.data)
    const chart = ref(null)
    const colors = ['rgb(209,248,139)', 'rgb(14, 176, 201)', 'rgb(124,136,146)']
    let currentChart = 0

    const initChart = () => {
      const { axisX, orderData, rateData } = props.data
      const axisData = axisX
      let legendData = []
      let data1 = []
      let data2 = []
      if (currentChart === 0) {
        legendData = [orderData.legend1, orderData.legend2]
        data1 = orderData.data1
        data2 = orderData.data2
      } else {
        legendData = [rateData.legend1, rateData.legend2]
        data1 = rateData.data1
        data2 = rateData.data2
      }

      const option = {
        color: colors,
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          top: 60,
          bottom: 30,
          left: 50,
          right: 20
        },
        legend: {
          top: 0,
          right: 40,
          icon: 'rect',
          textStyle: {
            fontSize: 16,
            color: colors[2]
          },
          data: legendData
        },
        xAxis: [
          {
            type: 'category',
            axisTick: { show: false },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[2]
              }
            },
            axisLabel: {
              fontSize: 16
            },
            data: axisData
          }
          // {
          //   type: 'category',
          //   axisTick: { show: false },
          //   axisLine: { show: false }
          // }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: { show: false },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[2]
              }
            },
            axisLabel: {
              fontSize: 16
            },
            splitLine: {
              lineStyle: {
                type: 'dotted'
              }
            }
          }
        ],
        series: [
          {
            name: legendData[0],
            type: 'line',
            // xAxisIndex: 1,
            smooth: true,
            lineStyle: {
              width: 2
            },
            symbol: 'none',
            // data: [5, 100, 70, 120, 80, 15, 200, 300, 195, 150, 80, 103]
            data: data1
          },
          {
            name: legendData[1],
            type: 'line',
            smooth: true,
            lineStyle: {
              width: 2
            },
            symbol: 'none',
            // data: [10, 50, 80, 4, 90, 50, 105, 160, 111, 54, 108, 50]
            data: data2
          }
        ]
      }
      if (!chart.value) {
        chart.value = eCharts.init(document.getElementById('average-age-chart2'))
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

    }
  }
}
</script>

<style lang="scss" scoped>
.line_chart{
  width: 100%;
  height: 100%;
  background: rgb(32, 51, 70);
  box-shadow: 0 10px 10px rgba(59, 52, 52, 0.3);
  padding: 20px 40px;
  box-sizing: border-box;
  .title_box{
    .title{
      font-size: 32px;
    }
    .sub_title{
      font-size: 16px;
      letter-spacing: 1px;
      margin-top: 10px;
    }
  }
  #average-age-chart2 {
    width: 100%;
    height: 250px;
  }
}
</style>
