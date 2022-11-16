import { Button,Logo, Column, Input, Links, Padding } from "../../components";
import { useState } from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";
export default function Login() {
    const [password, setPassWord] = useState("");
    const [emai, setEmai] = useState("");
    function login(e) {
        e.preventDefault();
    }
return(
    <Column>
    <Logo text="MyWallet" />
    <Padding size="huge" />
    <Padding size="big" />
    <form onSubmit={login}>
    <Input placeholder="E-mail" 
    type="email" 
    value={emai}
    onChange={(e) => setEmai(e.target.value)}
    />
    <Padding />
    <Input 
    placeholder="Senha"
     type="password"
     value={password}
      onChange={(e) => setPassWord(e.target.value)}
     />
    <Padding />
    <Button text="Entrar" />
    </form>
    <Padding size="big" />
    <Link to="/registration"> 
   <Links text="Primeira vez? Cadastre-se!" />
   </Link>
  </Column>
);
}

const StyledBody = styled.input`
width: 100%;
height: 100%;
background-color: #A328D6;
`