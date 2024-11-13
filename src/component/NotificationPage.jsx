import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const notifications = ['Notification 1', 'Notification 2', 'Notification 3', 'Older Notifications'];

const NotificationPage = () => {
  return (
    <div style={{ backgroundColor: '#F9BC6E', padding: '20px', color: '#333' }}>
      <h2>Notifications</h2>
      <List>
        {notifications.map((notification, index) => (
          <ListItem key={notification} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={notification} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default NotificationPage;
