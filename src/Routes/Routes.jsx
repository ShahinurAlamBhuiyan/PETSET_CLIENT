import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../pages/Home/Home'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import SignInPage from '../pages/SignInPage/SignInPage'
import PrivateRoute from './PrivateRoutes'
import MemoriesPage from '../pages/MemoriesPage/MemoriesPage'
import ErrorPage from '../components/Shared/ErrorPage/ErrorPage'
import AdaptationPage from '../pages/AdaptationPage/AdaptationPage'

import MemoryDetailsPage from '../pages/MemoriesPage/MemoryDetailsPage'
import ServicesPage from '../pages/ServicesPage/ServicesPage'
import SpecialistsPage from '../pages/ServicesPage/SpecialistsPage/SpecialistsPage'
import StorePage from '../pages/StorePage/StorePage'
import DoctorAppointment from '../pages/ServicesPage/DoctorAppointment/DoctorAppointment'
import Shipment from '../pages/StorePage/Shipment'

import Dashboard from '../Layout/Dashboard'
import DProductsPage from '../pages/DashboardPage/DProductsPage'
import DUsersPage from '../pages/DashboardPage/DUsersPage'
import DDoctorsPage from '../pages/DashboardPage/DDoctorsPage'
import DPostsPage from '../pages/DashboardPage/DPostsPage'
import DMemoriesPage from '../pages/DashboardPage/DMemoriesPage'
import DAdoptionsPage from '../pages/DashboardPage/DAdoptionsPage'
import DAppointmentsPage from '../pages/DashboardPage/DAppointmentsPage'
import DAddDoctorPage from '../pages/DashboardPage/DAddDoctorPage'
import DServices from '../pages/DashboardPage/DServices'
import DOrders from '../pages/DashboardPage/DOrders'
import DProfile from '../pages/DashboardPage/DProfile'
import DAddServicePage from '../pages/DashboardPage/DAddServicePage'
import DAddProductPage from '../pages/DashboardPage/DAddProductPage'
import AdaptationDetailsPage from '../pages/AdaptationPage/AdaptationDetailsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'sign-up',
        element: <SignUpPage />
      },
      {
        path: 'sign-in',
        element: <SignInPage />
      },
      {
        path: 'adaptation',
        element: <AdaptationPage />
      },
      {
        path: 'memories',
        element: <MemoriesPage />
      },
      {
        path: 'memories/:m_id',
        element: (
          <PrivateRoute path='/memories/:m_id'>
            <MemoryDetailsPage />
          </PrivateRoute>
        )
      },
      {
        path: 'adaptation/:a_id',
        element: (
          <PrivateRoute path='/adaptation/:a_id'>
            <AdaptationDetailsPage />
          </PrivateRoute>
        )
      },
      {
        path: 'services',
        element: <ServicesPage />
      },
      {
        path: 'services/:s_id',
        element: <SpecialistsPage />
      },
      {
        path: 'appointment/:s_id/:dr_id',
        element: (
          <PrivateRoute path='/appointment/:s_id/:dr_id'>
            <DoctorAppointment />
          </PrivateRoute>
        )
      },
      {
        path: 'store',
        element: <StorePage />
      },
      {
        path: 'payment/:product_id',
        element: (
          <PrivateRoute path='/payment/:product_id'>
            <Shipment />
          </PrivateRoute>
        )
      }
    ]
  },
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: 'dashboard',
        element: <h1>Welcome to my fancy dashboard</h1>
      },
      {
        path: 'users',
        element: (
          <PrivateRoute path='/users'>
            <DUsersPage />
          </PrivateRoute>
        )
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute path='/profile'>
            <DProfile />
          </PrivateRoute>
        )
      },
      {
        path: 'dservices',
        element: (
          <PrivateRoute path='/dservices'>
            <DServices />
          </PrivateRoute>
        )
      },
      {
        path: 'add_service',
        element: (
          <PrivateRoute path='/add_service'>
            <DAddServicePage />
          </PrivateRoute>
        )
      },
      {
        path: 'orders',
        element: (
          <PrivateRoute path='/orders'>
            <DOrders />
          </PrivateRoute>
        )
      },
      {
        path: 'products',
        element: (
          <PrivateRoute path='/products'>
            <DProductsPage />
          </PrivateRoute>
        )
      },
      {
        path: 'add_product',
        element: (
          <PrivateRoute path='/add_product'>
            <DAddProductPage />
          </PrivateRoute>
        )
      },
      {
        path: 'posts',
        element: (
          <PrivateRoute path='/posts'>
            <DPostsPage />
          </PrivateRoute>
        )
      },
      {
        path: 'posts/memories',
        element: (
          <PrivateRoute path='/posts/memories'>
            <DMemoriesPage />
          </PrivateRoute>
        )
      },
      {
        path: 'posts/adoptions',
        element: (
          <PrivateRoute path='/posts/adoptions'>
            <DAdoptionsPage />
          </PrivateRoute>
        )
      },
      {
        path: 'doctors',
        element: (
          <PrivateRoute path='/doctors'>
            <DDoctorsPage />
          </PrivateRoute>
        )
      },
      {
        path: 'appointments',
        element: (
          <PrivateRoute path='/appointments'>
            <DAppointmentsPage />
          </PrivateRoute>
        )
      },
      {
        path: 'add_doctor',
        element: (
          <PrivateRoute path='/add_doctor'>
            <DAddDoctorPage />
          </PrivateRoute>
        )
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
])

export default router
