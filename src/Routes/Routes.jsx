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
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
])

export default router
