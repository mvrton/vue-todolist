import { createApp } from 'vue'
import './assets/style.css'
import i18n from './i18n.js'
import App from './App.vue'

const app = createApp(App)
app.use(i18n)
app.mount('#app')