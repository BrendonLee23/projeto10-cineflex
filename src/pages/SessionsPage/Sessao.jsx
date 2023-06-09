import { Link } from "react-router-dom"
import styled from "styled-components"


export default function Sessao(props) {



    return (
        <>
            <SessionContainer data-test="movie-day"> 
                {props.diaSemana} - {props.date}
                <ButtonsContainer>
                    {props.horario.map((hora) => <Link  key={hora.id} to={`/assentos/${hora.id}`} >
                            <button data-test="showtime"  >{hora.name}</button>
                            </Link>)}
                </ButtonsContainer>
            </SessionContainer>
        </>
    )
}


const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    gap: 20px;
    button {
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
`