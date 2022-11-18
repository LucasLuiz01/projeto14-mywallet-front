import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Menu, NewExit, NewEntry, Registration, Login } from "./pages"
import { GlobalStyle } from "./assets/globalStyle";
import Context from "./assets/Context";
import { useState } from "react";
export default function App(){
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const contextExport = {email, setEmail,token,setToken}
    return(
        <>
        <Context.Provider value={contextExport}>
        <BrowserRouter >
        <GlobalStyle />
        <Routes>
        <Route path="/" element= {<Login />} />
        <Route path="/Registration" element= {<Registration />} />
        <Route path="/Menu" element= {<Menu />} />
        <Route path="/NewEntry" element= {<NewEntry />} />
        <Route path="/NewExit" element= {<NewExit />} />

        </Routes>
        </BrowserRouter>
        </Context.Provider>
        </>
    )
}