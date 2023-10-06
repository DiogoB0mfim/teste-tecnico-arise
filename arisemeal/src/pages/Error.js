import { useNavigate } from "react-router-dom";
import * as S from "../styles/ErrorStyled";

const Error = () => {
    const navigate = useNavigate();
    return (
        <>
            <S.ContainerPage>
                <S.ContainerTitle>OPS! Não encontramos essa página :{"("}</S.ContainerTitle>
                <S.BackButton onClick={() => navigate("/")}>Voltar ao início</S.BackButton>
            </S.ContainerPage>
        </>
    );
}

export default Error;