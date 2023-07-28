<template>
  <div class="total_user">
    <div class="title">深圳外卖用户总数</div>
    <div class="sub_title">User Total Count</div>
    <div class="total">
      <count-to
        :start-val="startVal"
        :end-val="Number(todayUser)"
        :duration="1000"
        separator=","
        autoplay
      />
    </div>
    <div class="percent-text">
      <span class="percent-text-1">每日增长率:
        <count-to
        :start-val="startPercent"
        :end-val="Number(growthLastDay)"
        :duration="1000"
        suffix="%"
        :decimals="2"
        autoplay
      />
      </span>
      <span class="percent-text-2">每月增长率:
        <count-to
        :start-val="startPercent2"
        :end-val="Number(growthLastMonth)"
        :duration="1000"
        suffix="%"
        :decimals="2"
        autoplay
      />
      </span>
    </div>
    <div class="percent">
      <div class="percent_inner_wrapper">
        <div class="pecent_inner" :style="{width: `${growthLastDay}%`}"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  name: 'totalUser',
  props: {
    todayUser: Number,
    growthLastDay: {
      type: [Number, String],
      default: 0
    },
    growthLastMonth: {
      type: [Number, String],
      default: 0
    }
  },
  setup (props) {
    const startVal = ref(0)
    const startPercent = ref(0)
    const startPercent2 = ref(0)

    watch(() => props.todayUser, (newVal, oldVal) => {
      startVal.value = oldVal || 0
    })
    watch(() => props.growthLastDay, (newVal, oldVal) => {
      startPercent.value = oldVal || 0
    })
    watch(() => props.growthLastMonth, (newVal, oldVal) => {
      startPercent2.value = oldVal || 0
    })
    return {
      startVal,
      startPercent,
      startPercent2
    }
  }
}
</script>

<style lang="scss" scoped>
.total_user{
  width: 100%;
  height: 100%;
  background: rgb(32, 51, 70);
  box-shadow: 0 10px 10px rgba(59, 52, 52, 0.3);
  padding: 20px 40px;
  box-sizing: border-box;
  .title{
    font-size: 32px;
  }
  .sub_title{
    font-size: 16px;
    letter-spacing: 1px;
    margin-top: 10px;
  }
  .total{
    font-size: 68px;
    font-weight: bolder;
    font-family: DIN;
    letter-spacing: 2px;
    padding: 10px 0;
  }
  .percent-text{
    font-size: 28px;
    font-family: DIN;
    letter-spacing: 2px;
    .percent-text-1{
      color: rgb(34, 162, 195);
    }
    .percent-text-2{
      color: rgb(36, 134, 185);
      margin-left: 20px;
    }
  }
  .percent{
    width: 100%;
    height: 20px;
    box-sizing: border-box;
    border: 1px solid #fff;
    margin-top: 10px;
    .percent_inner_wrapper{
      height: 100%;
      padding: 2px;
      box-sizing: border-box;
      overflow: hidden;
      .pecent_inner{
        height: 100%;
        background: rgb(150, 150, 150);
        transition: all 1s linear;
      }
    }
  }
}
</style>
