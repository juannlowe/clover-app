import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Fade from '@mui/material/Fade';

export default function JoinActivity() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fade in={true}>
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
        <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            <Button
              variant="contained"
              sx={{ backgroundColor: 'black', color: 'white' }}
              onClick={handleClickOpen}
            >
              Create Activity!
            </Button>
          </Typography>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create Activity</DialogTitle>
            <DialogContent>
              <TextField label="Activity Name" fullWidth />
              <TextField label="Location" fullWidth />
              <TextField label="Time" fullWidth />
              <TextField label="Skill Level" fullWidth />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Create</Button>
            </DialogActions>
          </Dialog>
        </CardContent>
      </Card>
    </Fade>
  );
}
