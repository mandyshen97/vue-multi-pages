import Vue from 'vue'
import Home from './home.vue'
import router from '../../router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#homeDiv',
  router,
  components: { Home },
  template: '<Home/>'
})
