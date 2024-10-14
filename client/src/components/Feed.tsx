import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, Divider } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';



import CommentIcon from '@mui/icons-material/Comment';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard() {
  const [liked,setLiked] = React.useState<boolean>(false)
  const handleLike = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLiked(!liked);
  };


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{border:"1px solid black"}} flex={1.6}>
    <Card sx={{backgroundColor:"#1c1e21",color:"white"}}>
      {/* <CardHeader
        avatar={
          <Avatar src="./pp.jpg" aria-label="recipe" />   
        }
        title="Bishal Raj Bhattarai"
        subheader="8 mins ago."
      /> */}
      <Box sx={{display:"flex",p:2,justifyContent:"space-between"}}>

          <Box  >

        <Box sx={{display:"flex",gap:1,alignItems:"center",justifyContent:"space-between"}}> 

          <Box>
          <Avatar src="./pp.jpg"  />   
          </Box>

          <Box>
            <h4>Bishal Raj Bhattarai</h4>
            <h6>8 minutes ago.</h6>
          </Box>

        </Box>

          </Box>
          <Box sx={{display:"flex"}} >

            <Box>
              <IconButton>
              <MoreHorizIcon sx={{color:"white"}}/>
              </IconButton>
            </Box>


            <Box>
              <IconButton>
              <CloseIcon sx={{color:"white"}}/>
              </IconButton>
            </Box>

          </Box>



      </Box>


          <Box sx={{p:1}}>
          <h4>Happy Dashain 2081!!</h4>

          </Box>


      <CardMedia
        component="img"
        // height="194"
        image="./pp.jpg"
        alt="Paella dish"
      />
 
      <CardActions sx={{display:"flex",justifyContent:"space-between"}} disableSpacing>
          

          <Box sx={{display:"flex",alignItems:"center",gap:0.3}}>
          <IconButton  sx={{backgroundColor:"#007FFF" }}>
          <ThumbUpIcon sx={{color:"white",width:"15px",height:"15px" }}/>
          </IconButton>
          <IconButton sx={{backgroundColor:"#DC143C"}}>
          <FavoriteIcon sx={{color:"white",width:"15px",height:"15px" }}/>
          </IconButton>
            234
          </Box>
          <Box>
           21 comments  2 shares 

          </Box>

          


      </CardActions>
  
      <Divider 
        
        sx={{
          backgroundColor: 'white', // Set the color to white
          height: '1px', // Adjust thickness (height) of the divider
          // margin: '16px 0', // Optional: Add margin for spacing
        }}
        />

        <CardActions sx={{justifyContent:"space-between"}} disableSpacing>
          <Box   sx={{display:"flex",alignItems:"center"}}>
            <Box
            >
          <ThumbUpIcon

          sx={{color: liked?"#007FFF":"white"}}/>
          </Box>
          <Box>
            <Button 
            onClick={handleLike}
            sx={{color:liked? "#007FFF":"white"}}>
               {liked?"liked":"like"} 
            </Button>
            </Box>
             </Box>

        
             <Box sx={{display:"flex",alignItems:"center"}}>
            <Box>
          <CommentIcon sx={{color:"white"}}/>
          </Box>
          <Box>
            <Button sx={{color:"white"}}>
            
              Comment
            </Button>
            </Box>
             </Box>



             <Box sx={{display:"flex",alignItems:"center"}}>
            <Box>
          <ShareIcon sx={{color:"white"}}/>
          </Box>
          <Box>
            <Button sx={{color:"white"}}>
            
              Share
            </Button>
            </Box>
             </Box>



        </CardActions>

    </Card>




    </Box>
  );
}
