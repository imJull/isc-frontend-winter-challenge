import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import { postClientes } from '../../helpers/postClientes';


export const ClienteAdd = ({open, handleClose}) => {
    const init = 0;
    const [nombre, setNombre] = useState('')
    const [tipo, setTipo] = useState('')
    const [identificacion, setIdentificacion] = useState(init)
    const [telefono, setTelefono] = useState(init)
    const [horario, setHorario] = useState('')
    const [estado, setEstado] = useState(false)
    
    
    const handleAdd = (e) => {
            e.preventDefault();
            
            
            if( nombre === "" || tipo === "" || identificacion === "" || telefono === "" || horario === ""){
                alert("Todos los campos son obligatorios. Recuerte rellenar de manera válida todos los espacios")
            }else{
              
              const cuentas_por_cobrar = [
                {
                  id: Math.floor(Math.random() * 1000 +1),
                  cliente_identificacion: identificacion,
                  cliente_nombre: nombre,
                  numero_factura: Math.floor(Math.random() * 500 +1),
                  condicion: "Credito",
                  plazo_vencimiento: "1 mes",
                  total_original: 5000,
                  saldo_restante: 3500,
                  abonos: [
                    {
                      id: Math.floor(Math.random() * 100 + 1),
                      metodo_de_pago: "efectivo",
                      monto: 1500
                    }
                  ]
                }
              ]
              
              postClientes({nombre, tipo, identificacion,telefono,horario, estado, cuentas_por_cobrar})
              
              setNombre("")
              setTipo("")
              setIdentificacion(init)
              setTelefono(init)
              setHorario("")
              setEstado(true)

              handleClose()

              window.location.reload();
              
            }
            
            
        }

  return (


    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agregar Nuevo Cliente</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Este formulario es necesario para agregar un nuevo cliente. Todos los espacios son abligatorios.
          </DialogContentText>
          <Box onSubmit={handleAdd}>

          <TextField
            required
            autoFocus
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            margin="dense"
            id="nombre"
            name="nombre"
            label="Ingrese su nombre"
            placeholder='Nombre Apellido'
            type="text"
            fullWidth
            variant="standard"
          />
          <InputLabel id="demo-simple-select-label">Tipo de identificación</InputLabel>
          <Select
            required
            label="Tipo de identificación"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            id="tipo"
            name="tipo"
            labelId="demo-simple-select-label"
            fullWidth
            variant="standard"
          >
            <MenuItem value="Cliente Jurídico">Cliente Jurídico</MenuItem>
            <MenuItem value="Cliente Físico">Cliente Físico</MenuItem>

          </Select>
          <TextField
            required
            autoFocus
            value={identificacion}
            onChange={(e) => setIdentificacion(e.target.value)}
            margin="dense"
            id="identificacion"
            name='identificacion'
            label="Ingrese numero de Identificación"
            placeholder="11234564"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            autoFocus
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            margin="dense"
            id="telefono"
            name='telefono'
            label="Ingrese numero de Teléfono"
            placeholder="8181-8080"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            autoFocus
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
            margin="dense"
            id="horario"
            name='horario'
            label="Horario de atencion "
            placeholder="8am - 12md"
            type="text"
            fullWidth
            variant="standard"
          />
          <FormGroup align="center">
           <FormControlLabel 
            control={
              <Checkbox 
                value={estado} 
                onChange={(e) => setEstado(!estado)} />
                } label="¿El usuario se encuentra activo?" 
            />
            {console.log(estado)}
           
          </FormGroup>
          </Box>
          <span style={{fontSize:"10px", fontStyle: "italic", color:"red"}}>*Al agregar un nuevo cliente, automáticamente se crea una cuenta por cobrar con un saldo de ¢5000</span>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={(handleAdd)}>Añadir</Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}