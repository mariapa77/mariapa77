import { useState } from "react";

export function UseOpenFood(){
    const [openFood, setOpenFood]= useState();
    return {
        openFood,
        setOpenFood
    }
    
};