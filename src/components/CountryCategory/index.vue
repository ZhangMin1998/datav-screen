<template>
  <div class="country_category">
    <div
      class="category"
      v-for="(item, index) in data"
      :key="index"
      @click="click(index)"
      @mouseenter="mouseIn(index)"
      @mouseleave="mouseOut"
    >
      <div class="select" v-if="index === selected" :style="{background: color[0]}">
        {{ item }}
      </div>
      <div class="hovered" v-else-if="index === hover" :style="{background: color[1]}">
        {{ item }}
      </div>
      <div v-else>
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
// /* eslint-disable */
import { ref, onMounted } from 'vue'

export default {
  name: 'country_category',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup (props) {
    const color = ref(['rgb(140, 160, 173)', 'rgb(25, 34, 51)'])
    const selected = ref(0)
    const hover = ref(-1)

    const click = (index) => {
      selected.value = index
    }
    const mouseIn = (index) => {
      hover.value = index
    }
    const mouseOut = () => {
      hover.value = -1
    }

    onMounted(() => {
      setInterval(() => {
        if (selected.value + 1 > props.data.length - 1) {
          selected.value = 0
        } else {
          selected.value++
        }
      }, 2000)
    })

    return {
      color,
      selected,
      hover,
      click,
      mouseIn,
      mouseOut
    }
  }
}
</script>

<style lang="scss" scoped>
.country_category{
  display: flex;
  width: 100%;
  height: 100%;
  background: rgb(32, 51, 70);
  .category{
    flex: 1;
    background: rgb(32, 51, 70);
    font-size: 24px;
    color: rgb(144, 160, 174);
    // .hovered {
    //   background: red;
    // }

    .select {
      background: rgb(140, 160, 173);
      color: #fff;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
