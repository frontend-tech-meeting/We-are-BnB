import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { query } from 'utils/utils';
import CONSTANT from '../../config';
import * as S from './SignUp.style';

const SignUp = () => {
  const [isValue, setIsValue] = useState({ country: '', telephone: '' });

  const location = useLocation();
  const navigate = useNavigate();

  const authCode = location.search.split('=')[1];
  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setIsValue({ ...isValue, [name]: value });
  };

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
              }
            });
        }
      });
  }, [kakaoLoginQuery, location, navigate]);

  return (
    <S.SignUp>
      <S.InputBox>
        <S.Label>국가/지역</S.Label>
        <S.CountrySelect
          type="text"
          name="country"
          onChange={handleInputValue}
          defaultValue="+82"
          value={isValue.country}
        >
          <option value="+82">대한민국 (+82)</option>
          <option value="+81">일본 (+81)</option>
        </S.CountrySelect>
      </S.InputBox>
      <S.InputBox>
        <S.Label>전화번호</S.Label>
        <S.TelephoneBox>
          <S.SelectedCountry>
            {isValue.country ? isValue.country : '+82'}
          </S.SelectedCountry>
          <S.TelephoneInput
            type="text"
            placeholder="전화번호"
            maxLength={20}
            name="telephone"
            value={isNaN(isValue.telephone) ? '' : isValue.telephone}
            onChange={handleInputValue}
          />
        </S.TelephoneBox>
      </S.InputBox>
    </S.SignUp>
  );
};

export default SignUp;
