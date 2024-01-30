import { lazy } from 'react'

const DashboardRoutes = [
 
  {
    path: '/dashboard/movie',
    component: lazy(() => import('../views/dashboard/movie-page/index')),
    exact: true
  }
]

export default DashboardRoutes
