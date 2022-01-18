import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { ClienteAdd } from './ClienteAdd';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#c0c0c0',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const ClientesSrchAddBar = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  


  return (
    <Box sx={{ flexGrow: 1, margin:'1rem 0rem'}}>
      <AppBar color="inherit" position="static">
        <Toolbar>
           <Search>
            <SearchIconWrapper>
              <SearchIcon color='primary' />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> 
          <Typography
            variant="p"
            noWrap
            color='primary'
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            x Clear filters
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <Button onClick={handleClickOpen} variant="contained">
              <AddCircleOutlineIcon />
              <span style={{marginLeft:"5px"}}>Agregar nuevo Cliente</span>
            </Button>

            {
              (open) && <ClienteAdd open={open} handleClose={handleClose} />
            }

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
