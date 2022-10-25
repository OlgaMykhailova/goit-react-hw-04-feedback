import styled from 'styled-components';

export const List = styled.ul`
list-style: none;
border-top: 2px dotted black;
background-color: rgb(183, 220, 230);
margin: 0;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`

export const Item = styled.li`
margin-bottom: 5px;
font-weight: 500;
font-size: 16px;
&:last-child {
    margin-bottom: 0px;
  }`