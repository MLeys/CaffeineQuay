import * as React from 'react';
import theme from '../../theme';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


function MenuIcon({color= "currentColor", fill="currentColor", height=16, width=16}){
  return (
    <svg 
      color={color}
      xmlns="http://www.w3.org/2000/svg" 
      width={width}
      height={height} 
      fill={fill}
      className="bi bi-list" 
      viewBox="0 0 16 16"
    >
      <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
  )
}

const menuItems = ['Quick Order', 'Menu'];

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" >
        
        <Toolbar sx={{ bgcolor: theme.palette.neonPink.main}} >
          <IconButton
            
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, bgcolor: theme.palette.secondary.main }}
          >
            <MenuIcon />
          </IconButton>
          <Box flexDirection={'row'} bgcolor={theme.palette.neonPink.light}>
            {menuItems.map((item) => (
              <Typography key={item} color='white' variant="h6" component="button" sx={{ flexGrow: 1 }}>
                {item}
              </Typography>
            ))}
            <Typography  variant='h3'>Caffeine Quay</Typography>
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}