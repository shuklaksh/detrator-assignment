import { blue } from '@mui/material/colors';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  CardActionArea 
} from '@mui/material';


function Post({postData} : any) {
  return (
    <div className="post-container">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
              {postData.userId}
            </Avatar>
          }
          title={postData.title}
          subheader={`Reactions: ${postData.reactions}`}
        />
        <div className="tags">
          {
            postData.tags.map((tag : any)=> {
              return (
                <div className="tag-div">
                    {tag}
                </div>
              )
            })
          }
        </div>
        <CardActionArea>
          <CardContent>
            {/* <Typography gutterBottom variant="h5" component="div">
              {postData.userId}
            </Typography> */}
            <Typography variant="body2" color="text.secondary">
              {postData.body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Post
