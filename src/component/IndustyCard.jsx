import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from 'react-router-dom';

const IndustyCard = ({ id, name, companyName, description, profileImageUrl }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/profile/${id}`);
  };

  return (
    <Card
      sx={{
        width: 300,
        height: 400,
        boxShadow: 3,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardActionArea onClick={handleViewProfile}>
        <CardMedia
          component="img"
          height="140"
          image={profileImageUrl || '/static/images/cards/default-image.jpg'} // Use profileImageUrl or default image
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" noWrap>
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" noWrap>
            {companyName}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
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
