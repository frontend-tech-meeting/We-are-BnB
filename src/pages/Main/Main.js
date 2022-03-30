import React, { useRef } from 'react';
import loadable from '@loadable/component';
import { Modal, ModalPortal } from 'components';
const LoginModal = loadable(() => import('components/Modal/LoginModal'));
const SignupModal = loadable(() => import('components/Modal/SignupModal'));

const Main = () => {
  const loginRef = useRef(null);
  const signupRef = useRef(null);

  return (
    <>
      <div>Main</div>
      <button onClick={() => loginRef.current?.show()}>로그인</button>
      <button onClick={() => signupRef.current?.show()}>회원가입</button>
      <ModalPortal>
        <Modal ref={loginRef}>
          <LoginModal onClick={() => loginRef.current?.close()} />
        </Modal>
        <Modal ref={signupRef}>
          <SignupModal onClick={() => signupRef.current?.close()} />
        </Modal>
      </ModalPortal>
    </>
  );
};
export default Main;

// 문제점
// 1. 부모에서 자식 모달을 관리하는 상태값이 생긴다.
// 2. 그 상태값과 상태를 관리하는 set 함수를 매번 props로 넘겨줘야하므로 의존성이 늘어난다.

// code splitting - loadable
// 동적으로 불러오기
// 컴포넌트가 렌더링 되는 순간 불러옴 -> 초기 속도를 개선 but 진입 속도느 느릴 수 있음.
// 초기 로딩과 페이지에서 생기는 로딩간에 사용자 경험을 비교해봐야 함.
// 라우트에서 사용하면 좋음
