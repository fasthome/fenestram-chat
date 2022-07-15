import React from 'react';
import {
    CodeInput,
    Container,
    Logo,
    SendCodeButton,
    TopTextInput
} from "./RegistrationStyleWrapper";
import styled from 'styled-components'
import {Avatar, Button} from "antd";
import {PlusOutlined, UserOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";

const WelcomeLogo = styled(Logo)`
  margin: 38px 0px;
  width: 50.8%;
  text-align: center;
`

const MyAvatar = styled(Avatar)`
  margin-bottom: 18px;
  background-color: #4B455C;
`

const MyUserOutlined = styled(UserOutlined)`
  color: #F2F2F2;
`
const Skip = styled(NavLink)`
  margin-top: 17px;
  color: #4F415A;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`

const SendFormButton = styled(SendCodeButton)`
  margin-top: 77px;
  margin-bottom: 0px;
  color: #FFFFFF;
`

const AvatarWrapper = styled.div`
  display: flex;
  width: 94px;
  height: 94px;
  position: relative;
  
`
const PositionButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
  width: 100%;
  height: 100%;
`

const MyButton = styled(Button)`
  background-color: #076ED1;
`
const InputData = () => {
    return (
        <Container>
            <WelcomeLogo>
                Добро пожаловать в FENESTRAM!
            </WelcomeLogo>
            <AvatarWrapper>
                <MyAvatar size={94} icon={<MyUserOutlined />} />
                <PositionButton>
                    <MyButton
                        type="primary"
                        shape="circle"
                        size="small"
                        icon={<PlusOutlined />}
                    />
                </PositionButton>
            </AvatarWrapper>

            <TopTextInput>
                Имя
            </TopTextInput>
            <CodeInput marginBottom="25px"/>

            <TopTextInput>
                Никнейм
            </TopTextInput>
            <CodeInput marginBottom="25px"/>


            <TopTextInput>
                Дата рождения
            </TopTextInput>
            <CodeInput marginBottom="25px"/>

            <TopTextInput>
                Email
            </TopTextInput>
            <CodeInput/>

            <SendFormButton>
                Готово
            </SendFormButton>
            <Skip to="">Пропустить</Skip>
        </Container>
    );
};

export default InputData;
