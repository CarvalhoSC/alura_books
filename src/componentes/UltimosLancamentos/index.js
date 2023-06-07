import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import NewBook from '../../imagens/livro2.png'
import styled from 'styled-components'
import CardRecomenda from '../CardRecomenda'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
   margin-top: 30px;
   display: flex;
   width: 100%;
   justify-content: center;
   cursor: pointer;
`

function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>
            <Titulo
            cor = "#EB9B00"
            tamanhoFonte="36px"
            >New Books</Titulo>
            <Titulo>New Books</Titulo>
            <NovosLivrosContainer>
                {livros.map( book => (                                                        
                            <img src={book.src}/>                       
                        ))}
            </NovosLivrosContainer>
            <CardRecomenda
                pTitulo="Maybe you can be interested in..."
                pSubTitulo="Angular"
                pDescricao="Some Description"
                pImg= {NewBook}
                pDescricaoBotao="Click Here"
            />      
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos