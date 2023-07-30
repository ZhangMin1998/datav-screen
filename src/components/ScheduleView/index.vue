<template>
  <div class="schedule_view">
    <div id="schedule-view-chart" />
    <div class="bg1 bg" />
    <div class="bg2 bg" />
  </div>
</template>

<script>
/* eslint-disable */
import * as eCharts from 'echarts'
import { ref, onMounted, onBeforeUnmount } from 'vue'
export default {
  name: 'schedule_view',
  setup () {
    let task
    const chart = ref(null)
    const getVirtualData = (year) => {
      year = year || '2023'
      const date = +eCharts.number.parseDate(year + '-03-01')
      const end = +eCharts.number.parseDate(+year + 1 + '-10-31')
      const dayTime = 3600 * 24 * 1000
      const data = []
      for (let time = date; time < end; time += dayTime) {
        data.push([
          eCharts.format.formatTime('yyyy-MM-dd', time),
          Math.floor(Math.random() * 10000)
        ])
      }
      return data
    }

    const initChart = () => {
      const data = getVirtualData(2023)
      const option = {
        calendar: [{
          top: 30,
          left: 80,
          right: 40,
          bottom: 10,
          range: ['2023-03-01', '2023-10-31'],
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgb(127, 127, 127)'
            }
          },
          yearLabel: { show: false },
          dayLabel: {
            color: 'rgb(127, 127, 127)',
            fontSize: 18
          },
          monthLabel: {
            color: 'rgb(127, 127, 127)',
            fontSize: 18
          },
          itemStyle: {
            color: 'rgb(48, 48, 48)',
            borderWidth: 1,
            borderColor: 'rgb(48, 48, 48)'
          }
        }],
        series: [
          {
            name: '步数',
            type: 'scatter',
            coordinateSystem: 'calendar',
            data: data,
            symbolSize: function(val) {
              return val[1] / 600
            },
            itemStyle: {
              color: 'rgb(14, 176, 201)'
            }
          },
          {
            name: 'Top 12',
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            data: data.sort(function(a, b) {
              return b[1] - a[1]
            }).slice(0, 12),
            symbolSize: function(val) {
              return val[1] / 500
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            itemStyle: {
              color: 'rgb(14, 176, 201)',
              shadowBlur: 10,
              shadowColor: '#333'
            },
            zlevel: 1
          }
        ]
      }
      if (!chart.value) {
        chart.value = eCharts.init(document.getElementById('schedule-view-chart'))
      }
      chart.value.setOption(option)
    }

    onMounted(() => {
      initChart()
      task = setInterval(() => {
        // initChart()
      }, 2000)
    })
    onBeforeUnmount(() => {
      if (task) {
        clearInterval(task)
      }
    })
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.schedule_view{
  width: 100%;
  height: 100%;
  background-color: #203346;
  padding: 20px 0;
  box-sizing: border-box;

  #schedule-view-chart {
    width: 100%;
    height: 100%;
  }
  .bg{
    width: 100%;
    height: 20px;
    background: #334061;
  }
  .bg1{
    position: absolute;
    top: 0;
    left: 0;
  }
  .bg2{
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
