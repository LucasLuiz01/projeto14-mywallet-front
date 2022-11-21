import { Button,Logo, Column, Input, Links, Padding } from "../../components";
import { useContext, useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Context from "../../assets/Context";

export default function Login() {
    const [password, setPassWord] = useState("");
    const [emai, setEmai] = useState("");
    const {setToken} = useContext(Context);
    const navigate = useNavigate();
    function login(e) {
        e.preventDefault();
        const promisse = axios.post("http://localhost:5000/login", {
            email: emai,
            senha: password
        });
        promisse.then((res)=>{
            console.log(res.data);
            setToken(res.data)
            navigate("/menu");
        })
        promisse.catch((eroo) =>{
            console.log(eroo);
            alert("Dados inválidos");
        })
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
