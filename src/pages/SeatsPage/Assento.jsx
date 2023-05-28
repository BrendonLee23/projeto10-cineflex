import { useState } from "react";
import styled from "styled-components"


export default function Assento(props) {

    const [cor, setCor] = useState("#C3CFD9")
    const [borda, setBorda] = useState("#808F9D")


    function selecionarAssento() {
        if (cor === "#1AAE9E" && borda === "#0E7D71") {
            setCor("#C3CFD9");
            setBorda("#808F9D");

        } else {
            setCor("#1AAE9E");
            setBorda("#0E7D71");
        }
    }



    return (
        <>
            {
                props.vaga === false ?
                    <SeatItemDisable>{props.numero}</SeatItemDisable>
                    :
                    props.vaga === true ?
                        <SeatItemAvaliable borda={borda} cor={cor} onClick={() => {props.setIdAssentos(props.id); props.setNumAssentos(props.numero); selecionarAssento()}} >{props.numero}</SeatItemAvaliable>
                        : ""
            }
        </>
    );
}

const SeatItemAvaliable = styled.div`
    border: 1px solid ${props => props.borda} ; // Essa cor deve mudar
    background-color: ${props => props.cor} ;  // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
    cursor: pointer;
`

const SeatItemDisable = styled.div`
    border: 1px solid #F7C52B;         // Essa cor deve mudar
    background-color: #FBE192;    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
    cursor: not-allowed;
`

// const SeatItemSelected = styled.div`
//     border: 1px solid #0E7D71;         // Essa cor deve mudar
//     background-color:#1AAE9E;    // Essa cor deve mudar
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
