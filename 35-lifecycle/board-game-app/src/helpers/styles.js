import styled from 'styled-components'

const Button = styled.button`
    font-size: 1.25em;
    padding: 5px;
    background-color: transparent;
    border: 2px solid ${props => props.borderColor ? props.borderColor : 'white'};
    margin: 0px 5px;
`

export { Button }