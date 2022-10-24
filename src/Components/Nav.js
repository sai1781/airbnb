import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Stack } from '@mui/material';
import { faCoffee, faGlobe } from '@fortawesome/free-solid-svg-icons'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Chip } from '@mui/material';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons'



const Nav = _ => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
   
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };


    return (
        <Box  sx={{ flexGrow: 1 }}>
            <AppBar  position='relative' sx={{ borderBottom: "1px solid rgba(0,0,0,0.1)", boxShadow:"none", backgroundColor:"white", height:"8vh" }}>
                <Toolbar mr="0" color="red">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        Style={{alignitems:"center", justifyContent:"center"}}
                    >
                        <FontAwesomeIcon color='red' fontSize={40}  icon={faAirbnb} />
                    </IconButton>
                    <Typography color="red" variant="h4" fontWeight={500} component="div" sx={{ flexGrow: 1 }}>
                        airbnb
                    </Typography>
                    <React.Fragment>
                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            
                                <Stack direction="row" spacing={1} border="none">
                                    <Chip sx={{border:"none", fontSize:18, fontWeight:600}} label="Become a host" variant="outlined"  onClick={handleClick} />
                                    <Chip sx={{border:"none", fontSize:18, fontWeight:600}} label={<FontAwesomeIcon icon={faGlobe} />} variant="outlined" onClick={handleClick} >
                                    
                                    </Chip>
                                </Stack>
                    
                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Stack direction="row" spacing={1} paddingLeft={1} paddingRight={1} padding={0.5} border="0.1px solid rgba(0,0,0,0.3)" borderRadius={12}>
                                        <MenuIcon sx={{height:32,}}  />
                                        <Avatar sx={{ width: 32, height: 32,}}>M</Avatar>
                                    </Stack>
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'relative',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top', width:"15" }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'botto',width:"15" }}
                        >
                            <MenuItem width="15" >
                                 Messages
                            </MenuItem>
                            <MenuItem>
                                 Notifications
                            </MenuItem>
                            <MenuItem>
                            Trips
                            </MenuItem>
                            <MenuItem>
                            Wishlists
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                            Host your Experience
                            </MenuItem>
                            <MenuItem>
                            Host you Home
                            </MenuItem>
                            <MenuItem>
                            Account
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                               
                                Help
                              
                            </MenuItem>
                            <MenuItem>
                              
                              Log out
                            </MenuItem>
                          
                        </Menu>
                    </React.Fragment>


                </Toolbar>
            </AppBar>
        </Box>
    )
}


export default Nav;




