import { Avatar, Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import DashboardIcon from '@mui/icons-material/Dashboard';
const Leftbar = () => {
  const white ={
    color:"white"
  }
  return (
    <Box
      flex={1}
      sx={{
        color:"white",
        position: "relative",
        overflow: "hidden",
        display: {
          xs: "none",
          sm: "block"
        },
        // width: "250px" // Set the width for the sidebar if needed
      }}
    >
      <Box
        sx={{
          color:"white",
          position: "fixed",
          overflowY: "auto",
          height: "100vh", // Take full viewport height
          // Hide scrollbar while retaining scrolling functionality
          "&::-webkit-scrollbar": {
            display: "none" // Hides the scrollbar in WebKit browsers (Chrome, Safari)
          },
          "-ms-overflow-style": "none",  // Hides scrollbar in IE and Edge
          "scrollbar-width": "none" // Hides scrollbar in Firefox
        }}
      >
        <List>
          {[
               {text:"Bishal Raj Bhattarai",icon:
                <Avatar src="./pp.jpg" /> 
               },
             {text:'Friends (60 online)',icon:<IconButton sx={{color:"white",backgroundColor:"#007FFF"}}><PeopleAltIcon /></IconButton>



             },
              {text:'Groups ',
                icon:<IconButton sx={{color:"white",backgroundColor:"#007FFF"}}><Diversity3Icon /></IconButton>
              }, 
              {text:'Dashboard',
                icon:<IconButton sx={{color:"white",backgroundColor:"#007FFF"}}><DashboardIcon /></IconButton>



              }
            
            
            ].map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
               {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider 
        
        sx={{
          backgroundColor: 'white', // Set the color to white
          height: '1px', // Adjust thickness (height) of the divider
          margin: '16px 0', // Optional: Add margin for spacing
        }}
        />



        
        {/* Repeat your lists here as needed */}
        
      </Box>
    </Box>
  );
}

export default Leftbar;
