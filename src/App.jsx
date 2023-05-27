import styled from "styled-components"
import axios from "axios"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { useState } from "react"

export default function App() {

    axios.defaults.headers.common['Authorization'] = 'oMz0jQG4QLm9kV0dmew7avos'
    const [idAssentos, setIdAssentos] = useState([])

    function atualizarAssentos(novoId){
        const newArray = []
        if(idAssentos.includes(novoId)){
            idAssentos.forEach((id) => {
                if(id !== novoId){
                    newArray.push(id);
                }
            }
        ); setIdAssentos(newArray);
        console.log(newArray)
        }else{
            setIdAssentos([...idAssentos, novoId])
            console.log([...idAssentos, novoId])
        }
    }

    return (
        <BrowserRouter>
            <NavContainer>CINEFLEX</NavContainer>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/sessoes/:idFilme' element={<SessionsPage/>}/>
                <Route path='/assentos/:idSessao' element={<SeatsPage idAssentos={idAssentos} setIdAssentos={(id)=>atualizarAssentos(id)} />}/>
                <Route path='/sucesso' element={<SuccessPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
