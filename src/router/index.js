import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import info from '@/components/info.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: "/info",
      name: "info",
      component: info
    }
  ]
})
