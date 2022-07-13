import React from 'react';
import {CodInput, Container, Logotip, SendCodButton, TopTextInput} from "./registrationStyleWrapper";
import styled from "styled-components";

const SendNumberButton = styled(SendCodButton)`
  margin-top: 43px;
  background-color: #076ED1;
`
const Inputnumber = () => {
    return (
        <Container>
            <Logotip>
                FENESTRAM
            </Logotip>

            <TopTextInput>
                Номер телефона
            </TopTextInput>

            <CodInput />

            <SendNumberButton>
                    Отправить код
            </SendNumberButton>
        </Container>
    );
};

export default Inputnumber;