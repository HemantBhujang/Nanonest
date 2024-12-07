import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { database, ref, onValue } from "./Firebase";
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
  Grid,
  Divider
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MessageSection = ({ loggedInUserId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedUser, setSelectedUser] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [userList, setUserList] = useState([]); 
  const [messages, setMessages] = useState([]);


  // Fetch messages for the selected user  
// Fetch messages for the selected user  
useEffect(() => {  
  if (!selectedUser) return;  

  const messagesRef = ref(database, "messages");  
  onValue(messagesRef, (snapshot) => {  
    const data = snapshot.val();  
    const fetchedMessages = [];  

    console.log("Message Data: ", data); // Log the entire data snapshot  

    if (data) {  
      for (const messageId in data) {  
        const message = data[messageId];  
        console.log("Current Message: ", message); // Log each message for debugging  

        const isChatBetweenUsers =  
          (message.senderId === loggedInUserId && message.receiverId === selectedUser.id) ||  
          (message.senderId === selectedUser.id && message.receiverId === loggedInUserId);  

        if (isChatBetweenUsers) {  
          fetchedMessages.push({  
            text: message.message,  
            sender: message.senderId === loggedInUserId ? "me" : "other",  
            timestamp: message.timestamp,  
          });  
        }  
      }  
    }  

    console.log("Fetched Messages: ", fetchedMessages); // Log the fetched messages  
    setMessages(fetchedMessages);  
  });  
}, [selectedUser, loggedInUserId]);
  // Fetch users who have messaged or been messaged by the logged-in user
  useEffect(() => {
    const messagesRef = ref(database, "messages");
    const usersRef = ref(database, "users");
    const fetchedUsers = {};

    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        for (const messageId in data) {
          const message = data[messageId];
          
          const isConversationWithLoggedInUser =
            message.senderId === loggedInUserId || message.receiverId === loggedInUserId;
          if (isConversationWithLoggedInUser) {
            const otherUserId = message.senderId === loggedInUserId ? message.receiverId : message.senderId;
            fetchedUsers[otherUserId] = true; // Store unique user IDs
          }
        }

        // Fetch user details for the stored unique user IDs
        onValue(usersRef, (userSnapshot) => {
          const usersData = userSnapshot.val();
          const userListWithNames = Object.keys(fetchedUsers).map((userId) => ({
            id: userId,
            name: `${usersData[userId]?.firstName || "User"} ${usersData[userId]?.lastName || ""}`.trim()
          }));
          setUserList(userListWithNames);
        });
      }
    });
  }, [loggedInUserId]);

  // Fetch messages between the logged-in user and the selected user
  useEffect(() => {
    const messagesRef = ref(database, "messages");
    const fetchedUsers = {};

    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        for (const messageId in data) {
          const message = data[messageId];
          const isConversationWithLoggedInUser =
            message.senderId === loggedInUserId || message.receiverId === loggedInUserId;
          if (isConversationWithLoggedInUser) {
            const otherUserId = message.senderId === loggedInUserId ? message.receiverId : message.senderId;
            fetchedUsers[otherUserId] = true;
          }
        }
        setUserList(Object.keys(fetchedUsers).map((userId) => ({ id: userId, name: `User ${userId}` })));
      }
    });
  }, [loggedInUserId]);

  // Fetch messages for the selected user
  useEffect(() => {
    if (!selectedUser) return;

    const messagesRef = ref(database, "messages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const fetchedMessages = [];

      for (const messageId in data) {
        const message = data[messageId];
        const isChatBetweenUsers =
          (message.senderId === loggedInUserId && message.receiverId === selectedUser.id) ||
          (message.senderId === selectedUser.id && message.receiverId === loggedInUserId);

        if (isChatBetweenUsers) {
          fetchedMessages.push({
            text: message.message,
            sender: message.senderId === loggedInUserId ? "me" : "other",
            timestamp: message.timestamp,
          });
        }
      }

      setMessages(fetchedMessages);
    });
  }, [selectedUser, loggedInUserId]);

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedUser) {
      // Code to send new message to Firebase goes here.
      setNewMessage("");
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar2
        title="NanoNest"
        msg="Message"
        notification="Notification"
        menu="Menu"
        button="Profile"
      />

      {/* Header */}
      <AppBar position="static" style={{ backgroundColor: "#F9BC6E" }}>
        <Toolbar>
          <Typography variant="h6" style={{ color: "#FFF" }}>
            {selectedUser ? `Message with ${selectedUser.name}` : "Select a user to chat"}
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
            onClick={() => navigate('/investment', { state: { userName: location.state?.userName } })}
          >
            Invest
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper
              style={{
                height: "60vh",
                overflowY: "auto",
                padding: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
              }}
            >
              <Typography variant="h6" style={{ marginBottom: "10px" }}>
                Users
              </Typography>
              <Divider />
              <List>
                {userList.map((user) => (
                  <ListItem
                   button="true"
                    key={user.id}
                    onClick={() => setSelectedUser(user)} 
                    selected={selectedUser?.id === user.id}
                  >
                    <ListItemText primary={user.name} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={9}>
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
                {selectedUser && messages.length > 0 ? (
                  messages.map((message, index) => (
                    <ListItem
                      key={index}
                      alignItems="flex-start"
                      style={{
                        justifyContent: message.sender === "me" ? "flex-end" : "flex-start",
                      }}
                    >
                      <ListItemText
                        primary={message.text}
                        secondary={new Date(message.timestamp).toLocaleString()}
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
                  ))
                ) : (
                  <Typography variant="body1" color="textSecondary">
                    {selectedUser ? "No messages yet." : "Select a user to start chatting"}
                  </Typography>
                )}
              </List>
            </Paper>

            {selectedUser && (
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
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default MessageSection;