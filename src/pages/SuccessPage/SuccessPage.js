import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"

export default  function SucessPage() {
    const location = useLocation();
    const { selectedSeats, movieTitle, dayDate, dayWeekday, name, cpf, Hora } = location.state;
    

    
    
    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer data-test="movie-info">
                <strong><p>Filme e sessão</p></strong>
                <p>{movieTitle}</p>
                <p>{Hora} - {dayDate}</p>
            </TextContainer>

            <TextContainer data-test="seats-info">
            <strong><p>Ingressos</p></strong>
            {selectedSeats.map(seat => <p key={seat.id}>Assento {seat.name}</p>)}
            </TextContainer>

            <TextContainer data-test="client-info">
            <strong><p>Comprador</p></strong>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </TextContainer>
             <Link data-test="go-home-btn"  to="/">
             <button>Voltar para Home</button>
             </Link>
            
        </PageContainer>
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
`