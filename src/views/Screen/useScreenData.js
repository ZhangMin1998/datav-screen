import { ref, onMounted, onUnmounted } from 'vue'
import { getUserData, getMapData } from '@/api' // getMapData

export function useScreenData () {
  let timeId = null
  const color = ['rgb(59,129,140)', 'rgb(14, 176, 201)', 'rgb(41,183,203)', 'rgb(81,196,211)']
  const loading = ref(true)
  const userData = ref({})
  const ageData = ref([])
  const deviceData = ref({})
  const mapData = ref({})
  const realTimeOrder = ref({ date: [], data: [] })
  const getNowTime = () => {
    const now = new Date()
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
  }

  const createData = async () => {
    userData.value = await getUserData()
    userData.value.age.forEach((item, index) => {
      if (ageData.value[index]) {
        ageData.value[index] = {
          startValue: ageData.value[index].value,
          value: item.value,
          axis: item.key,
          color: color[index]
        }
        ageData.value = [...ageData.value]
      } else {
        ageData.value.push({
          startValue: 0,
          value: item.value,
          axis: item.key,
          color: color[index]
        })
      }
    })
    deviceData.value = {
      totalDevices: userData.value.totalDevices,
      devices: userData.value.devices
    }
    realTimeOrder.value = {
      date: [...realTimeOrder.value.date, getNowTime()],
      data: [...realTimeOrder.value.data, userData.value.realTimeOrder]
    }
  }

  const screenReady = () => {
    setTimeout(async () => {
      loading.value = true
      mapData.value = await getMapData()
      await createData()
      loading.value = false
    }, 1000)
    timeId = setInterval(async () => {
      await createData()
    }, 5000)
  }

  onMounted(async () => {
    screenReady()
  })
  onUnmounted(() => {
    if (timeId) clearInterval(timeId)
  })

  return {
    loading,
    userData,
    ageData,
    deviceData,
    mapData,
    realTimeOrder
  }
}
