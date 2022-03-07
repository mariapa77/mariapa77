import styled from "styled-components";
import React from "react";

const ToppingGrid = styled.div`
display: grid;
grid-template-columns: repaat(3, 1fr);


`;

const ToppingCheckbox = styled.input`
margin-right: 10px;
cursor:pointer;

`;

const checkboxLabel = styled.label`
cursor:pointer;

`;

export function toppings({toppings, checkTopping}){
    return (
        <ToppingGrid>
            {toppings.map((toppings,i) => (
            <checkboxLabel>
             <ToppingCheckbox
              type="checkbox"
              checked= {toppings.checked}
              onClick={()=>{
                 checkTopping(i);
             }}
             />
             {toppings.name}   
            </checkboxLabel>
            ))}
        </ToppingGrid>
    );

}