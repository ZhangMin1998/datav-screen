<template>
  <div class="total_device">
    <!-- 南丁格尔图 -->
    <div class="total_device_left">
      <div id="total-device-chart" />
    </div>
    <div class="total_device_right">
      <div class="title_box">
        <div class="left">
          <div class="title">深圳外卖登录设备</div>
          <div class="sub_title">Distribution of Internet devices</div>
        </div>
        <div class="right">
          <div class="sum">
            <count-to
              :startVal="startNum"
              :endVal="num"
              :duration="1000"
            />
            <span class="sum_unit">台</span>
          </div>
        </div>
      </div>
      <div class="average_data_box">
      <div class="average_data" v-for="(item, index) in refData" :key="index">
        <div class="average_data_value">
          <count-to
            :startVal="item.startValue"
            :endVal="item.value"
            :duration="1000"
          />
        </div>
        <div class="average_data_axis">
          <div class="point" :style="{background: item.color}" />
          <div class="text">{{ item.axis }}</div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import * as eCharts from 'echarts'

export default {
  name: 'total_device',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {
    let chart = null
    const startNum = ref(0)
    const num = ref(0)
    const refData = ref([])
    const color = ['rgb(59,129,140)', 'rgb(14, 176, 201)', 'rgb(41,183,203)', 'rgb(81,196,211)']

    const initChart = () => {
      const option = {
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '70%',
          selectedMode: 'multiple',
          selectedOffset: 10,
          clockwise: true,
          center: ['50%', '50%'],
          color,
          emphasis: {
            itemStyle: {
              color: 'rgb(87,195,194)'
            }
          },
          data: refData.value,
          roseType: 'radius',
          label: {
            show: false
          }
        }]
      }
      if (!chart) {
        chart = eCharts.init(document.getElementById('total-device-chart'))
      }
      chart.setOption(option)
    }

    watch(() => props.data, (newVal) => {
      if (refData.value.length > 0) {
        refData.value = newVal.devices.map((item, index) => ({
          startValue: refData.value[index].value,
          value: item.value,
          name: item.key,
          color: color[index]
        }))
      } else {
        refData.value = newVal.devices.map((item, index) => ({
          startValue: 0,
          value: item.value,
          name: item.key,
          color: color[index]
        }))
      }
      startNum.value = num.value
      num.value = props.data.totalDevices
      initChart()
    })
    onMounted(() => {
      refData.value = props.data.devices.map((item, index) => ({
        startValue: 0,
        value: item.value,
        name: item.key,
        color: color[index]
      }))
      num.value = props.data.totalDevices
      initChart()
    })
    return {
      startNum,
      num,
      refData
    }
  }
}
</script>

<style lang="scss" scoped>
.total_device{
  display: flex;
  width: 100%;
  height: 100%;
  background: rgb(32, 51, 70);
  box-shadow: 0 10px 10px rgba(59, 52, 52, 0.3);
  // padding: 20px 40px;
  // box-sizing: border-box;
  .total_device_left{
    width: 29.8%;
    height: 100%;
    // background-color: aqua;
    #total-device-chart {
      width: 100%;
      height: 100%;
    }
  }
  .total_device_right{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px 20px 40px 0;
    .title_box{
      display: flex;
      align-items: center;
      .left{
        .title {
          font-size: 32px;
        }
        .sub_title {
          font-size: 16px;
          margin-top: 10px;
        }
      }
      .right{
        flex: 1;
        margin-left: 30px;
        font-weight: bold;
        .sum{
          font-size: 56px;
          font-family: DIN;
          .sum_unit{
            font-size: 20px;
          }
        }
      }
    }
    .average_data_box{
      display: flex;
    }
  }
  .average_data_box{
    display: flex;
    .average_data{
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      font-weight: bolder;
      .average_data_value{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      .average_data_axis{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 5px;
        .point {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .text {
          margin-left: 10px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
