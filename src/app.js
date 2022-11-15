import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Menu, NewExit, NewEntry, Registration, Login } from "./pages"
import { GlobalStyle } from "./assets/globalStyle";
export default function App(){
    return(
        <>
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
        </>
    )
}