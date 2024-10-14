import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Rightbar = () => {
  return (
    <Box
      flex={1}
      sx={{
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
          {['Inbox', 'Starred', 'Send email email email email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {['Inbox', 'Starred', 'Send email email email email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {['Inbox', 'Starred', 'Send email email email email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {['Inbox', 'Starred', 'Send email email email email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        {/* Repeat your lists here as needed */}
        
      </Box>
    </Box>
  );
}

export default Rightbar;
