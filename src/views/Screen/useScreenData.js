import { onMounted, ref, reactive } from 'vue'
import { getUserData } from '@/api' // getMapData

export function useScreenData () {
  const loading = ref(true)
  const userData = reactive({})
  onMounted(async () => {
    const res = await getUserData()
    console.log(res)
    userData.userToday = res.userToday
    userData.userGrowthLastDay = res.userGrowthLastDay
    userData.userGrowthLastMonth = res.userGrowthLastMonth

    setTimeout(() => {
      loading.value = false
    }, 1000)
  })

  return {
    loading,
    userData
  }
}
