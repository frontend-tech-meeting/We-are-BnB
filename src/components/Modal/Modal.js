import React, { useState, useImperativeHandle } from 'react';

const Modal = React.forwardRef(({ children }, ref) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setVisible(true);
    },
    close() {
      setVisible(false);
    },
  }));

  return visible && <div>{children}</div>;
});

export default Modal;
