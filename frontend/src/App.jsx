import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage.jsx';
import NetworkPage from './pages/NetworkPage.jsx';
import NotificationsPage from './pages/NotificationsPage.jsx';
import PostPage from './pages/PostPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import SignUpPage from './pages/auth/SignUpPage.jsx';
import LoginPage from './pages/auth/LoginPage.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
