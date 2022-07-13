import React from 'react';
import {CodInput, Container, Logotip, SendCodButton, TopTextInput} from "./registrationStyleWrapper";
import styled from 'styled-components'
import {Avatar, Badge, Button} from "antd";
import {PlusOutlined, UserOutlined} from "@ant-design/icons";

const WelcomeLogotip = styled(Logotip)`
  margin-top: 38px;
  width: 50.8%;
  margin-bottom: 40px;
  text-align: center;
`

const MyAvatar = styled(Avatar)`
  margin-bottom: 18px;
  background-color: #8E86A5;
`

const MyUserOutlined =styled(UserOutlined)`
  color: #F2F2F2;
`
const Skip = styled.div`
  margin-top: 17px;
  color: #4F415A;
  font-weight: bold;
`
const SendFormButton = styled(SendCodButton)`
  margin-top: 87px;
  margin-bottom: 0px;
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

const InputData = () => {
    return (
        <Container>
            <WelcomeLogotip>
                Добро пожаловать в FENESTRAM!
            </WelcomeLogotip>

            <AvatarWrapper>
                <MyAvatar size={94} icon={<MyUserOutlined />} />
                <PositionButton>
                    <Button
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
            <CodInput/>

            <TopTextInput>
                Никнейм
            </TopTextInput>
            <CodInput/>

            <TopTextInput>
                Дата рождения
            </TopTextInput>
            <CodInput/>

            <TopTextInput>
                Email
            </TopTextInput>
            <CodInput/>

            <SendFormButton>
                Готово
            </SendFormButton>
            <Skip>Пропустить</Skip>
        </Container>
    );
};

export default InputData;