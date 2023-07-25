<template>
  <div class="total_gender">
    <div class="title_box">
      <div class="left">
        <img src="http://img.alicdn.com/tfs/TB1p9Luq8v0gK0jSZKbXXbK2FXa-500-500.png">
      </div>
      <div class="right">
        <div class="title">男性用户人数</div>
          <div class="sub_title">Number of male users</div>
          <div class="age">
            <count-to
              :start-val="startMale"
              :end-val="endMale"
              :duration="1000"
            />
          <span class="age_unit">万人</span>
        </div>
      </div>
    </div>
    <div class="title_box">
      <div class="left">
        <img src="http://img.alicdn.com/tfs/TB1p9Luq8v0gK0jSZKbXXbK2FXa-500-500.png">
      </div>
      <div class="right">
        <div class="title">女性用户人数</div>
          <div class="sub_title">Number of female users</div>
          <div class="age">
            <count-to
              :start-val="startFemale"
              :end-val="endFemale"
              :duration="1000"
            />
          <span class="age_unit">万人</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'total_gender',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup (props) {
    const startMale = ref(0)
    const endMale = ref(0)
    const startFemale = ref(0)
    const endFemale = ref(0)

    watch(() => props.data, (newData) => {
      startMale.value = endMale.value
      endMale.value = newData[0].value
      startFemale.value = endFemale.value
      endFemale.value = newData[1].value
    })

    return {
      startMale,
      endMale,
      startFemale,
      endFemale
    }
  }
}
</script>

<style lang="scss" scoped>
.total_gender{
  width: 100%;
  height: 100%;
  background: rgb(32, 51, 70);
  box-shadow: 0 10px 10px rgba(59, 52, 52, 0.3);
  padding: 20px 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .title_box{
    display: flex;
    .left{
      img {
        width: 75px;
        height: 75px;
      }
    }
    .right{
      margin-left: 35px;
      .title{
        font-size: 32px;
      }
      .sub_title{
        font-size: 16px;
        letter-spacing: 1px;
        margin-top: 10px;
      }
      .age{
        font-size: 49px;
        font-family: DIN;
        font-weight: bold;
        margin-top: 10px;
        .age_unit{
          font-size: 20px;
        }
      }
    }
  }
}
</style>
