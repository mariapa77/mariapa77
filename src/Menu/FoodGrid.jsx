import styled from "styled-components";
import { Title } from "../styles/title";

export const FoodGried = styled.div`
display:grid;
grid-template-columns 1fr 1fr;
gap:20px;

`
export const FoodLabel = styled (Title)`
position:absolute;
background-color: rgba(255,255, 255, .8);
padding: 8px;

`



export const Food = styled.div`
height: 100px;
padding:10px;
font-size:20px;
background-image: ${({img}) => `url(${img});`}
background-position: center;
background-size: cover;
filter:contraste(75%);
border-radius: 7px;
margin-top: 5px;
transition-property: box-shadow margin-top filter;
transition-duration: .1s;
box-shadow: 0px 0px 11px 0px grey;
&:hover {
    cursor: poiter;
    filter:contrast:(100%);
    margin-top: 0px;
    margin-bottom: 5px;
    box-shadow: 0px 5px 10px 0px grey;
    opacity: 0.7;
}
`;