import { createApp } from 'vue'
import pinia from '@/store/index'
import './style.css'
import './assets/less/style.less'
import App from './App.vue'
import router from './router/index'
import DataVVue3 from '@kjgl77/datav-vue3'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'



const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(DataVVue3)



app.mount('#app')


