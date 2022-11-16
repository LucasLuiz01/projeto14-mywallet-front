import { Button,Logo, Column, Input, Links, Padding } from "../../components";
import { useState } from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";
export default function NewEntry() {
    const [password, setPassWord] = useState("");
    const [emai, setEmai] = useState("");
    function login(e) {
        e.preventDefault();
    }
return(
    <Column>
    <StyledSpan>Nova entrada</StyledSpan>
    <Padding size="big" />
    <form onSubmit={login}>
    <Input placeholder="Valor" 
    type="email" 
    value={emai}
    onChange={(e) => setEmai(e.target.value)}
    />
    <Padding />
    <Input 
    placeholder="Descrição"
     type="password"
     value={password}
      onChange={(e) => setPassWord(e.target.value)}
     />
    <Padding />
    <Button text="Salvar entrada" />
    </form>
    <Padding size="big" />
  </Column>
);
}

const StyledSpan = styled.span`
font-family: "Raleway";
font-size: 26px;
font-weight: 700;
color: #FFFFFF;
padding-right: 130px;
margin-top: 25px;

`