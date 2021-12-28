import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { NavLink } from 'react-router-dom'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import Logo from '../../../src/assets/FendiLogo.png';
import './tab2.css'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export function MiniDrawer() {
  const [open, setOpen] = React.useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawer}>
            {!open ? <KeyboardDoubleArrowRightIcon/> : <KeyboardDoubleArrowLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          { open ?
            <div className='container'>
              <div className='nav-container'>
                  <h3>GXYARD</h3>
                  <img src={Logo} alt='logo'/>


                  <nav className='nav'>
                      <NavLink to="/clientes" className={({isActive}) => (isActive ? "active" : "inactive")}>
                            <PeopleAltOutlinedIcon/> Clientes                          
                      </NavLink>

                      <NavLink to="/cuentascobrar" className={({isActive}) => (isActive ? "active" : "inactive")}>
                          <AttachMoneyIcon/> Cuentas por Cobrar
                      </NavLink>
                  </nav>
              </div>
          </div>
            :
          <div className='container-closed'>
          <div className='nav-container'>
                <nav className='nav'>
                    <NavLink to="/clientes" className={({isActive}) => (isActive ? "active" : "inactive")}>
                          <PeopleAltOutlinedIcon/>                        
                    </NavLink>

                    <NavLink to="/cuentascobrar" className={({isActive}) => (isActive ? "active" : "inactive")}>
                        <AttachMoneyIcon/>
                    </NavLink>
                </nav>
            </div>
          </div>
          }
        </List>
      </Drawer>

    </Box>
  );
}