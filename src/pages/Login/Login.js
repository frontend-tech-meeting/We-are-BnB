import React, { useState, useRef } from 'react';
import LoginModal from './LoginModal/LoginModal';
import * as S from './Login.style';

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const modalRef = useRef();

  const closeModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  console.log(isModalOpen);

  return (
    <>
      <S.Login>
        <S.MenuButton />
        <S.AccountButton onClick={() => setIsModalOpen(!isModalOpen)} />
      </S.Login>
      {isModalOpen && (
        <S.Background onClick={closeModal}>
          <S.ModalWrapper>
            <LoginModal closeModal={closeModal} />
          </S.ModalWrapper>
        </S.Background>
      )}
    </>
  );
};

export default Login;
