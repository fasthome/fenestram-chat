import React from 'react';
import {
    CodeInput,
    Container,
    Logo,
    SendCodeButton,
    TopTextInput
} from "./RegistrationStyleWrapper";
import styled from "styled-components";

const SendNumberButton = styled(SendCodeButton)`
  margin-top: 43px;
  background-color: #076ED1;
`
const InputNumber = () => {
    return (
        <Container>
            <Logo>
                FENESTRAM
            </Logo>

            <TopTextInput>
                Номер телефона
            </TopTextInput>

            <CodeInput />

            <SendNumberButton>
                    Отправить код
            </SendNumberButton>
        </Container>
    );
};

export default InputNumber;