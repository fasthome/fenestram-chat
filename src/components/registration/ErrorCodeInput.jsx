import React from 'react';
import {BottomTextInput,
    CodeInput,
    Container,
    Logo,
    SendCodeButton,
    TopTextInput
} from "./RegistrationStyleWrapper";
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

const ErrCodeInput = styled(CodeInput)`
  text-align: center;  
  font-size: 20px;
  border: 1px solid #FF4B4B;
  background-color: #1B1728;
  color: #FF4B4B;
  :disabled {
    background-color: #1B1728;
    border: 1px solid #FF4B4B;
    color: #FF4B4B;
    :hover {
      border: 1px solid #FF4B4B;
    }
  }
`

export const MyNavLink = styled(NavLink)`
  color: #FF4B4B;
`


const ErrorCodeInput = () => {
    return (
        <Container>
            <Logo>
                FENESTRAM
            </Logo>

            <TopTextInput>
                Введите код из СМС
            </TopTextInput>

            <ErrCodeInput disabled />
            <BottomTextInput color="#FF4B4B">
                <div> Неверный код <MyNavLink to="">Отправить заново?</MyNavLink></div>
            </BottomTextInput>

            <SendCodeButton>
                Готово
            </SendCodeButton>
        </Container>
    );
};


export default ErrorCodeInput;