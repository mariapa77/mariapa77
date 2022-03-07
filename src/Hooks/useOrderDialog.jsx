import {useState} from "React";

export function useOrderDialog() {
const [openOrderDialog, setOpenOrderDialog] = useState();
return {
    openOrderDialog,
    setOpenOrderDialog
 };
}