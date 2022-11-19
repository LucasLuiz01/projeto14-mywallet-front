import { Button,Logo, Column, Input, Links, Padding } from "../../components";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import styled from "styled-components";
import axios from "axios";
export default function Registration() {
    const [password, setPassWord] = useState("");
    const [confirmPassword, setConfirmPassWord] = useState("");
    const [emai, setEmai] = useState("");
    const [nome, setNome] = useState("");
    const navigate = useNavigate();
    function login(e) {
        e.preventDefault();
        if(password !== confirmPassword){
            return alert("A senhas tem que ser iguais");
        }
        const promisse = axios.post("http://localhost:5000/cadastro", {
            nome,
            email: emai,
            senha: password
        })
        promisse.then((dados) => {
            navigate("/")
        })
        promisse.catch((err) => {
            console.log(err.response.data);
            alert(err.response.data);
        })
    }
return(
    <Column>
    <Logo text="MyWallet" />
    <Padding size="huge" />
    <Padding size="big" />
    <form onSubmit={login}>
    <Input placeholder="Nome" 
    type="name" 
    value={nome}
    onChange={(e) => setNome(e.target.value)}
    />
    <Padding />
    <Input 
    placeholder="E-mail"
     type="email"
     value={emai}
      onChange={(e) => setEmai(e.target.value)}
     />
    <Padding />
    <Input placeholder="Senha" 
    type="password" 
    value={password}
    onChange={(e) => setPassWord(e.target.value)}
    />
    <Padding />
    <Input placeholder="Confirme a Senha" 
    type="password" 
    value={confirmPassword}
    onChange={(e) => setConfirmPassWord(e.target.value)}
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