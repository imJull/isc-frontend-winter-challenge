import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';


export const CuentasAbonarBTN = ({open, handleClose}) => {

    const [metodoPago, setMetodoPago] = useState("Efectivo");
    const [efectivo, setEfectivo] = useState(300);

    const handleAbonar = () => {
        console.log("abonado" + efectivo);
    }

    return (
        <div>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Abonar a la factura</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span>Detalle de factura</span>
          </DialogContentText>
          <Box onSubmit={handleAbonar}>

          <TextField
            required
            disabled
            autoFocus
            value={metodoPago}
            margin="dense"
            id="metodoPago"
            name="metodoPago"
            label="Método de pago"
            placeholder='Efectivo'
            type="text"
            fullWidth
            variant="standard"
          />
          <InputLabel>Saldo restante</InputLabel>
          <TextField
            required
            value={efectivo}
            onChange={(e) => setEfectivo(e.target.value)}
            id="efectivo"
            name="efectovo"
            fullWidth
            variant="standard"
          >
          </TextField>
        
          </Box>
          <span style={{fontSize:"10px", fontStyle: "italic", color:"red"}}>*Al agregar un nuevo cliente, automáticamente se recrea una cuenta por cobrar con un saldo de $5000</span>
        </DialogContent>

        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>Cancelar</Button>
          <Button variant="contained" color="success" style={{backgroundColor:"#13CE66"}} onClick={(handleAbonar)}><CreditCardIcon style={{padding: "2px"}}/>Añadir</Button>
        </DialogActions>

      </Dialog>
        </div>
    )
}
