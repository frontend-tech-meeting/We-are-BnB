import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const KakaoAuto = () => {
  const location = useLocation();

  const autoCode = location.search.split('=')[1];
  const autoBody = `grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${autoCode}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;

  useEffect(() => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: autoBody,
    })
      .then((res) => res.json())
      .then((res) => sessionStorage.setItem('access_token', res.access_token));
  }, [autoBody]);

  return <div />;
};

export default KakaoAuto;
