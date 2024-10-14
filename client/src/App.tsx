
// import styled from '@emotion/styled';
import { Box, Button, Container, Stack, Typography,styled } from '@mui/material';
import Leftbar from './components/Leftbar';
import Rightbar from './components/Rightbar';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
function App() {



  return (
    <>
<Navbar />
<Box>




      <Stack direction={"row"} spacing={5} justifyContent={"space-between"}>
        <Leftbar  />
        <Feed />
        <Rightbar />
      </Stack>

      </Box>

   

    </>
  )
}


export default App
