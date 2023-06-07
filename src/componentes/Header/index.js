import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';

const HeaderComponent = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header(){
    return(
        <HeaderComponent>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderComponent>
    )
}

export default Header