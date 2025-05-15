import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 实例化 Vue 应用
const app = createApp(App)

// UI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 去掉默认的样式
import 'normalize.css';
// 加载自己的样式
import './assets/styles/index.scss';

// 国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'


app.use(ElementPlus,{
  locale: zhCn,
})
app.use(router)
app.mount('#app')
