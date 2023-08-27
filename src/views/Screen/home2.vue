<template>
  <div class="home">
    <datav-loading width="100" height="100" v-if="loading">
      <div class="loading_text">
        数据大屏加载中...
      </div>
    </datav-loading>
    <Container :options="{}" v-else>
      <div class="header">
        <top-header></top-header>
      </div>
      <div class="separator-wrapper"></div>
      <div class="center">
        <div class="left">
          <div class="left1">
            total-user
          </div>
          <div class="left2">
            average-age
          </div>
          <div class="left3">
            total-device
          </div>
          <div class="left4">
            total-gender
          </div>
          <div class="left5">
            line-chart
          </div>
          <div class="left6">
            bar-chart
          </div>
        </div>
        <div class="right">
          <div class="right_top1">
            center-header
          </div>
          <div class="right_top2">
            country-category
          </div>
          <div class="right_bottom">
            <div class="right_left">
              <div class="right_left1">
                <earth :data="mapData" />
              </div>
              <div class="right_left2">
                country-category
              </div>
              <div class="right_left3">
                <datav-fly-box :duration="2">
                  average-view
                </datav-fly-box>
              </div>
              <div class="right_left4">
                schedule-view
              </div>
            </div>
            <div class="right_right">
              <div class="right_right1">
                right-top1
              </div>
              <div class="right_right2">
                activate-user
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
/* eslint-disable */
// import { ref } from 'vue'
import { useScreenData } from './useScreenData'
import Earth from '@/components/JiangSuMap/index'

export default {
  name: 'HomeView',
  components: {
    Earth
  },
  setup () {
    const { loading, userData, ageData, deviceData, realTimeOrder, mapData } = useScreenData()
    console.log('home', realTimeOrder)

    return {
      loading,
      userData,
      ageData,
      deviceData,
      realTimeOrder,
      mapData
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgb(6, 9, 19);
  color: #fff;
  font-size: 24px;
  #datav_container{
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
    width: 100%;
    height: 100%;
    .header {
      width: 100%;
      height: 83px;
    }
    .separator-wrapper {
      height: 5px;
      width: 100%;
      background: rgb(53, 62, 80);
      filter: blur(0px);
    }
    .center{
      flex: 1;
      display: flex;
      .left{
        flex: 0 0 430px;
        display: flex;
        flex-direction: column;
        width: 430px;
        height: 100%;
        margin: 0 5px;
        // padding-bottom: 20px;
        box-sizing: border-box;
        background: rgb(51, 64, 97);
        .left1, .left2, .left3, .left4, .left5, .left6 {
          padding-bottom: 10px;
        }
        .left1{
          height: 150px;
        }
        .left2{
          height: 150px;
        }
        .left3{
          height: 140px;
          // background: grey;
        }
        .left4{
          height: 132px;
          // background: grey;
        }
        .left5{
          height: 180px;
          // background: grey;
        }
        .left6{
          height: 180px;
          // background: grey;
        }
      }
      .right{
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0 5px;
        max-width: 1480px;
        overflow: hidden;
        .right_top1{
          width: 100%;
          height: 103px;
          background: grey;
          margin-bottom: 10px;
        }
        .right_top2 {
          width: 100%;
          height: 24px;
          margin-bottom: 10px;
        }
        .right_bottom{
          flex: 1;
          display: flex;
          .right_left{
            display: flex;
            flex-direction: column;
            width: 958px;
            .right_left1{
              height: 500px;
              // background-color: #333;
            }
            .right_left2{
              height: 40px;
              box-sizing: border-box;
              padding-top: 10px;
            }
            .right_left3{
              height: 175px;
              margin-top: 5px;
            }
            .right_left4{
              height: 110px;
              margin-top: 5px;
              background-color: #666;
            }
          }
          .right_right{
            flex: 1;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 10px;
            // margin-right: 20px;
            .right_right1{
              width: 100%;
              height: 500px;
              // padding-right: 10px;
              box-sizing: border-box;
            }
            .right_right2{
              width: 100%;
              height: 325px;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
