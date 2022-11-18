import { Button, Column, Input, Padding } from "../../components";
import { useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Context from "../../assets/Context";
export default function NewExit() {
    const [valor, setValor] = useState();
    const {email} = useContext(Context);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    function login(e) {
        e.preventDefault();
        const promisse = axios.post("http://localhost:5000/wallet", {
            valor,
            tipo: false,
            description,
            email
        });
        promisse.then(()=>{
            navigate("/menu")
        })
        promisse.catch((err) =>{
            console.log(err);
        })
    }
return(
    <Column>
    <StyledSpan>Nova saída</StyledSpan>
    <Padding size="big" />
    <form onSubmit={login}>
    <Input placeholder="Valor" 
    type="number" 
    value={valor}
    onChange={(e) => setValor(e.target.value)}
    />
    <Padding />
    <Input 
    placeholder="Descrição"
     type="string"
     value={description}
      onChange={(e) => setDescription(e.target.value)}
     />
    <Padding />
    <Button text="Salvar saída" />
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