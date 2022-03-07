import { useState } from "react";

export function useToppings(defaultTopping){
    const [toppings,setToppings] =useState(defaultTopping || getDeFaultToppings())

    function checkTopping(index){
        const newToppings = [...toppings];
        newToppings[index].checked=!newToppings[index].checked
        setToppings(newToppings)
    }
    return{
        checkTopping,
        toppings
    };
}

const toppingsList=[
    "Extra Cheese",
    "Pepperoni",
    "Sausage",
    "Pinaples",
    "Ham",
    "Spinich",
    "Mushrooms",


];



function getDeFaultToppings () {
return toppingsList.map(toppings => ({
    name:toppings,
    check:false

}));

}
