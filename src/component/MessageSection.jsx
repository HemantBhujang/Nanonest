import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar2 from './Navbar2';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MessageSection = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [messages, setMessages] = useState([
    { text: "Hello! How are you?", sender: "other" },
    { text: "I'm good! How about you?", sender: "me" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: "me" }]);
      setNewMessage(""); // Clear input after sending
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar2
        title='NanoNest'
        msg='Message'
        notification='Notification'
        menu='Menu'
        button='Profile'
      />

      {/* Header */}
      <AppBar position="static" style={{ backgroundColor: "#F9BC6E" }}>
        <Toolbar>
          <Typography variant="h6" style={{ color: "#FFF" }}>
            Message Sender Profile
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {/* Invest Button */}
          <Button
            variant="contained"
            style={{
              backgroundColor: "#424242",
              color: "#FFF",
              fontWeight: "bold",
            }}
            onClick={() => navigate('/investment')} // Navigate to Investment page
          >
            Invest
          </Button>
        </Toolbar>
      </AppBar>

      {/* Chat Container */}
      <Container maxWidth="md" style={{ marginTop: "20px" }}>
        <Paper
          style={{
            height: "60vh",
            padding: "10px",
            overflowY: "auto",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            backgroundColor: "#FFFBEA", // Light background to match theme
          }}
        >
          {/* Messages List */}
          <List>
            {messages.map((message, index) => (
              <ListItem
                key={index}
                alignItems="flex-start"
                style={{
                  justifyContent: message.sender === "me" ? "flex-end" : "flex-start",
                }}
              >
                <ListItemText
                  primary={message.text}
                  style={{
                    backgroundColor: message.sender === "me" ? "#F9BC6E" : "#F1F1F1",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    maxWidth: "70%",
                    color: message.sender === "me" ? "#FFF" : "#424242",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* Message Input Section */}
        <Box
          component="form"
          sx={{ display: "flex", marginTop: 2, alignItems: "center" }}
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
        >
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            autoFocus
            sx={{
              backgroundColor: "#FFF",
              borderRadius: "5px",
              borderColor: "#F9BC6E",
            }}
          />
          <IconButton
            color="primary"
            onClick={handleSendMessage}
            sx={{ ml: 1, backgroundColor: "#F9BC6E", color: "#FFF" }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Container>
    </>
  );
};

export default MessageSection;
