import './assets/main.css'
import 'virtual:uno.css'


import App from './App.vue'
import { createApp } from 'vue'
import { setupStore } from '@/stores'
import { setupRouter } from '@/router'
import { VueShowdown } from 'vue-showdown';
async function bootstrap (){
    const app = createApp(App)
    setupStore(app)
    await setupRouter(app)
    app.component('VueShowdown', VueShowdown);
    app.mount('#app')
} 

bootstrap().then(r => {})
