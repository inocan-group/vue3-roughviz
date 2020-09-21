import Vue, { VNode } from 'vue'
import Dev from './serve.vue'
import VueCompositionApi from '@vue/composition-api'

Vue.config.productionTip = false

Vue.use(VueCompositionApi)

new Vue({
  render: (h): VNode => h(Dev),
}).$mount('#app')
