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
    const [numAssentos, setNumAssentos] = useState([])
    const [data, setData] = useState('')
    const [hora, setHora] = useState('')
    const [filme, setFilme] = useState('')

    function atualizarAssentos(novoId) {
        const newArray = []
        if (idAssentos.includes(novoId)) {
            idAssentos.forEach((id) => {
                if (id !== novoId) {
                    newArray.push(id);
                }
            }
            ); setIdAssentos(newArray);
            console.log(newArray)
        } else {
            setIdAssentos([...idAssentos, novoId])
            console.log([...idAssentos, novoId])
        }
    }

    function atualizarNumAssentos(novoNum) {
        const newArray = []
        if (numAssentos.includes(novoNum)) {
            numAssentos.forEach((num) => {
                if (num !== novoNum) {
                    newArray.push(num);
                }
            }
            ); setNumAssentos(newArray);
            console.log(newArray)
        } else {
            setNumAssentos([...numAssentos, novoNum])
            console.log([...numAssentos, novoNum])
        }
    }




    return (
        <BrowserRouter>
            <NavContainer>CINEFLEX</NavContainer>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/sessoes/:idFilme' element={<SessionsPage filme={filme} setFilme={setFilme} />} />
                <Route path='/assentos/:idSessao' element={<SeatsPage data={data} setData={setData} hora={hora} setHora={setHora} numAssentos={numAssentos} setNumAssentos={(num) => atualizarNumAssentos(num)} idAssentos={idAssentos} setIdAssentos={(id) => atualizarAssentos(id)} />} />
                <Route path='/sucesso' element={<SuccessPage filme={filme} data={data} hora={hora} numAssentos={numAssentos} />} />
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
