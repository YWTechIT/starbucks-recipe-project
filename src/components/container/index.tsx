import styled from "styled-components";

interface ContainerProps {
    children: React.ReactNode;
}

const ContainerWrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Container = ({ children }: ContainerProps) => {
    return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
