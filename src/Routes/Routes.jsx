import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../pages/Home/Home'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import SignInPage from '../pages/SignInPage/SignInPage'
import PrivateRoute from './PrivateRoutes'
import MemoriesPage from '../pages/MemoriesPage/MemoriesPage'
import ErrorPage from '../components/Shared/ErrorPage/ErrorPage'
import AdaptationPage from '../pages/AdaptationPage/AdaptationPage'

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
        element: (
        <PrivateRoute path='/memories'>
            <MemoriesPage />
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
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
])

export default router
