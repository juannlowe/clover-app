import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button'


export default function JoinActivity() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
           <Avatar alt="Juan Branca" src="./src/components/pictures/juan.jpeg" />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Juan Branca"
        subheader="Love Sports :)"
      />
      <CardMedia
        component="img"
        height="194"
        image="/src/components/pictures/volley.png"
        alt="Volley"
      />
      <CardContent style={{ display: 'flex', justifyContent: 'center'}}>
        <Typography variant="body2" color="text.secondary">
        <Button
            variant="contained"
            sx={{ backgroundColor: 'black', color: 'white' }}
          >
            Join Activity!
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
}
