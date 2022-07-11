import styled from 'styled-components';

export const StyledButton = styled.button`
    width: fit-content;
    height: 4rem;
    font-size: 2.5rem;
    border-radius: 10px;
    border: 2px black solid;
    transition: 0.4s;
    cursor: pointer;
    background-color: white;

    &:hover {
        background-color: black;
        color: white;
    }
`