import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from 'pages';
import { Nav } from 'components';
import KakaoAuth from './pages/Login/LoginModal/KakaoAuto';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/main" element={<Nav />} />
        <Route path="/kakao-auth" element={<KakaoAuth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
