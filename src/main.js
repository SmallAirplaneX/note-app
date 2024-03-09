import './assets/main.css'
import 'virtual:uno.css'

import App from './App.vue'
import { createApp } from 'vue'
import { setupStore } from '@/stores'
import { setupRouter } from '@/router'

async function bootstrap (){
    const app = createApp(App)
    setupStore(app)
    await setupRouter(app)
    app.mount('#app')
} 

bootstrap()
