
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './auth/AuthContext';
import LandingPage from './landing-page/LandingPage'
import GlobalCssOverrides from './shared-theme/GlobalStyles';
import { ProtectedRoute } from './auth/ProtectedRoute';
import SignUp from './sign-up/SignUp';
import ProfilePage from './ProfilePage';
import SignIn from './sign-in/SignIn';
import TermsOfService from './info-legal-pages/TermsOfService';
import PrivacyPolicy from './info-legal-pages/PrivacyPolicy';
import ContactUs from './landing-page/components/ContactUs';
import AdminPage from './admin-page/AdminPage';

function App() {
  return (
    <AuthProvider>
      <GlobalCssOverrides />

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route 
            path="/account"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>

    </AuthProvider>
  )
}

export default App
