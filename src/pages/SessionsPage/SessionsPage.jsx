
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { useEffect, useState } from "react";
import axios from "axios";
import Sessao from "./Sessao";
import img from "../../imagens/seta.png"

export default function SessionsPage(props) {

    const { data, setData, hora, setHora, filme, setFilme, idFinal2, setIdFinal2 } = props
    const parametros = useParams();
    console.log(parametros)
    const [sessao, setSessao] = useState(null);


    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${parametros.idFilme}/showtimes`
        const promise = axios.get(URL);
        promise.then((resposta) => {
            setSessao(resposta.data);
            console.log(resposta.data)

            const novoIdFinal2 = [...idFinal2, resposta.data.id]
            setIdFinal2(novoIdFinal2)

            const novoFilme = [...filme]
            novoFilme.push(resposta.data.title)
            setFilme(novoFilme);
        });
        promise.catch((erro) => {
            console.log(erro.response.data);
        });
    }, [parametros.idFilme])


    return (
        <>
            <NavContainer>
                <Link to="/" onClick={() => {
                    // Limpeza de dados
                    setData(null);
                    setHora(null);
                    setFilme([]);
                    setIdFinal2([]);
                    // volta pra homepage
                    history.push('/');
                }}>
                    <button>
                        <img src={img} alt="seta-voltar" />
                    </button>
                </Link>
                <h1>CINEFLEX</h1>
            </NavContainer>
            <PageContainer>
                Selecione o horário
                <>
                    {sessao?.days.map((day) =>

                        <Sessao
                            key={day.id}
                            data={data}
                            setData={setData}
                            diaSemana={day.weekday}
                            date={day.date}
                            horario={day.showtimes}
                            hora={hora}
                            setHora={setHora}
                        />)}
                </>
                <FooterContainer data-test="footer" >
                    <div>
                        <img src={sessao?.posterURL} alt="poster" />
                    </div>
                    <div>
                        <p>{sessao?.title}</p>
                    </div>
                </FooterContainer>
            </PageContainer>
        </>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`
const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;
    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }
    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`

// const SessionContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     font-family: 'Roboto';
//     font-size: 20px;
//     color: #293845;
//     padding: 0 20px;
// `
// const ButtonsContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     margin: 20px 0;
//     button {
//         margin-right: 20px;
//     }
//     a {
//         text-decoration: none;
//     }
// `
const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #C3CFD9;

    position: fixed;
    top: 0;
    button{
        background-color: #C3CFD9;;
    }
    img{
        cursor: pointer;
    }
    h1{
        font-family: 'Roboto', sans-serif;
        font-size: 34px;
        margin-right: 95px;
        text-decoration: none;
        color: #E8833A;
    }
`