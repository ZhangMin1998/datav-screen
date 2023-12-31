import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import datav from 'datav-screen-zm'
// import dataView from '@jiaminghi/data-view'
// 先不做按需加载
// import datavComponent from 'imooc-datav-libs-dev'
// import datav from 'datav-screen-libs'
// import datavTestComponent from 'datav-screen-libs/src/components/Test/index'
// import datavTestComponent2 from 'datav-screen-libs/src/components/Test2/index'
import VueECharts from 'vue-echarts'
import countTo from 'vue3-count-to'
// app.js 19.61kib (3个组件 未按需加载)
// app.js 19.53kib (1个组件 未按需加载)
// app.js 17.49kib (1个组件 按需加载)
createApp(App)
  .use(store)
  .use(router)
  // .use(dataView)
  .use(datav)
  .use(countTo)
  .component('vue-echarts', VueECharts)
  .mount('#app')
