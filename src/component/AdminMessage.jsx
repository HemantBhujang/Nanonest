import React, { useState, useEffect } from 'react';
import { Checkbox, Card, CardContent, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { database, ref, onValue } from './Firebase';

const AdminMessage = () => {
  const [messages, setMessages] = useState([]);
  const [readMessages, setReadMessages] = useState([]);

  useEffect(() => {
    const messagesRef = ref(database, 'contacts');
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messagesList = [];

      for (let key in data) {
        messagesList.push({
          id: key,
          ...data[key],
          read: false, // Set read status to false by default
        });
      }

      setMessages(messagesList);
    });

    return () => {
      // Cleanup listener
    };
  }, []);

  const handleCheckboxChange = (messageId, isChecked) => {
    const updatedMessages = messages.map((message) =>
      message.id === messageId ? { ...message, read: isChecked } : message
    );

    setMessages(updatedMessages);

    if (isChecked) {
      setReadMessages([...readMessages, updatedMessages.find((msg) => msg.id === messageId)]);
    } else {
      setReadMessages(readMessages.filter((msg) => msg.id !== messageId));
    }
  };

  const unreadMessages = messages.filter((message) => !message.read);
  const readMessagesList = messages.filter((message) => message.read);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Contact Messages</Typography>

      <div>
        <Typography variant="h6" gutterBottom>Unread Messages</Typography>
        <List>
          {unreadMessages.length === 0 && <Typography>No unread messages.</Typography>}
          {unreadMessages.map((message) => (
            <ListItem key={message.id} divider>
              <Checkbox
                checked={message.read}
                onChange={(e) => handleCheckboxChange(message.id, e.target.checked)}
                color="primary"
              />
              <Card style={{ width: '100%' }}>
                <CardContent>
                  <Typography variant="subtitle1"><strong>Name:</strong> {message.name}</Typography>
                  <Typography variant="body2"><strong>Email:</strong> {message.email}</Typography>
                  <Typography variant="body2"><strong>Message:</strong> {message.message}</Typography>
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
      </div>

      <div>
        <Typography variant="h6" gutterBottom>Read Messages</Typography>
        <List>
          {readMessagesList.length === 0 && <Typography>No read messages.</Typography>}
          {readMessagesList.map((message) => (
            <ListItem key={message.id} divider>
              <Checkbox
                checked={message.read}
                onChange={(e) => handleCheckboxChange(message.id, e.target.checked)}
                color="secondary"
              />
              <Card style={{ width: '100%' }}>
                <CardContent>
                  <Typography variant="subtitle1"><strong>Name:</strong> {message.name}</Typography>
                  <Typography variant="body2"><strong>Email:</strong> {message.email}</Typography>
                  <Typography variant="body2"><strong>Message:</strong> {message.message}</Typography>
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default AdminMessage;
