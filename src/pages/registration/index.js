import { Button,Logo, Column, Input, Links, Padding } from "../../components";
import { useState } from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";
export default function Registration() {
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
    <Input placeholder="Nome" 
    type="email" 
    value={emai}
    onChange={(e) => setEmai(e.target.value)}
    />
    <Padding />
    <Input 
    placeholder="E-mail"
     type="password"
     value={password}
      onChange={(e) => setPassWord(e.target.value)}
     />
    <Padding />
    <Input placeholder="Senha" 
    type="email" 
    value={emai}
    onChange={(e) => setEmai(e.target.value)}
    />
    <Padding />
    <Input placeholder="Confirme a Senha" 
    type="email" 
    value={emai}
    onChange={(e) => setEmai(e.target.value)}
    />
    <Padding />
    <Button text="Cadastrar" />
    </form>
    <Padding size="big" />
    <Link to="/"> 
   <Links text="Já tem uma conta? Entre agora!" />
   </Link>
  </Column>
);
}

const StyledBody = styled.input`
width: 100%;
height: 100%;
background-color: #A328D6;
`