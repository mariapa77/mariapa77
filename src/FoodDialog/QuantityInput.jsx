import React from "react";
import styled from "styled-components";
import { pizzaRed } from "../styles/colors";
import { Title } from "../styles/title";


const QuantityInputStyled = styled.input`
font-size:18px;
width: 24px;
text-align: center;
border: none;
outline: none;

`;
const IncrementContainer = styled(Title)`
display: flex;
height: 24;

`;
const IncremantButton = styled.div`
width: 23px;
color: ${pizzaRed};
font-size: 20px;
text-align: center;
cursor:pointer;
padding:-12px;
line-height:23px;
margin:0px 10px;
border: 1px solid ${pizzaRed};
${({disabled})=>
disabled &&
`opacity:0.5;
pointer-events:  none;
`}
&:hover {
    background-color: #ffe3e3
}

`;

export function QuantityInput({quantity}){
    return ( 
    <IncrementContainer>
     <div>Quantity:</div>
     <IncremantButton onClick={()=>{
    quantity.setValue(quantity.value - 1);
     }}
      disabled={quantity.value === 1}
      > - 
      </IncremantButton>
     <QuantityInputStyled {...quantity} />
     <IncremantButton 
     onClick={()=>{
    quantity.setValue(quantity.value + 1);
    }}
    >  + 
    </IncremantButton>
     </IncrementContainer>

 );
}
