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
    const [estado, setEstado] = useState('Activo')
    
    
    const handleAdd = (e) => {
            e.preventDefault();
            
            
            if( nombre === "" || tipo === "" || identificacion === "" || telefono === "" || horario === "" || estado === ""){
                alert("Todos los campos son obligatorios. Recuerte rellenar de manera válida todos los espacios")
            }else{
              postClientes({nombre, tipo, identificacion,telefono,horario, estado})
              
              setNombre("")
              setTipo("")
              setIdentificacion(init)
              setTelefono(init)
              setHorario("")
              setEstado("")

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
           <FormControlLabel control={<Checkbox defaultChecked />} label="¿El usuario se encuentra activo?" />
           {console.log(Checkbox.propTypes.checked)}
          </FormGroup>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={(handleAdd)}>Añadir</Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}