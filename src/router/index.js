import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Report from '../views/Report.vue'
import VehiclesVisualization from '../views/Vehicles/VehiclesVisualization.vue'
import PointsVisualization from '../views/Points/PointsVisualization.vue'
import RoutesVisualization from '../views/Routes/RoutesVisualization.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Report',
    name: 'Report',
    component: Report
  },
  {
    path: '/VehiclesVisualization',
    name: 'VehiclesVisualization',
    component: VehiclesVisualization
  },
  {
    path: '/PointsVisualization',
    name: 'PointsVisualization',
    component: PointsVisualization
  },
  {
    path: '/RoutesVisualization',
    name: 'RoutesVisualization',
    component: RoutesVisualization
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
