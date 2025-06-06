import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';

/*
* This is just our drop down menu item for selecting our different methods of showing movies
* 1. We can prop drill
* 2. We can use a custom hook with context
* 3  We can use a reducer with context
*/
const pages = [{'page':"Prop Drilling",'link':'/prop-drilling'}, {'page':"Custom Hook",'link':'/custom-hook'},
              {'page':'Reducer','link':'/reducer'}];

export default function MenuAppBar() {
  // store our selection here
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // handle our clicks
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ width : '50px' , float:'left', backgroundColor:'transparent !important'}}>

      <AppBar sx={{ backgroundColor:'transparent !important'}}
           position="static">
        <Toolbar>
        <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block"}
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                  <Link to={page.link}>{page.page}</Link>
                </MenuItem> 
              ))}
            </Menu>
        </Toolbar>
      </AppBar> 
      </Box>
  );
}
