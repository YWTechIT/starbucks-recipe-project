import { ContainerWrapper } from "./style";

interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
