import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, CircularProgress, Container } from '@mui/material';
import { ref, onValue } from 'firebase/database';
import { database } from './Firebase';  // Import db from Firebase.jsx

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch notifications from Firebase
  useEffect(() => {
    const notificationsRef = ref(database, 'notifications'); // Path to your notifications node
  
    onValue(notificationsRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Raw Firebase Data:", data);  // Log raw Firebase data
  
      if (data) {
        // Check if we have nested data correctly
        Object.entries(data).forEach(([key, notification]) => {
          console.log(`Notification Key: ${key}`);
          console.log('Notification:', notification);
        });
  
        const fetchedNotifications = Object.entries(data).map(([key, notification]) => ({
          message: notification.message,
          senderId: notification.senderId,
          receiverId: notification.receiverId,
        }));
        
        setNotifications(fetchedNotifications);
      } else {
        setNotifications([]);  // In case there are no notifications
      }
  
      setLoading(false);
    });
  
    return () => setLoading(false);
  }, []);
  
  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container>
      <List>
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={`message: ${notification.message}`} // Display message field name
                secondary={`senderId: ${notification.senderId}`} // Display senderId field name
              />
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="No notifications available" />
          </ListItem>
        )}
      </List>
    </Container>
  );
};

export default NotificationPage;
