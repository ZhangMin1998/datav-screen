<template>
  <div class="top_header">
    <img
      class="logo"
      src="https://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/54149aa06f26afcf26f42d66c999ee8b.png"
    />
    <div class="logo_text">
      <div class="cn_text">深圳外卖产业数据大盘</div>
      <div class="en_text">Shenzhen Delivery Overview of Business Data</div>
    </div>
    <div class="right_text">
      <div class="right_logo">
        <datav-loading width="100" height="100"></datav-loading>
      </div>
      <!-- <img
        class="right_logo"
        src="https://img.alicdn.com/tfs/TB1Kbzuq.z1gK0jSZLeXXb9kVXa-600-500.png"
      /> -->
      <div class="date">{{ date }}</div>
      <div class="time">{{ time }}</div>
    </div>
  </div>
</template>

<script>
import { clock as useClock } from '@/utils/clock'
// import { getUserData } from '@/api/index'

export default {
  name: 'topHeader',
  setup () {
    const { date, time } = useClock()

    // const init = async () => {
    //   const res = await getUserData()
    //   console.log(res)
    // }
    // init()

    return {
      date,
      time
    }
  }
}
</script>

<style lang="scss" scoped>
.top_header{
  width: 100%;
  height: 100%;
  padding: 0 64px;
  box-sizing: border-box;
  background: rgb(25, 34, 51);
  display: flex;
  align-items: center;
  .logo {
    width: 395px;
    height: 99px;
  }
  .logo_text {
    flex: 1;
    margin-left: 40px;
    .cn_text {
      color: rgb(255, 255, 255);
      font-weight: bold;
      font-size: 60px;
      letter-spacing: 2px;
    }
    .en_text {
      color: rgb(255, 255, 255);
      font-size: 35px;
      letter-spacing: 1px;
      font-family: 'Verdana';
    }
  }
  .right_text {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 363px;
      height: 150px;
    }
    .right_logo{
      :deep(.loading_content) {
        margin-top: 0;
      }
    }

    .date {
      width: 330px;
      text-align: right;
      font-size: 52px;
      color: rgb(255, 255, 255);
      font-family: DIN;
      font-weight: 500;
    }
    .time {
      width: 220px;
      font-size: 52px;
      color: rgb(36, 134, 185);
      font-family: DIN;
      font-weight: 500;
      margin-left: 30px;
    }
  }
}
</style>
