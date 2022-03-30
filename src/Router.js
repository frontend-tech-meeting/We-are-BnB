import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, Kakao } from 'pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kakao" element={<Kakao />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
