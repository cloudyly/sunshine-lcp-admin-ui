import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import SunshineUI from 'sunshine-lcp-ui'
import 'sunshine-lcp-ui/lib/sunshine-lcp-ui.css'

createApp(App).use(store)
  .use(SunshineUI)
  .use(router).mount('#app')
