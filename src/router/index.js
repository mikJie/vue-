import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/content/home'
import header from '@/components/header/header'
import Page1 from '@/components/content/Page1'
import Page2 from '@/components/content/Page2'
import Page3 from '@/components/content/Page3'
import Page4 from '@/components/content/Page4'
import Page5 from '@/components/content/Page5'
Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        name: 'home',
        component: home,
        children:[
          {
            path: '/Page1',
            name: 'Page1',
            component: Page1,
            meta: {
              keepAlive: false 
            }
      
          },
          {
            path: '/Page2',
            name: 'Page2',
            component: Page2,
            meta: {
              keepAlive: true 
            }
          },
          {
            path: '/Page3',
            name: 'Page3',
            component: Page3,
            meta: {
              keepAlive: false 
            }
          },
          {
            path: '/Page4',
            name: 'Page4',
            component: Page4,
            meta: {
              keepAlive: true 
            }
          },
          {
            path: '/Page5',
            name: 'Page5',
            component: Page5,
            meta: {
              keepAlive: false 
            }
          }
        ]
      },
      {
        path: '/header',
        name: 'header',
        component: header,
      },
      
    ]
})
