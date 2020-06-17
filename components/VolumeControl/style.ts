import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    margin-top: 20px;
  }
`;

export const InputRange = styled.input`
  cursor: pointer;
  -webkit-appearance: none;
  background: #5e239d;
  border-radius: 5px;
  outline: none;
  height: 5px;

  @media only screen and (max-width: 768px) {
    height: 9px;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: #5e239d;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;

export const MuteBtn = styled.button`
  margin-top: 4px;
  border: none;
  font-size: 20px;
  background: none;
  color: #5e239d;
  margin-right: 10px;
  margin-left: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
