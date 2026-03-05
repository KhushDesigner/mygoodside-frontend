import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthHeader from './components/AuthHeader/AuthHeader';
import SignIn from './pages/Sign-in/Sign-in';
import ForgotPassword from './pages/Forgot-Password/Forgot-Password';
import Verification from './pages/Verification/Verification';
import SetPassword from './pages/Set-Password/Set-Password';
import Success from './pages/Success/Success';
import './App.scss';

function App() {
  return (
    <div className="appWrapper">
      <AuthHeader />

      <main className="mainContent">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/set-password" element={<SetPassword />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
