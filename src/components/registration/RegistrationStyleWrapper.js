import styled from 'styled-components';
import {Button, Input} from "antd";

export const Container = styled.div`
  width: 360px;
  height: 778px;
  background-color: #1B1728;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Logo = styled.div`
  font-family: 'Montserrat', sans-serif;
  margin: 133px 0px 120px 0px;
  font-size: 18px;
  color: #FFFFFF;
  font-style: normal;
  font-weight: 600;
`
export const TopTextInput = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 86.666%;
  margin-bottom: 2px;
  font-size: 14px;
  color: rgba(201, 201, 201, 0.87);
  font-style: normal;
  font-weight: 400;
`
export const CodeInput = styled(Input)`
  margin-bottom: ${props => props.marginBottom || '10px'};;
  width: 86.666%;
  padding-left: 5.8%;
  height: 48px;
  border-radius: 5px;
  border: 1px solid #8D9093;
  background-color: #1B1728;
  color: rgba(201, 201, 201, 0.87);
`
export const BottomTextInput = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 86.666%;
  margin-bottom: 25px;
  color:${props => props.color || '#076ED1'};
  font-size: 12px;
`
export const SendCodeButton = styled(Button)`
  margin-bottom:334px;
  width: 86.666%;
  height: 48px;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  color:#FFFFFF;
  background-color: ${props => props.color || '#2E283B'};
`


