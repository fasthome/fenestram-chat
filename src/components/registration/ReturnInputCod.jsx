import React from 'react';
import {
    BottomTextInput,
    CodeInput,
    Container,
    Logo,
    SendCodeButton,
    TopTextInput
} from "./RegistrationStyleWrapper";
import {NavLink} from "react-router-dom";


const ReturnInputCod = () => {
    return (
        <Container>
            <Logo>
                FENESTRAM
            </Logo>

            <TopTextInput>
                Введите код из СМС
            </TopTextInput>

            <CodeInput />

            <BottomTextInput>
                <NavLink to="">Отправить заново?</NavLink>
            </BottomTextInput>

            <SendCodeButton color="#076ED1">
                Готово
            </SendCodeButton>

        </Container>
    );
};

export default ReturnInputCod;