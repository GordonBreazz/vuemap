import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Filials from '../views/Filials.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/events',
    name: 'Events',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Events.vue')
  },

  {
    path: '/filial/:id',
    name: 'Filials',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Filials,
    props: (route) => ({ fId: Number(route.params.id), frm: route.query.q })
  },

  {
    // сопоставляется со всеми остальными маршрутами
    path: '/404',
    name: '404',
    component: 404,
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')    
  },
  
  { 
    path: '*', 
    redirect: '/404' 
  }

]
const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }

})

router.beforeEach((to, from, next) => {
  console.log(from, to)
  //if (from.name == 'Filials' && to.name == "Home") next(false)
   // else 
   next()
});

export default router
