import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/react.svg";
import { signOut } from 'firebase/auth';
import { auth } from "./Firebase";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Navbar2 = ({ title, msg, notification, button = "Profile" }) => {
  const navigate = useNavigate();
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Fetch messages and notifications from Firebase or an API
  useEffect(() => {
    // Simulate fetching data
    setMessages([
      { name: 'John Doe', preview: 'Hey, are we still on for the meeting?' },
      { name: 'Jane Smith', preview: 'Just sent you the files!' },
      { name: 'Alice Johnson', preview: 'Looking forward to our call.' },
    ]);

    setNotifications([
      'Notification 1',
      'Notification 2',
      'Notification 3'
    ]);
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        navigate('/'); // Navigate to home without reloading the page
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  const toggleRightDrawer = (open) => () => {
    setIsRightDrawerOpen(open);
  };

  const toggleLeftDrawer = (open) => () => {
    setIsLeftDrawerOpen(open);
  };

  const rightDrawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleRightDrawer(false)}
      onKeyDown={toggleRightDrawer(false)}
    >
      <List>
        {notifications.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Older Notifications" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const leftDrawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleLeftDrawer(false)}
      onKeyDown={toggleLeftDrawer(false)}
    >
      <List>
        <ListItem>
          <ListItemText primary="Messages" />
        </ListItem>
        <Divider />
        {messages.map((message, index) => (
          <ListItem key={message.name} disablePadding>
            <ListItemButton
              onClick={() => navigate('/MessageSection', { state: { userName: message.name } })}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={message.name} secondary={message.preview} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-2 mb-4 bg-white rounded">
        <div className="container-fluid">
          <Link className="navbar-brand">
            <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-2" />
            {title}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active mx-3" to="#" onClick={toggleLeftDrawer(true)}>{msg}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" to="#" onClick={toggleRightDrawer(true)}>{notification}</Link>
              </li>
            </ul>

            <div className="dropdown">
              <button className="btn btn-outline-warning dropdown-toggle mx-3" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                {button}
              </button>
              <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                <li><button className="dropdown-item" onClick={() => navigate('/profile')}>View Profile</button></li>
                <li><button className="dropdown-item" onClick={() => navigate('/profile/EntrepreneurProfileForm')}>Edit Profile</button></li>
                <li><button className="dropdown-item" onClick={() => navigate('/InvestorDashboard')}>Dashboard</button></li>
                <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Left-side drawer for Messages */}
      <Drawer anchor="left" open={isLeftDrawerOpen} onClose={toggleLeftDrawer(false)}>
        {leftDrawerContent}
      </Drawer>

      {/* Right-side drawer for Notifications */}
      <Drawer anchor="right" open={isRightDrawerOpen} onClose={toggleRightDrawer(false)}>
        {rightDrawerContent}
      </Drawer>
    </div>
  );
};

export default Navbar2;
