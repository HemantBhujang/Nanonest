import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "./Firebase"; // Import Firebase auth
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
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state?.userName || "User"; // Get userName from state
  const [messages, setMessages] = useState([
    { text: "Hello! How are you?", senderId: "other" },
    { text: "I'm good! How about you?", senderId: "me" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [currentUserId, setCurrentUserId] = useState(""); // State to store current user ID

  useEffect(() => {
    // Get the current user ID when the component mounts
    const user = auth.currentUser;
    if (user) {
      setCurrentUserId(user.uid); // Set the user ID when authenticated
    } else {
      navigate("/login"); // Redirect if not authenticated
    }
  }, [navigate]);

  const handleSendMessage = () => {
    if (newMessage.trim() && currentUserId) {
      setMessages([
        ...messages,
        { text: newMessage, senderId: currentUserId }, // Include senderId
      ]);
      setNewMessage(""); // Clear input after sending
    }
  };

  return (
    <>
      <Navbar2
        title="NanoNest"
        msg="Message"
        notification="Notification"
        menu="Menu"
        button="Profile"
      />

      <AppBar position="static" style={{ backgroundColor: "#F9BC6E" }}>
        <Toolbar>
          <Typography variant="h6" style={{ color: "#FFF" }}>
            Message with {userName}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="contained"
            style={{
              backgroundColor: "#424242",
              color: "#FFF",
              fontWeight: "bold",
            }}
            onClick={() => navigate('/investment', { state: { userName } })}
          >
            Invest
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" style={{ marginTop: "20px" }}>
        <Paper
          style={{
            height: "60vh",
            padding: "10px",
            overflowY: "auto",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            backgroundColor: "#FFFBEA",
          }}
        >
          <List>
            {messages.map((message, index) => (
              <ListItem
                key={index}
                alignItems="flex-start"
                style={{
                  justifyContent: message.senderId === currentUserId ? "flex-end" : "flex-start",
                }}
              >
                <ListItemText
                  primary={message.text}
                  style={{
                    backgroundColor:
                      message.senderId === currentUserId ? "#F9BC6E" : "#F1F1F1",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    maxWidth: "70%",
                    color: message.senderId === currentUserId ? "#FFF" : "#424242",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>

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
