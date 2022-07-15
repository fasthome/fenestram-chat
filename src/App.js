import React from 'react';
import styled from 'styled-components';
import InputNumber from "./components/registration/InputNumber";
import ErrorCodeInput from "./components/registration/ErrorCodeInput";
import InputCod from "./components/registration/InputCod";
import ReturnInputCod from "./components/registration/ReturnInputCod";
import InputData from "./components/registration/InputData";
import 'antd/dist/antd.min.css';
import {BrowserRouter} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: 'Poppins', sans-serif;
`

function App() {
  return (
    <BrowserRouter>
          <Wrapper>
              <InputNumber />
              {/*<InputCod />*/}
              {/*<ErrorCodeInput />*/}
              {/*<ReturnInputCod />*/}
              {/*<InputData />*/}
          </Wrapper>
    </BrowserRouter>
  );
}

export default App;
