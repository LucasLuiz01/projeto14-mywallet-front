import styled from "styled-components";
import { Column, Padding } from "../../components";
import { IoExitOutline } from "react-icons/io5";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import {Link} from "react-router-dom"
export default function Menu() {
  return (
    <Column>
      <StyledTop>
        <StyledSpan>Olá, fulano</StyledSpan>
        <Link to="/">
        <IoExitOutline size={23} color="#FFFFFF" />
        </Link>
      </StyledTop>
      <StyledMenu>
        <Styledtext>Não há registros de entrada ou saída</Styledtext>
      </StyledMenu>
      <Padding size={"13"} />
      <StyledFooter>
      <StyledEntry>
      <Link to="/NewEntry" >
        <AiOutlinePlusCircle size={22} color="#FFFFFF"/>
        </Link>
        <StyledSpanEntry>Nova entrada</StyledSpanEntry>
      </StyledEntry>
      <StyledExit>
        <Link to="/NewExit" >
        <AiOutlineMinusCircle size={22} color="#FFFFFF" />
        </Link>
        <StyledSpanEntry>Nova saída</StyledSpanEntry>
      </StyledExit>
      </StyledFooter>
    </Column>
  );
}
const StyledTop = styled.div`
  width: 85%;
  height: 78px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledSpan = styled.span`
  font-family: "Raleway";
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
`;
const StyledMenu = styled.div`
  width: 85%;
  height: 446px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
`;
const Styledtext = styled.span`
  font-family: "Raleway";
  font-size: 20px;
  font-weight: 400;
  color: #868686;
`;
const StyledFooter = styled.div`
  width: 85%;
  height: 114px;
  display: flex;
  justify-content: space-between;
`;
const StyledEntry = styled.div`
  width: 45%;
  height: 114px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #A328D6;
`;
const StyledExit = styled.div`
   width: 45%;
  height: 114px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #A328D6;
`;
const StyledSpanEntry = styled.span`
  font-family: "Raleway";
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
`;