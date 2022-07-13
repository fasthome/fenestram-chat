import styled from 'styled-components'
import Inputnumber from "./components/registration/Inputnumber";
import Falsecod from "./components/registration/Falsecod";
import Inputcod from "./components/registration/Inputcod";
import ReturnInputCod from "./components/registration/returnInputCod";
import InputData from "./components/registration/inputData";
import 'antd/dist/antd.min.css'


const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: Geometria;
`


function App() {
  return (
    <div>
          <Wrapper>
              <Inputnumber />
              <Falsecod />
              <Inputcod />
              <ReturnInputCod />
              <InputData />
          </Wrapper>
    </div>
  );
}

export default App;
