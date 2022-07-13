import React from 'react';
import {BottomTextInput, CodInput, Container, Logotip, SendCodButton, TopTextInput} from "./registrationStyleWrapper";

const Inputcod = () => {
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

            <SendCodButton>
                Готово
            </SendCodButton>

        </Container>
    );
};

export default Inputcod;