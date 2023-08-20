import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharaView from "../views/CharaView.vue";
import ResidentView from "@/views/ResidentView.vue";
import ManageView from "@/views/ManageView.vue";
import IndexView from "@/views/Manage/IndexView.vue";
import AnimalView from "@/views/Manage/AnimalView.vue";
import PlantView from "@/views/Manage/PlantView.vue";
import MiningView from "@/views/Manage/MiningView.vue";
import AnglingView from "@/views/Manage/AnglingView.vue";
import FestivalView from "@/views/FestivalView.vue";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/chara',
    name: 'chara',
    component: CharaView
  },
  {
    path: '/resident',
    name: 'resident',
    component: ResidentView
  },
  {
    path: '/manage',
    name: 'manage',
    component: ManageView,
    children: [
      {
        path: '',
        component: IndexView
      },
      {
        path: 'animal',
        component: AnimalView
      },
      {
        path: 'plant',
        component: PlantView
      },
      {
        path: 'mining',
        component: MiningView
      },
      {
        path: 'angling',
        component: AnglingView
      },
    ]
  },
  {
    path: '/festival',
    name: 'festival',
    component: FestivalView
  },
]

const router = createRouter({
  history: createWebHistory('/game-raiders-test/'),
  routes
})

export default router
