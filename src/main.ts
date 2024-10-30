import { createApp } from 'vue'
import pinia from './stores'
import App from './App.vue'
import router from './router'
// console.log(ccc)

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
