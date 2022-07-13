import React from 'react';
import {BottomTextInput, CodInput, Container, Logotip, SendCodButton, TopTextInput} from "./registrationStyleWrapper";
import styled from 'styled-components'

const FalseInput = styled(CodInput)`
  text-align: center;  
  font-size: 20px;
  border: 1px solid #FF4B4B;
  background-color: #251B2D;
  color: #FF4B4B;
  :disabled {
    background-color: #251B2D;
    border: 1px solid #FF4B4B;
    color: #FF4B4B;
    :hover {
      border: 1px solid #FF4B4B;
    }
  }
`

const Falsecod = () => {
    return (
        <Container>
            <Logotip>
                FENESTRAM
            </Logotip>

            <TopTextInput>
                Введите код из СМС
            </TopTextInput>


            <FalseInput
                disabled
            />
            <BottomTextInput color="#FF4B4B">
                Неверный код Отправить заново?
            </BottomTextInput>
            <SendCodButton>
                Готово
            </SendCodButton>
        </Container>
    );
};


export default Falsecod;