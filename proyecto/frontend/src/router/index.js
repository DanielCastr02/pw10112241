import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientesView from '../views/ClientesView.vue'
import CreateClienteView from '../views/CreateClienteView.vue'
import EditClienteView from '../views/EditClienteView.vue'
import RegistroView from '../views/RegistroView.vue'
import EntradaView from '../views/EntradaView.vue'
import NoAutorizaView from '../views/NoAutorizaView.vue'
import { getAuth } from 'firebase/auth'
import { record } from 'zod'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: ClientesView,
      meta:{
        requiereAuth: true
      }
    },
    {
      path: '/clientes/create',
      name: 'createclientes',
      component: CreateClienteView
    },
    {
      path: '/clientes/:id/edit',
      name: 'editcliente',
      component: EditClienteView
    },
    {
      path: '/clientes/registro',
      name: 'registro',
      component: RegistroView
    },
    {
      path: '/clientes/entrada',
      name: 'Entrada',
      component: EntradaView
    },
    {
      path: '/clientes/noautoriza',
      name: 'noautoriza',
      component: NoAutorizaView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

//Analizamos todas las rutas antes de que se ejecuten
router.beforeEach((to, from, next) => {
  if(to.matched.some((record) => record.meta.requiereAuth)){
    if(getAuth().currentUser){
      next(); //continua sin problemas
    }else{
      next("/clientes/noautoriza")
    }
  }else{ //si no tiene la etiqueta meta
    next();
  }
})

export default router
