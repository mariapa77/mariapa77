import React from "react";
import {Dialog, DialogContent, DialogShadow, DialogFooter, ConfirmButton}from "../FoodDialog/FoodDialog";

export function OrderDialog({openOrderDialog, setopenOrderDialog, setOrders}){
    return  openOrderDialog ? <>
    <DialogShadow/>
    <Dialog>
        <DialogContent>
            <h2> 🚗 Your order is on the way!</h2>
            <p> You have been emailed confirmation</p>
        </DialogContent>
        <DialogFooter>
            <ConfirmButton onClick={() => {
            setOrders([]);
            setopenOrderDialog();
            }}>
                I'm still hungrey
            </ConfirmButton>
        </DialogFooter>
    </Dialog>
    
    </> : <div/>

}