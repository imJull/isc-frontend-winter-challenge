import React, { useState } from "react";
import {Button} from '@mui/material';
import { CuentasAbonarModal } from "./CuentasAbonarModal";

export const CuentasOpenBTN = ({cc, saldoRestante}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <>
      <Button
        disabled={saldoRestante <= 0}
        variant="contained"
        onClick={() => handleClickOpen() }
      >
        Abonar
      </Button>

         <CuentasAbonarModal open={open} handleClose={handleClose} cc={cc}/>
      
    </>
  );
};
