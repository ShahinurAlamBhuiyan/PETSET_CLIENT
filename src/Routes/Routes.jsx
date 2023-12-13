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
import DashboardPage from '../pages/DashboardPage/DashboardPage'
import Dashboard from '../Layout/Dashboard'

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
        element: (
          <PrivateRoute path='/adaptation'>
            <AdaptationPage />
          </PrivateRoute>
        )
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
      //   {
      //     path: 'updateToys/:id',
      //     element: (
      //       <PrivateRoute>
      //         <UpdateToys></UpdateToys>
      //       </PrivateRoute>
      //     ),
      //     loader: ({ params }) =>
      //       fetch(`https://toyland-server-weld.vercel.app/allToys/${params.id}`)
      //   },
      //   {
      //     path: 'viewDetails/:id',
      //     element: (
      //       <PrivateRoute>
      //         <ViewDetails></ViewDetails>
      //       </PrivateRoute>
      //     ),
      //     loader: ({ params }) =>
      //       fetch(`https://toyland-server-weld.vercel.app/allToys/${params.id}`)
      //   }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '',
        element: <h1>Welcome to my fancy dashboard</h1>
      },
      {
        path: 'user',
        element: (
          <PrivateRoute path='/user'>
            <DashboardPage />
          </PrivateRoute>
        )
      },
      {
        path: 'product',
        element: (
          <PrivateRoute path='/product'>
            <div>
              this is product <br />
              <a href='/dashboard/user'>go user</a>
            </div>
          </PrivateRoute>
        )
      }
      // {
      //   path: 'dashboard',
      //   element: (
      //     <PrivateRoute path='/dashboard'>
      //       <DashboardPage />
      //     </PrivateRoute>
      //   )
      // },
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
])

export default router
