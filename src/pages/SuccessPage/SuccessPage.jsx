import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import img from "../../imagens/seta.png"

export default function SuccessPage(props) {

    const {idFinal} = props
    const { numAssentos } = props
    const info = useLocation().state;
    console.log(info)

    return (<>
        <NavContainer>
            <Link to={`/assentos/${idFinal}`} >
                <button>
                    <img src={img} alt="seta-voltar" />
                </button>
            </Link>
            <h1>CINEFLEX</h1>
        </NavContainer>
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer data-test="movie-info" >
                <strong><p>Filme e sessão</p></strong>
                {/* renderiza o nome do filme  */}
                <p>{props.filme}</p>
                {/* renderiza a data e hora do filme */}
                <p>{props.data} - {props.hora}</p>
            </TextContainer>

            <TextContainer data-test="seats-info" >
                <strong><p>Ingressos</p></strong>
                {/* renderiza os assentos selesionados */}
                {numAssentos.map((assento) => <p key={assento.length}>Assento: {assento}</p>)}
            </TextContainer>

            <TextContainer data-test="client-info" >
                <strong><p>Comprador</p></strong>
                {/* renderiza o nome do comprador */}
                <p>Nome: {info.name}</p>
                {/* renderiza o cpf do comprador */}
                <p>CPF: {info.cpf}</p>
            </TextContainer>

            <Link data-test="go-home-btn" to="/">
                <button data-test="go-home-btn" >Voltar para Home</button>
            </Link>

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
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
        margin-top: 50px;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
    button{
        cursor: pointer;
    }
`
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