<template>
  <div class="JiangSuMap">
    <div id="JiangSuMap-chart"></div>
  </div>
</template>

<script>
/* eslint-disable */
import { ref, onMounted } from 'vue'
import * as eCharts from 'echarts'
export default {
  name: 'JiangSuMap',
  props: {
    data: Object
  },
  setup () {
    const options = ref({

    })

    const update = () => {
      fetch('http://www.youbaobao.xyz/datav-res/datav/jiangsuMapData.json')
        .then(response => response.json())
        .then(data => {
          console.log(data)

          const center = {
            南京市: [118.767413, 32.041544],
            无锡市: [120.301663, 31.574729],
            徐州市: [117.184811, 34.261792],
            常州市: [119.946973, 31.772752],
            苏州市: [120.619585, 31.299379],
            南通市: [120.864608, 32.016212],
            连云港市: [119.178821, 34.600018],
            淮安市: [119.021265, 33.597506],
            盐城市: [120.139998, 33.377631],
            扬州市: [119.421003, 32.393159],
            镇江市: [119.452753, 32.204402],
            泰州市: [119.915176, 32.484882],
            宿迁市: [118.275162, 33.963008]
          }

          // 注册地图
          eCharts.registerMap('jiangsu', data)
          options.value = {
            geo: [{
              map: 'jiangsu',
              roam: false, // 是否允许鼠标滚轮缩放
              zoom: 1.1, // 默认显示级别
              scaleLimit: { // 缩放级别
                min: 0,
                max: 3
              },
              itemStyle: {
                normal: {
                  areaColor: '#013C62',
                  shadowColor: '#013C62',
                  shadowBlur: 20,
                  shadowOffsetX: -5,
                  shadowOffsetY: 15
                }
              },
              tooltip: {
                show: true
              }
            }],
            series: [{
              type: 'map',
              mapType: 'jiangsu',
              geoIndex: -1,
              zoom: 1.1, // 默认显示级别
              label: {
                show: true,
                color: '#ffffff',
                emphasis: {
                  color: '#fff',
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  borderColor: '#2980b9',
                  borderWidth: 1,
                  areaColor: '#12235c'
                },
                emphasis: {
                  areaColor: '#FA8C16',
                  borderWidth: 0,
                  color: 'green'
                }
              },
              data: Object.keys(center).map(name => {
                return {
                  name: name,
                  value: Math.random() * 100
                }
              })
            }]
          }
        }).catch(err => {
          console.log(err)
        }).finally(() => {
          let chart = null
          if (!chart) {
            chart = eCharts.init(document.getElementById('JiangSuMap-chart'))
          }
          console.log(options.value)
          chart.setOption(options.value)
        })
    }

    onMounted(() => {
      update()
    })

    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.JiangSuMap{
  width: 100%;
  height: 100%;
  #JiangSuMap-chart{
    width: 100%;
    height: 100%;
  }
}
</style>
