import { App } from 'vue'
import chooseDate from './src/index.vue'

// 导出当前组件，实现通过 app.use() 方法按需加载当前组件
export default {
  install(app: App) {
    app.component('m-choose-date', chooseDate)
  },
}
