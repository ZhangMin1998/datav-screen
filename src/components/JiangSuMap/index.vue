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
          const _center = []
          data.features.forEach(item => {
            if (item.properties) {
              _center.push({
                key: item.properties.name,
                value: item.properties.center
              })
            }
          })

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
            visualMap: {
              show: true,
              max: 100,
              hoverLink: true,
              seriesIndex: [0],
              inRange: {
                color: ['#A5DCF4', '#0f85f4']
              }
            },
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
            series: [
              {
                type: 'map',
                map: 'jiangsu',
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
              },
              {
                type: 'effectScatter',
                coordinateSystem: 'geo', // 使用的坐标系
                z: 5, // z值小的图形会被z值大的图形覆盖
                symbolSize: 14, // 标记的大小
                data: [{value: _center[0].value, city: _center[0].key}],
                itemStyle: {
                  color: '#feae21'
                },
                label: {
                  normal: {
                    show: true,
                    formatter: function (params) {
                      return '{fline|地点：' + params.data.city + '}\n{tline|' + (params.data.info || '发生xx集件') + '}'
                    },
                    position: 'top',
                    backgroundColor: 'rgba(254,174,33,.8)',
                    padding: [0, 0],
                    borderRadius: 3,
                    lineHeight: 32,
                    color: '#f7fafb',
                    rich: {
                      fline: {
                        padding: [0, 10, 10, 10],
                        color: '#fff'
                      },
                      tline: {
                        padding: [10, 10, 0, 10],
                        color: '#fff'
                      }
                    }
                  },
                  emphasis: {
                    show: true
                  }
                }
              },
              {
                type: 'effectScatter',
                coordinateSystem: 'geo', // 使用的坐标系
                z: 5, // z值小的图形会被z值大的图形覆盖
                symbolSize: 14, // 标记的大小
                data: [{value: _center[1].value, city: _center[1].key}],
                itemStyle: {
                  color: '#e93f42'
                },
                label: {
                  normal: {
                    show: true,
                    formatter: function (params) {
                      return '{fline|地点：' + params.data.city + '}\n{tline|' + (params.data.info || '发生xx集件') + '}'
                    },
                    position: 'top',
                    backgroundColor: 'rgba(233,63,66,.9)',
                    padding: [0, 0],
                    borderRadius: 3,
                    lineHeight: 32,
                    color: '#ffffff',
                    rich: {
                      fline: {
                        padding: [0, 10, 10, 10],
                        color: '#fff'
                      },
                      tline: {
                        padding: [10, 10, 0, 10],
                        color: '#fff'
                      }
                    }
                  },
                  emphasis: {
                    show: true
                  }
                }
              },
              {
                type: 'effectScatter',
                coordinateSystem: 'geo', // 使用的坐标系
                z: 5, // z值小的图形会被z值大的图形覆盖
                symbolSize: 14, // 标记的大小
                data: [{value: _center[2].value, city: _center[2].key}],
                itemStyle: {
                  color: '#08baec'
                },
                label: {
                  normal: {
                    show: true,
                    formatter: function (params) {
                      return '{fline|地点：' + params.data.city + '}\n{tline|' + (params.data.info || '发生xx集件') + '}'
                    },
                    position: 'top',
                    backgroundColor: 'rgba(8,186,236,.9)',
                    padding: [0, 0],
                    borderRadius: 3,
                    lineHeight: 32,
                    color: '#ffffff',
                    rich: {
                      fline: {
                        padding: [0, 10, 10, 10],
                        color: '#fff'
                      },
                      tline: {
                        padding: [10, 10, 0, 10],
                        color: '#fff'
                      }
                    }
                  },
                  emphasis: {
                    show: true
                  }
                }
              }
            ]
          }
        }).catch(err => {
          console.log(err)
        }).finally(() => {
          let chart = null
          if (!chart) {
            chart = eCharts.init(document.getElementById('JiangSuMap-chart'))
          }
          // console.log(options.value)
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
