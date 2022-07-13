import React from 'react';
import styled from 'styled-components'
import {BottomTextInput, CodInput, Container, Logotip, SendCodButton, TopTextInput} from "./registrationStyleWrapper";


const ReturnInputCod = () => {
    return (
        <Container>
            <Logotip>
                FENESTRAM
            </Logotip>

            <TopTextInput>
                Введите код из СМС
            </TopTextInput>

            <CodInput />

            <BottomTextInput>
                Отправить заново?
            </BottomTextInput>

            <SendCodButton color="#076ED1">
                Готово
            </SendCodButton>

        </Container>
    );
};

export default ReturnInputCod;