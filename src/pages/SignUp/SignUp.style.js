import styled from 'styled-components';

export const SignUp = styled.form`
  /* ${({ theme }) => theme.style.flex('column', 'felx-start', 'center')} */
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.rightGrey};
  border-radius: 15px;
`;

export const InputBox = styled.div`
  width: 450px;
  padding: 15px;
  /* border: 1px solid red; */
  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.rightGrey};
  }

  &:focus-within {
    border: 2px solid ${({ theme }) => theme.colors.black};
    border-radius: 15px;
  }
`;

export const CountrySelect = styled.select`
  width: 100%;
  padding-top: 5px;
  border: none;
  font-size: 18px;
  outline: none;
`;

export const Label = styled.label`
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.middleGrey};
  font-size: 14px;

  &:focus {
  }
`;

export const TelephoneBox = styled.div`
  ${({ theme }) => theme.style.flex('row', 'flex-start', 'center')}
`;

export const SelectedCountry = styled.p`
  margin-right: 10px;
`;

export const TelephoneInput = styled.input`
  width: 100%;
  padding-top: 5px;
  border: none;
  font-size: 18px;
  outline: none;
`;
