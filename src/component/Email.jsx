import React, { useEffect, useState } from 'react';
import { Box, List, ListItem, ListItemText, Typography, Checkbox, Divider } from '@mui/material';
import { database } from './Firebase';
import { ref, onValue, update } from 'firebase/database';

const Email = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const emailRef = ref(database, 'Appointment');

    // Fetch data from Firebase
    onValue(emailRef, (snapshot) => {
      const data = snapshot.val();
      const loadedEmails = data
        ? Object.entries(data).map(([id, email]) => ({
            id,
            ...email,
            status: email.status || 'unread',  // Default to 'unread' if no status
          }))
        : [];
      setEmails(loadedEmails);
    });
  }, []);

  // Function to handle checkbox change
  const handleStatusChange = (id, isRead) => {
    const emailRef = ref(database, `Appointment/${id}`);
    update(emailRef, { status: isRead ? 'read' : 'unread' })
      .catch((error) => console.error("Error updating status:", error));
  };

  // Separate emails based on read/unread status
  const unreadEmails = emails.filter((email) => email.status === 'unread');
  const readEmails = emails.filter((email) => email.status === 'read');

  return (
    <Box sx={{ p: 3 }}>
      {/* Unread Emails Section */}
      <Typography variant="h5" gutterBottom>Unread Emails</Typography>
      <List>
        {unreadEmails.map((email) => (
          <ListItem key={email.id} sx={{ backgroundColor: '#f5f5f5', mb: 1, borderRadius: 1 }}>
            <Checkbox
              checked={false}
              onChange={() => handleStatusChange(email.id, true)}  // Mark as read
              color="primary"
            />
            <ListItemText primary={email.email} secondary="Unread" />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 3 }} />

      {/* Read Emails Section */}
      <Typography variant="h5" gutterBottom>Read Emails</Typography>
      <List>
        {readEmails.map((email) => (
          <ListItem key={email.id} sx={{ backgroundColor: '#e0e0e0', mb: 1, borderRadius: 1 }}>
            <Checkbox
              checked={true}
              onChange={() => handleStatusChange(email.id, false)}  // Mark as unread
              color="primary"
            />
            <ListItemText primary={email.email} secondary="Read" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Email;
