import styled from 'styled-components';
import {Button, Input} from "antd";

export const Container = styled.div`
  width: 360px;
  height: 778px;
  background-color: #251B2D;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Logotip = styled.div`
  font-family: Montserrat;
  margin: 133px 0px 120px 0px;
  font-size: 18px;
  color: #FFFFFF;
`
export const TopTextInput = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 86.666%;
  margin-bottom: 2px;
  font-size: 14px;
  color: #8D9093;
`
export const CodInput = styled(Input)`
  margin-bottom: 10px;
  width: 86.666%;
  padding-left: 5.8%;
  height: 48px;
  border-radius: 5px;
  border: 1px solid #8D9093;
  background-color: #251B2D;
  color: #8D9093;
`
export const BottomTextInput = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 86.666%;
  margin-bottom: 25px;
  color:${props => props.color || '#076ED1'};
  font-size: 12px;
`

export const SendCodButton = styled(Button)`
  margin: 0px 0px 334px 0px;
  width: 86.666%;
  height: 48px;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  color:#FFFFFF;
  background-color: ${props => props.color || '#3D3246'};
`


