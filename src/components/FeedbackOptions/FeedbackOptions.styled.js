import styled from 'styled-components';

export const Button = styled.button`
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  display: block;
  height: 30px;
  width: 90px;
  font-weight: 500;
  margin: 20px auto;
  text-align: center;
  padding: 1px 5px;
  color: #022524;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
  -webkit-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
  background: #83b2f3;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#83b2f3),
    to(#4e95f2)
  );
  background: -webkit-linear-gradient(#83b2f3, #4e95f2);
  background-image: -moz-linear-gradient(top, #f6f6f6, #4e95f2);
  background-image: -moz-gradient(top, #f6f6f6, #4e95f2);
  border: 1px solid #a1a1a1;

  &:first-letter {
    text-transform: uppercase;
  }

  &:active {
    background: #83b2f3;
    color: #000;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#83b2f3),
      to(#ececec)
    );
    background: -webkit-linear-gradient(#83b2f3, #ececec);
    background-image: -moz-linear-gradient(top, #83b2f3, #ececec);
    background-image: -moz-gradient(top, #83b2f3, #ececec);
  }
`;
