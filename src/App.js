import React,{useState} from "react";
//import { collection,getDocs } from "firebase/firestore/lite";//
//import { dbConfig } from "./config/firebase";//
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/Menu";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import {GlobalStyle} from "./styles/GlobalStyle";
import { Order } from "./Order/Order";
import {UseOpenFood} from "./Hooks/UseOpenFood";
import { useOrders } from "./Hooks/useOrders";
import {useTitle} from "./Hooks/useTitle";
import {useAuthetication}from"./Hooks/useAuthentication";
import {OrderDialog} from "./Order/OrderDialog";
import {useOrderDialog} from "./Hooks/useOrderDialog";



function App() {
  const openFood= UseOpenFood();
  const  orders = useOrders();
  const auth = useAuthetication();
  const orderDialog = useOrderDialog();



  useTitle({...openFood, ...orders});

  return (
    <>
     
    <GlobalStyle/>
    <OrderDialog {...orderDialog} {...orders} />

    <FoodDialog {...openFood}  {...orders}/>
    <Navbar {...auth} />
    <Order {...orders} {...openFood} {...auth} {...orderDialog} />
    <Banner/>
    <Menu {...openFood} />
    
    
   </>
    
   
  );
};

export default App;
