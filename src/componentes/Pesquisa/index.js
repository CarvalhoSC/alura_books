import styled from "styled-components"
import Input from "../Input"

import { useState } from "react"
import { livros } from "./dadosPesquisa"

const PesquisaContainer = styled.section`
   background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
   color: #FFF;
   text-align: center;
   padding: 85px 0;
   height: 470px;
   width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa(){
    //useState([]) -> DEFAULT state will be a list
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return(
        <PesquisaContainer>
        <Titulo>Getting Started!</Titulo>        
        <SubTitulo>Find your next book here</SubTitulo>
        <Input
            placeholder="Search for your next book"
            onKeyDown={evento => {
                const textoDigitado = evento.target.value.toUpperCase()
                const resultadoPesquisa = livros.filter(book => book.nome.includes(textoDigitado))                
                setLivrosPesquisados(resultadoPesquisa)                

            }}
        />

        {livrosPesquisados.map(
            book => (
                <Resultado>
                    <p>{book.nome}</p>
                    <img src = {book.src} />
                </Resultado>
            )
        )}

        </PesquisaContainer>
    )
}

export default Pesquisa