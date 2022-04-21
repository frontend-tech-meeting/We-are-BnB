const flex = (direction = 'row', justify = 'center', align = 'center') => `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;

const buttonStyle = (border = 'none', color = 'white') => `
  border: ${border};
  background-color: transparent;
  color: ${color};
  cursor: pointer;
`;

const alignCenter = () => `
  display: flex;
  align-items: center;
`;

const fullArea = () => `
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const common = { flex, buttonStyle, alignCenter, fullArea };

export default common;
