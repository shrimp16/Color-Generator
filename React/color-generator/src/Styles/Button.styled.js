import styled from 'styled-components';

export const StyledButton = styled.button`
    width: fit-content;
    margin: auto;
    height: 4rem;
    font-size: 2.5rem;
    border-radius: 10px;
    border: 2px black solid;
    transition: 0.4s;
    cursor: pointer;
    background-color: white;
    margin-bottom: 10px;

    &:hover {
        background-color: black;
        color: white;
    }
`