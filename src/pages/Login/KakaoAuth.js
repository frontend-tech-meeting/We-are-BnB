import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { query } from 'utils/utils';
import CONSTANT from '../../config';

const KakaoAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const authCode = location.search.split('=')[1];

  const params = {
    grant_type: 'authorization_code',
    client_id: process.env.REACT_APP_KAKAO_KEY,
    redirect_uri: 'http://localhost:3000/kakao-auth',
    code: authCode,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
  };

  const kakaoLoginQuery = query(params);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      return;
    }
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: kakaoLoginQuery,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.access_token) {
          fetch(CONSTANT.kakao, {
            method: 'POST',
            headers: { Authorization: res.access_token },
          })
            .then((res) => res.json())
            .then((res) => {
              if (res.token) {
                localStorage.setItem('token', res.email);
                localStorage.setItem('token', res.token);
                navigate('/');
              }
            });
        }
      });
  }, [kakaoLoginQuery, location, navigate]);

  return <div />;
};

export default KakaoAuth;
