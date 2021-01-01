import styled from "styled-components";

interface InputProps {
    width: string;
}

export const Input = styled.input<InputProps>`
    height: 40px;
    border: 1px solid #e5e5e5;
    width: ${(props) => props.width};
    padding: 0 2px;
`;
