import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from 'components/Nav';
import Main from 'pages/Main';
import KakaoAuth from 'components/Nav/LoginModal/KakaoAuth';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth/kakao" element={<KakaoAuth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
