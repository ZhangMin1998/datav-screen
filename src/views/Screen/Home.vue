<template>
  <div class="home">
    <!-- <Container :options="{ width: 3840, height: 2160 }">
      <div class="test">111</div>
    </Container> -->
    <datav-loading width="100" height="100" v-if="loading">
      <div class="loading_text">
        数据大屏加载中...
      </div>
    </datav-loading>
    <Container :options="{width: 3840, height: 2160}" v-else>
      <div class="header">
        <top-header></top-header>
      </div>
      <div class="separator-wrapper"></div>
      <div class="center">
        <div class="left">
          <div class="left1">
            <total-user
              ref="totalUser"
              :today-user="userData.userToday"
              :growth-last-day="+userData.userGrowthLastDay"
              :growth-last-month="+userData.userGrowthLastMonth"
            ></total-user>
          </div>
          <div class="left2">
            <average-age
              ref="averageAge"
              :data="ageData"
              :avgAge="userData.averageAge"
            ></average-age>
          </div>
          <div class="left3">
            <total-device :data="deviceData"></total-device>
          </div>
          <div class="left4">
            <total-gender :data="userData.gender"></total-gender>
          </div>
          <div class="left5">
            <line-chart :data="userData.rider"></line-chart>
          </div>
          <div class="left6">
            <bar-chart :data="userData.category" />
          </div>
        </div>
        <div class="right">
          <div class="right_top1">
            <center-header :data="userData"></center-header>
          </div>
          <div class="right_top2">
            <country-category :data="['ALL', '北京', '上海', '深圳', '杭州', '南京', '武汉']"></country-category>
          </div>
          <div class="right_bottom">
            <div class="right_left">
              <div class="right_left1">
                666
              </div>
              <div class="right_left2">
                <country-category :data="['订单量', '销售额', '用户数', '退单量']"></country-category>
              </div>
              <div class="right_left3">
                <average-view :data="realTimeOrder"></average-view>
              </div>
              <div class="right_left4">
                666
              </div>
            </div>
            <div class="right_right">

            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
// import { ref } from 'vue'
import TopHeader from '@/components/TopHeader/index.vue'
import { useScreenData } from './useScreenData'
import TotalUser from '@/components/TotalUser'
import AverageAge from '@/components/AverageAge'
import TotalDevice from '@/components/TotalDevice'
import TotalGender from '@/components/TotalGender'
import LineChart from '@/components/LineChart'
import BarChart from '@/components/BarChart'
import CenterHeader from '@/components/CenterHeader'
import CountryCategory from '@/components/CountryCategory'
import AverageView from '@/components/AverageView'

export default {
  name: 'HomeView',
  components: {
    TopHeader,
    TotalUser,
    AverageAge,
    TotalDevice,
    TotalGender,
    LineChart,
    BarChart,
    CenterHeader,
    CountryCategory,
    AverageView
  },
  setup () {
    const { loading, userData, ageData, deviceData, realTimeOrder } = useScreenData()
    console.log('home', realTimeOrder)

    return {
      loading,
      userData,
      ageData,
      deviceData,
      realTimeOrder
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  // .test{
  //   width: 100px;
  //   height: 100px;
  //   background: pink;
  //   font-size: 24px;
  //   color: #000;
  //   transform: scale(1, 1);
  // }
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgb(6, 9, 19);
  color: #fff;
  font-size: 48px;
  #datav_container{
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
    width: 100%;
    height: 100%;
    .header {
      width: 100%;
      height: 167px;
    }
    .separator-wrapper {
      height: 10px;
      width: 100%;
      background: rgb(53, 62, 80);
      filter: blur(0px);
    }
    .center{
      flex: 1;
      display: flex;
      .left{
        flex: 0 0 860px;
        display: flex;
        flex-direction: column;
        width: 860px;
        height: 100%;
        margin: 0 10px;
        // padding-bottom: 20px;
        box-sizing: border-box;
        background: rgb(51, 64, 97);
        .left1, .left2, .left3, .left4, .left5, .left6 {
          padding-bottom: 20px;
        }
        .left1{
          height: 300px;
        }
        .left2{
          height: 300px;
        }
        .left3{
          height: 280px;
          // background: grey;
        }
        .left4{
          height: 230px;
          // background: grey;
        }
        .left5{
          height: 360px;
          // background: grey;
        }
        .left6{
          height: 360px;
          // background: grey;
        }
      }
      .right{
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0 10px;
        max-width: 2960px;
        overflow: hidden;
        .right_top1{
          width: 100%;
          height: 206px;
          background: grey;
          margin-bottom: 20px;
        }
        .right_top2 {
          width: 100%;
          height: 48px;
          margin-bottom: 20px;
        }
        .right_bottom{
          flex: 1;
          display: flex;
          .right_left{
            display: flex;
            flex-direction: column;
            width: 1917px;
            .right_left1{
              height: 999px;
              background-color: #333;
            }
            .right_left2{
              height: 80px;
              box-sizing: border-box;
              padding-top: 20px;
            }
            .right_left3{
              height: 350px;
              margin-top: 10px;
            }
            .right_left4{
              height: 220px;
              margin-top: 10px;
              background-color: #666;
            }
          }
          .right_right{
            flex: 1;
            background-color: aqua;
          }
        }
      }
    }
  }
}
</style>
