import * as S from "../styles/HeaderStyled"
import logo from "../assets/logo-meal.png"

const Header = () => {
    return (
        <S.Header>
            <a href="/"><S.HeaderIcon src={logo} alt="main icon" /></a>
            <S.OptGroup>
                <S.OptAnchor href="/searchByName">pesquisar receitas</S.OptAnchor>
                <S.OptAnchor href="/searchByLetter">receitas por letra</S.OptAnchor>
                <S.OptAnchor href="/ingredients">receitas por ingredientes</S.OptAnchor>
            </S.OptGroup>
        </S.Header>
    );
}

export default Header;
