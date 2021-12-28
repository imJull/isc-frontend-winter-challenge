import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const imgAvatar = 'https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzXC9wcm9kXC8xNjU2MTg5XC9pbWFnZVwvMTYyNTg0ODc3N1wvOTExMDMzOTAtMTAxMTY2MDA0ODc2MTI1LS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjpudWxsLCJ3aWR0aCI6MzAwLCJoZWlnaHQiOjMwMH19fQ==?t=1640670421'


export const ClientesTopBar = () => {

  return (
    <div className='topbar-container'>
    <Box sx={{flexGrow: 1, borderRadius: 16}}>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Mis Clientes
          </Typography>
        </Toolbar>

      </AppBar>
      
    </Box>
        <Avatar
            className='topbar-avatar'
            alt="Remy Sharp"
            src={imgAvatar}
            sx={{ width: 56, height: 56, margin:'0 0.6rem' }}
        />
    </div>
  );
}
