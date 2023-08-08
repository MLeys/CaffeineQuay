import { Outlet } from "react-router-dom";
import { useEffect, useContext} from "react";

import AppBar from '@mui/material/AppBar';
import { CssBaseline } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2.js";
import Toolbar from '@mui/material/Toolbar';
import Box from "@mui/material/Box";

import Header from "../../components/Header/Header";

function Layout() {

  return (
		<Box  sx={{ display: 'flex' }}>
      <CssBaseline />
		  <AppBar  position="fixed">  
       <h1>fdfdasdfasfadsf sdafsadfsad</h1>

      </AppBar>   


    </Box>
  )
}

export default Layout;