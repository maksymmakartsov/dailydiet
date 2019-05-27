import Vue from 'vue'
import Router from 'vue-router'
import mainScreen from './components/mainScreen'
import gainWeight from './components/gainWeight'
import loseWeight from './components/loseWeight'
import recommendedCalc from './components/recommendedCalc'
import dailyMenu from './components/dailyMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: mainScreen
    },
    {
      path: '/gain-weight',
      name: 'gain-weight',
      component: gainWeight
    },
    {
      path: '/lose-weight',
      name: 'lose-weight',
      component: loseWeight
    },
    {
      path: '/calc-recommended/:type',
      name: 'calc-recommended',
      component: recommendedCalc,
      props: true
    },
    {
      path: '/daily-menu/:type/:recommendedCal',
      name: 'daily-menu',
      component: dailyMenu,
      props: true
    }
  ]
})
