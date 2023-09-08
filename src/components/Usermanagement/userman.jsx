import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

  const drawerWidth = 1;
export default function Userman() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div"> 
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      </Box>
        <h1 style={{color: 'rgb(51, 54, 238)',textAlign:'center', paddingRight: 380+'px'}}>User Management</h1>
      <Link to='/userview'>
      <button style={{margin:12+'px',backgroundColor:'rgb(51, 54, 238)',color:"antiquewhite",height:30+'px',width:150+'px',fontSize:18+"px", borderRadius: 5+'px',cursor: 'pointer', border:2+'px solid grey'}}>Add User</button>
      </Link>
    </div>
  )
}