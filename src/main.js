import { createApp } from 'vue'
import App from './App.vue'

import hzyUi from './packages/index.js'

const app = createApp(App)

app.use(hzyUi).mount('#app')
