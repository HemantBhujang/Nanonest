import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from 'react-router-dom';

const IndustyCard = ({ id, name, companyName, description }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/profile/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
      <CardActionArea onClick={handleViewProfile}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg" // Replace with actual entrepreneur image URL
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {companyName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleViewProfile}>
          View Profile
        </Button>
      </CardActions>
    </Card>
  );
};

export default IndustyCard;
