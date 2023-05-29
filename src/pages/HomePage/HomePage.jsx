import styled from "styled-components"
import axios from "axios";
import { useEffect, useState } from "react";
import Poster from "./Poster";
// import { Link } from "react-router-dom";
// import img from "../../imagens/seta.png"

export default function HomePage() {



    const [poster, setPoster] = useState([]);

    useEffect(() => {

        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
        const promise = axios.get(URL);

        promise.then((resposta) => {
            setPoster(resposta.data);
            console.log(resposta.data);
        });

        promise.catch((erro) => {
            console.log(erro.response.data);
        });

    }, [])


    if (poster.length === 0) {
        return (<div> Carregando..... </div>);
    }

    return (
        <>
            <NavContainer>
                {/* <Link>
                    <img src={img} alt="seta-voltar" />
                </Link> */}
                <h1>CINEFLEX</h1>
            </NavContainer>
            <PageContainer>
                Selecione o filme
                <ListContainer>
                    {poster.map((p) => <Poster key={p.id} poster={poster} nome={p.title} imagem={p.posterURL} id={p.id} />)}
                </ListContainer>
            </PageContainer>
        </>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #C3CFD9;
    color: #E8833A;
    position: fixed;
    top: 0;
    img{
        cursor: pointer;
    }
    h1{
        font-family: 'Roboto', sans-serif;
        font-size: 34px;
        margin-right: 20px;
        text-decoration: none;
    }
`