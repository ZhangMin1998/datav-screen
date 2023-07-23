import { onMounted, ref } from 'vue'
import { getUserData } from '@/api' // getMapData

export function useScreenData () {
  const color = ['rgb(59,129,140)', 'rgb(14, 176, 201)', 'rgb(41,183,203)', 'rgb(81,196,211)']
  const loading = ref(true)
  const userData = ref({})
  const ageData = ref([])
  onMounted(async () => {
    userData.value = await getUserData()
    console.log(userData)
    // userData.userToday = res.userToday
    // userData.userGrowthLastDay = res.userGrowthLastDay / 2
    // userData.userGrowthLastMonth = res.userGrowthLastMonth / 2
    // userData.averageAge = Number(res.averageAge)

    // ageData.value = userData.value.age
    userData.value.age.forEach((item, index) => {
      if (ageData.value[index]) {
        ageData.value[index] = {
          startValue: ageData.value[index].value, // 0
          value: item.value,
          axis: item.key,
          color: color[index]
        }
      } else {
        ageData.value.push({
          startValue: 0,
          value: item.value,
          axis: item.key,
          color: color[index]
        })
      }
    })
    console.log(ageData.value)

    setTimeout(() => {
      loading.value = false
    }, 1000)
  })

  return {
    loading,
    userData,
    ageData
  }
}
