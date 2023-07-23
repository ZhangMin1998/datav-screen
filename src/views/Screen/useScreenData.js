import { onMounted, ref, reactive } from 'vue'
import { getUserData } from '@/api' // getMapData

export function useScreenData () {
  const loading = ref(true)
  const userData = reactive({})
  const ageData = ref([])
  onMounted(async () => {
    const res = await getUserData()
    console.log(res)
    userData.userToday = res.userToday
    userData.userGrowthLastDay = res.userGrowthLastDay / 2
    userData.userGrowthLastMonth = res.userGrowthLastMonth / 2
    userData.averageAge = Number(res.averageAge)

    ageData.value = res.age

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
