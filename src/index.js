import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut
} from "@clerk/clerk-react";


import Home from './pages/Home/Home';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

import SharedNav from './components/Shared/SharedNav/SharedNav';
import Footer from './components/Shared/Footer/Footer';
import MemoriesPage from './pages/MemoriesPage/MemoriesPage';
import MemoryDetailsPage from './pages/MemoriesPage/MemoryDetailsPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import SpecialistsPage from './pages/ServicesPage/SpecialistsPage/SpecialistsPage';


if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;


const ClerkProviderWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
      <SharedNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />

        <Route
          path="/sign-in"
          element={<SignInPage />}
        />


        <Route
          path="/sign-up"
          element={<SignUpPage />}
        />


        <Route />
        <Route
          path="/memories"
          element={
            <>
              <SignedIn>
                <MemoriesPage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/memories/:id"
          element={
            <>
              <SignedIn>
                <MemoryDetailsPage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        <Route
          path="/services"
          element={
            <>
              <SignedIn>
                <ServicesPage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/services/:serviceName"
          element={
            <>
              <SignedIn>
                <SpecialistsPage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

      </Routes>
      <Footer />
    </ClerkProvider>
  );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ClerkProviderWithRoutes />
  </BrowserRouter>
);

reportWebVitals();
