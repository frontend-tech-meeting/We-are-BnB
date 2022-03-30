import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Kakao = () => {
  const location = useLocation();
  const index = location.search.indexOf('=');
  const code = location.search.slice(index + 1);

  useEffect(() => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&client_id=6710649e597a239e2d3aa73fbb193c88&redirect_uri=http://localhost:3000/kakao&code=${code}`,
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return <div>카카오다</div>;
};

export default Kakao;
