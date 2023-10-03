import styled from "styled-components";

/*Estilização do header*/
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #e9e9e9;
`

/*Estilização do ícone do header*/
export const HeaderIcon = styled.img`
    width: 70px;
`

/*Estilização da div de opções do header*/
export const OptGroup = styled.div`
    display: flex;
    gap: 1.5rem;
`

/*Estilização de cada opção*/
export const OptAnchor = styled.a`
    font-size: 1.2rem;
    text-decoration: none;
    color: #000;
`