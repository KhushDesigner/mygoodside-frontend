import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthHeader from './components/AuthHeader/AuthHeader';
import SignIn from './pages/Sign-in/Sign-in';
import SignUp from './pages/Sign-up/Sign-up';
import ForgotPassword from './pages/Forgot-Password/Forgot-Password';
import Verification from './pages/Verification/Verification';
import SetPassword from './pages/Set-Password/Set-Password';
import Success from './pages/Success/Success';
import Onboarding from './pages/Onboarding/Onboarding';
import UploadMemories from './pages/Upload-Memories/UploadMemories';
import SelectBasePhoto from './pages/Select-Base-Photo/SelectBasePhoto';
import IdentifyYourself from './pages/Identify-Yourself/IdentifyYourself';
import UploadPhoto from './pages/Upload-Photo/UploadPhoto';
import InviteGroup from './pages/Invite-Group/InviteGroup';
import Status from './pages/Status/Status';
import PhotoGenerated from './pages/Photo-Generated/PhotoGenerated';
import Profile from './pages/Profile/Profile';
import Landing from './pages/Landing/Landing';
import { useLocation } from 'react-router-dom';
import './App.scss';

function App() {
  const location = useLocation();
  const isDashboardPage = ['/upload', '/select-base-photo', '/identify-yourself', '/upload-photo', '/invite-group', '/status', '/photo-generated', '/profile'].includes(location.pathname);

  return (
    <div className="appWrapper">
      {location.pathname !== '/' && <AuthHeader isDashboard={isDashboardPage} />}

      <main className="mainContent">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/set-password" element={<SetPassword />} />
          <Route path="/success" element={<Success />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/upload" element={<UploadMemories />} />
          <Route path="/select-base-photo" element={<SelectBasePhoto />} />
          <Route path="/identify-yourself" element={<IdentifyYourself />} />
          <Route path="/upload-photo" element={<UploadPhoto />} />
          <Route path="/invite-group" element={<InviteGroup />} />
          <Route path="/status" element={<Status />} />
          <Route path="/photo-generated" element={<PhotoGenerated />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
