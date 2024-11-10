const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  // Join a chat room
  socket.on("join_room", (chatRoom) => {
    socket.join(chatRoom);
    console.log(`User joined room: ${chatRoom}`);
  });

  // Send a message
  socket.on("send_message", (data) => {
    const { chatRoom, messageData } = data;
    io.to(chatRoom).emit("receive_message", messageData); // Emit the message to all users in the chat room
    console.log("Message sent:", messageData);
  });

  // Leave a chat room
  socket.on("leave_room", (chatRoom) => {
    socket.leave(chatRoom);
    console.log(`User left room: ${chatRoom}`);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
