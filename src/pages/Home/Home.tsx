import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    alignItems: center;
    justifyContent: center;
`;

const Home = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <button onClick={() => navigate("/dictionary")}>Get Started</button>
        </Container>
    );
};

export default Home;
