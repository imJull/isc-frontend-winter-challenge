
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { postAbonos } from '../../helpers/postAbonos';
import { postClientes } from '../../helpers/postClientes';



export const CuentasAbonarModal = ({cc, open, handleClose}) => {

    const [metodoPago] = useState("Efectivo");
    const [efectivo, setEfectivo] = useState(300);
    const {id} = cc
    

    const handleAbonar = () => {
        console.log("abonado" + efectivo);
        const abono = {          
          metodo_de_pago: metodoPago,
          monto: efectivo,
          cuentas_por_cobrarId: id 
        }
        postAbonos(abono)
        
    }

    return (
        <>
        
        <Dialog maxWidth="sm" open={open} onClose={handleClose}>
        <DialogTitle>Abonar a la factura # {cc.numero_factura}</DialogTitle>
        <DialogContent>
          <div className='modal-content'>
            <h4>Detalle de factura</h4>
            <div className='modal-content-cli'>
              <p>Cliente: <span>{cc.cliente_nombre}</span></p>
              <div className='cl-state'><FiberManualRecordIcon sx={{ fontSize: '9px', color:'orange' }} /><span >Pendiente</span> </div>   
            </div>
            <p>Cédula: <span>{cc.cliente_identificacion}</span></p>
            <p>Emitido: <span>Ene 2021</span></p>
            <p>Vencimiento: <span>{cc.plazo_vencimiento}</span></p>

          </div>

          
          <Box >

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
          <InputLabel>Monto a abonar</InputLabel>
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
          <span style={{fontSize:"10px", fontStyle: "italic", color:"red"}}>*El monto de abono por defecto es de ¢300</span>
        </DialogContent>

        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>Cancelar</Button>
          <Button variant="contained" color="success" style={{backgroundColor:"#13CE66"}} onClick={() => {handleAbonar();handleClose()}}>
            <CreditCardIcon style={{padding: "2px"}}/>Añadir
          </Button>
        </DialogActions>

      </Dialog>
        </>
    )
}
