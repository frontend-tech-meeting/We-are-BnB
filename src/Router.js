import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';
import KakaoAuth from 'components/Nav/LoginModal/KakaoAuth';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth/kakao" element={<KakaoAuth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
