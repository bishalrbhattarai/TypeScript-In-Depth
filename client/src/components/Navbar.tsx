import { AppBar, Avatar, Box, Input, OutlinedInput, TextField, Toolbar } from '@mui/material'
import React from 'react'

import {  InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import  IconButton  from '@mui/material/IconButton';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {

    const styles= {

        color:"white",
    }
    const border = {
        border:"1px solid #555555"
    }

    const style={
        color:"white",
        paddingX:5,
        height:"50px",
        borderRadius:"0px",
        "&:hover":{
            borderBottom:"2px solid white"
        }
    }
  return (
    <AppBar sx={{backgroundColor:"#1c1e21"}} position="sticky">
        <Toolbar sx={{display:"flex",justifyContent: "space-between"}} disableGutters>

            <Box flex={1} sx={{ display:"flex",alignItems: "center"}}>
            <Avatar src= "./facebook.webp" 
            
            sx={{ width: "64px", height:"64px" }}
            />   



<TextField

      size="small"
      variant="filled"
      placeholder="Search Facebook..."
      id="standard-start-adornment"
      sx={{
        ml:0,
        width: '240px',
        '& .MuiFilledInput-root': {
          borderRadius: '200px', // Fully rounded style
          backgroundColor: '#f0f2f5',
          pb:1.6,
          height:"40px"
        //   mt:2
          // Adjust background color if desired
        },
        '& .MuiFilledInput-underline:before': {
          borderBottom: 'none', // Remove the default underline
        },
        '& .MuiFilledInput-underline:after': {
          borderColor:"white",
            borderBottom: 'none',
         // Remove the active underline
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />

            </Box>


            <Box flex={1.4} sx={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>

             <Box>   
            <IconButton sx={style}>
        <HomeIcon sx={{
    
        }} />
            </IconButton>
            </Box>

            <Box>
            <IconButton sx={style}>
            <OndemandVideoIcon/>
            </IconButton>
            </Box>

            <Box>
            <IconButton sx={style}>
            <SportsEsportsIcon/>
            </IconButton>
            </Box>


<Box>
            <IconButton sx={style}>
            <GroupsIcon/>

            </IconButton>
            </Box>

            </Box>
            <Box flex={1} sx={{
// backgroundColor:"red",
display:"flex",
justifyContent:"flex-end",
alignItems:"center",
gap:1,
mr:1


                    
            }}>


<Box>
<IconButton sx={border}>
<MenuIcon sx={styles} />
</IconButton>


            </Box>

<Box>
<IconButton sx={border }>
<MapsUgcIcon sx={styles} /> 
</IconButton>


            </Box>


<Box>
<IconButton sx={ border }>
<NotificationsIcon sx={styles} />
</IconButton>


            </Box>

                <Box sx={{position:"relative"}}>
                <IconButton>
                <Avatar src= "./pp.jpg" 
            />  
                </IconButton>
                <Box sx={{ position:"absolute" ,bottom:"5px",left:"35px"}}> v

                    
                </Box>
                </Box>
                
            


            
            
            
            
             </Box>     





        </Toolbar>
        </AppBar>
  )
}

export default Navbar