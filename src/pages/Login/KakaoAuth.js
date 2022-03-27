import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const KakaoAuth = () => {
  const location = useLocation();

  const authCode = location.search.split('=')[1];
  const authBody = `grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_KEY}&redirect_uri=http://localhost:3000/kakao-auth&code=${authCode}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;

  useEffect(() => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: authBody,
    })
      .then((res) => res.json())
      .then((res) => sessionStorage.setItem('access_token', res.access_token));
  }, [authBody]);

  return <div />;
};

export default KakaoAuth;
