<template>
  <div class="center_header">
    <div class="item_box">
      <div class="item" v-for="(item, index) in headerData" :key="index">
        <div class="left">
          <div class="bg">
            <div class="img" :style="{backgroundImage: `url('${item.img}')`}"></div>
          </div>
        </div>
        <div class="right">
          <div class="title">{{ item.title }}</div>
          <div class="sub_title">{{ item.subTitle }}</div>
          <div class="total">
            <count-to
              :start-val="item.startVal"
              :end-val="item.endVal"
              :duration="1000"
              separator=","
              autoplay
            />
          </div>
        </div>
      </div>
    </div>
    <div class="project_box">
      <div class="project" v-for="(item, index) in project" :key="index">
        <div class="project_img">
          <img :src="item.img">
        </div>
        <div class="project_text">{{item.title}}</div>
        <div class="project_value">{{item.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  name: 'center_header',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {
    const project = ref([])
    const headerData = ref([])

    watch(() => props.data, (newVal, oldVal) => {
      project.value = [{
        title: '转化率',
        value: `${props.data.covertRate}%`,
        img: 'https://www.youbaobao.xyz/datav-res/success.png'
      }, {
        title: '退单率',
        value: `${props.data.returnRate}%`,
        img: 'https://www.youbaobao.xyz/datav-res/failed.png'
      }]

      headerData.value = [{
        title: '今日销售额',
        subTitle: 'Today\'s Sales Amount',
        startVal: (oldVal && oldVal.salesToday) || 0,
        endVal: newVal.salesToday,
        img: 'https://www.youbaobao.xyz/datav-res/money.png'
      }, {
        title: '今日订单量',
        subTitle: 'Today\'s Total Orders',
        startVal: (oldVal && oldVal.orderToday) || 0,
        endVal: newVal.orderToday,
        img: 'https://www.youbaobao.xyz/datav-res/order.png'
      }, {
        title: '今日交易用户数',
        subTitle: 'Today\'s Payed Users',
        startVal: (oldVal && oldVal.orderUser) || 0,
        endVal: newVal.orderUser,
        img: 'https://www.youbaobao.xyz/datav-res/member.png'
      }, {
        title: '今日新增用户数',
        subTitle: 'Today\'s New Users',
        startVal: (oldVal && oldVal.userToday) || 0,
        endVal: newVal.userToday,
        img: 'https://www.youbaobao.xyz/datav-res/follow.png'
      }]
    }, {
      immediate: true
    })
    return {
      project,
      headerData
    }
  }
}
</script>

<style lang="scss" scoped>
.center_header{
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(32, 51, 70);
  // box-shadow: 0 10px 10px rgba(59, 52, 52, 0.3);
  padding: 0 40px;
  box-sizing: border-box;
  .item_box{
    display: flex;
    .item{
      display: flex;
      // flex: 1;
      .left{
        .bg{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 185px;
          height: 185px;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-color: rgb(41, 183, 203);
          border-radius: 50%;
          .img{
            width: 60%;
            height: 60%;
            border-radius: 50%;
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
      }
      .right{
        // flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 40px;
        width: 410px;
        .title {
          font-size: 32px;
        }
        .sub_title {
          font-size: 16px;
          letter-spacing: 1px;
          margin-top: 10px;
        }
        .total {
          font-family: DIN;
          font-size: 56px;
          font-weight: bolder;
          letter-spacing: 2px;
          margin-top: 10px;
        }
      }
    }
  }
  .project_box{
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .project{
      display: flex;
      flex-direction: column;
      align-items: center;
      .project_img{
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .project_text{
        font-size: 18px;
        margin-top: 10px;
      }
      .project_value{
        font-size: 28px;
        font-weight: 700;
        margin-top: 5px;
      }
    }
  }
}
</style>
