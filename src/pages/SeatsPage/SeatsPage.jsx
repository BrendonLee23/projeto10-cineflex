import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import Assento from "./Assento";

export default function SeatsPage(props) {

    const { idAssentos} = props
    const navigate = useNavigate();
    const parametros = useParams();
    console.log(parametros)
    const [assento, setAssento] = useState(null);
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${parametros.idSessao}/seats`
        const promise = axios.get(URL);
        promise.then((resposta) => {
            setAssento(resposta.data);
            console.log(resposta.data)
        });
        promise.catch((erro) => {
            console.log(erro.response.data);
        });
    }, [parametros.idSessao]);


    function finalizarCompra(event) {
        event.preventDefault();
        
        let infos = 
        {
            ids: idAssentos,
            nome: nome,
            cpf: cpf
        };

        const promise = axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', infos);
        promise.then(ans => { console.log('O POST DEU CERTO', ans); });
        promise.catch(erro => console.log('O POST DEU ERRO', erro));
        navigate("/sucesso", {state: "test"});
    }


    return (
        <PageContainer>
            Selecione o(s) assento(s)
            <SeatsContainer>
                {assento?.seats.map((cadeira) => <Assento
                    key={cadeira.id}
                    numero={cadeira.name}
                    vaga={cadeira.isAvailable}
                    id={cadeira.id} 
                    idAssentos={idAssentos} 
                    setIdAssentos={(id)=>props.setIdAssentos(id)}
                />)}
            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle1 />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle2 />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle3 />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer onSubmit={finalizarCompra} >
                <label htmlFor="nome" >Nome do Comprador:</label>
                <input value={nome} onChange={(e) => setNome(e.target.value) } required id="nome" placeholder="Digite seu nome..." />


                <label htmlFor="cpf" >CPF do Comprador:</label>
                <input value={cpf} onChange={(e) => setCpf(e.target.value)} required id="cpf" placeholder="Digite seu CPF..." />

                <button>Reservar Assento(s)</button>


            </FormContainer>

            <FooterContainer>
                <div>
                    <img src={assento?.movie.posterURL} alt="poster" />
                </div>
                <div>
                    <p>{assento?.movie.title}</p>
                    <p>{assento?.day.weekday} - {assento?.name}</p>
                </div>
            </FooterContainer>

        </PageContainer>
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
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
        cursor: pointer;
    }
    input {
        width: calc(100vw - 60px);
    }
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle1 = styled.div`
    border: 1px solid #0E7D71;         // Essa cor deve mudar
    background-color: #1AAE9E;    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionCircle2 = styled.div`
    border: 1px solid #808F9D;         // Essa cor deve mudar
    background-color: #C3CFD9;    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionCircle3 = styled.div`
    border: 1px solid #F7C52B;         // Essa cor deve mudar
    background-color: #FBE192;    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`
// const SeatItem = styled.div`
//     border: 1px solid blue;         // Essa cor deve mudar
//     background-color: lightblue;    // Essa cor deve mudar
//     height: 25px;
//     width: 25px;
//     border-radius: 25px;
//     font-family: 'Roboto';
//     font-size: 11px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 5px 3px;
// `
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