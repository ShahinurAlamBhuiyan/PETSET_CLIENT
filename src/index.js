// import React, { createContext, useEffect, useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import {
//   BrowserRouter,
//   Route,
//   Routes,
//   useNavigate,
// } from "react-router-dom";



// import Home from './pages/Home/Home';
// import SignInPage from './pages/SignInPage/SignInPage';
// import SignUpPage from './pages/SignUpPage/SignUpPage';

// import SharedNav from './components/Shared/SharedNav/SharedNav';
// import Footer from './components/Shared/Footer/Footer';
// import MemoriesPage from './pages/MemoriesPage/MemoriesPage';
// import MemoryDetailsPage from './pages/MemoriesPage/MemoryDetailsPage';
// import ServicesPage from './pages/ServicesPage/ServicesPage';
// import SpecialistsPage from './pages/ServicesPage/SpecialistsPage/SpecialistsPage';
// import DoctorAppointment from './pages/ServicesPage/DoctorAppointment/DoctorAppointment';
// import AdaptationPage from './pages/AdaptationPage/AdaptationPage';
// import LostAndFoundPage from './pages/LostAndFoundPage/LostAndFoundPage';
// import StorePage from './pages/StorePage/StorePage';
// import PrivateRoute from './PrivateRoute';





// export const UserContext = createContext()


// const Root = () => {
//   const [loggedInUser, setLoggedInUser] = useState({});
//   useEffect(() => {
//     const USER = JSON.parse(sessionStorage.getItem('user'));
//     if (USER) {
//       setLoggedInUser(USER)
//     }
//   }, [])
//   const [authenticated, setAuthenticated] = useState(false)
//   // const navigate = useNavigate();

//   return (
//     <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
//       <SharedNav />
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route exact path="/home" element={<Home />} />

//         <Route
//           path="/sign-in"
//           element={<SignInPage setAuthenticated={setAuthenticated} />}
//         />


//         <Route
//           path="/sign-up"
//           element={<SignUpPage />}
//         />



//         {/* <Route
//           path="/memories"
//           element={authenticated ? <MemoriesPage /> : <SignInPage path="/memories" />}
//         /> */}
//         <PrivateRoute path="/memories" authenticated={authenticated}>
//           <MemoriesPage />
//         </PrivateRoute>

//         {/* <Route
//           path="/memories/:m_id"
//           element={
//             <>
//               <SignedIn>
//                 <MemoryDetailsPage />
//               </SignedIn>
//               <SignedOut>
//                 <RedirectToSignIn />
//               </SignedOut>
//             </>
//           }
//         /> */}

//         {/* <Route
//           path="/services"
//           element={
//             <>
//               <SignedIn>
//                 <ServicesPage />
//               </SignedIn>
//               <SignedOut>
//                 <RedirectToSignIn />
//               </SignedOut>
//             </>
//           }
//         /> */}
//         {/* <Route
//           path="/services/:id"
//           element={
//             <>
//               <SignedIn>
//                 <SpecialistsPage />
//               </SignedIn>
//               <SignedOut>
//                 <RedirectToSignIn />
//               </SignedOut>
//             </>
//           }
//         /> */}
//         {/* <Route
//           path="/appointment/:id"
//           element={
//             <>
//               <SignedIn>
//                 <DoctorAppointment />
//               </SignedIn>
//               <SignedOut>
//                 <RedirectToSignIn />
//               </SignedOut>
//             </>
//           }
//         /> */}

//         {/* <Route
//           path="/adaptation"
//           element={
//             <>
//               <SignedIn>
//                 <AdaptationPage />
//               </SignedIn>
//               <SignedOut>
//                 <RedirectToSignIn />
//               </SignedOut>
//             </>
//           }
//         /> */}
//         {/* <Route
//           path="/lost&found"
//           element={
//             <>
//               <SignedIn>
//                 <LostAndFoundPage />
//               </SignedIn>
//               <SignedOut>
//                 <RedirectToSignIn />
//               </SignedOut>
//             </>
//           }
//         /> */}
//         {/* <Route
//           path="/store"
//           element={
//             <>
//               <SignedIn>
//                 <StorePage />
//               </SignedIn>
//               <SignedOut>
//                 <RedirectToSignIn />
//               </SignedOut>
//             </>
//           }
//         /> */}
//       </Routes>
//       <Footer />
//     </UserContext.Provider>
//   );
// }




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <Root />
//   </BrowserRouter>
// );

// reportWebVitals();

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)