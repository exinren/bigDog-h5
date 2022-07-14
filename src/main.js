import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import axios from "axios"
import lodash from "lodash"

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$lodash = lodash
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')
