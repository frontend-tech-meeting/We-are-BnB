import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from 'pages';
import { Nav } from 'components';
import KakaoAuth from './pages/Login/KakaoAuth';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kakao-auth" element={<KakaoAuth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
