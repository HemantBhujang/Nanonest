import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../Images/Logo_svg.svg";
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from "./Firebase"; // Assuming Firebase is configured
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
import { getDatabase, ref, get } from 'firebase/database'; // Assuming Realtime Database
// Or import Firestore if you are using Firestore instead.

const Navbar2 = ({ title, msg, notification, button = "Profile" }) => {
  const navigate = useNavigate();
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [user, setUser] = useState(null);

  const messages = [
    { name: 'John Doe', preview: 'Hey, are we still on for the meeting?' },
    { name: 'Jane Smith', preview: 'Just sent you the files!' },
    { name: 'Alice Johnson', preview: 'Looking forward to our call.' },
  ];

  // Listen to the authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchUserRole(currentUser.uid); // Fetch role data from database
      } else {
        setUser(null);
      }
    });
    
    return () => unsubscribe();
  }, []);

  const fetchUserRole = async (uid) => {
    const db = getDatabase();  // If using Realtime Database
    // Replace this with Firestore if necessary
    const userRef = ref(db, 'users/' + uid);  // Assuming 'users' node stores user data
    try {
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const userData = snapshot.val();
        if (userData && userData.role) {
          // Store user data and role
          setUser({
            ...user,
            role: userData.role,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
          });
        }
      } else {
        console.error("No user data found.");
      }
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        window.location.href = '/';
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
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleRightDrawer(false)} onKeyDown={toggleRightDrawer(false)}>
      <List>
        {['Notification 1', 'Notification 2', 'Notification 3'].map((text, index) => (
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
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleLeftDrawer(false)} onKeyDown={toggleLeftDrawer(false)}>
      <List>
        <ListItem>
          <ListItemText primary="Messages" />
        </ListItem>
        <Divider />
        {messages.map((message, index) => (
          <ListItem key={message.name} disablePadding>
            <ListItemButton onClick={() => navigate('/MessageSection', { state: { userName: message.name } })}>
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

  const handleEditProfile = () => {
    if (user && user.role) {
      if (user.role === 'Investor') {
        navigate('/InvestorForm');
      } else if (user.role === 'Entrepreneur') {
        navigate('/profile/EntrepreneurProfileForm');
      }
    } else {
      console.error("User data or role is missing");
    }
  };

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
                {user ? user.firstName || button : "Profile"}
              </button>
              <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                {user ? (
                  <>
                    <li><button className="dropdown-item" onClick={() => navigate('/profile')}>View Profile</button></li>
                    <li><button className="dropdown-item" onClick={handleEditProfile}>Edit Profile</button></li>
                    <li><button className="dropdown-item" onClick={() => navigate('/InvestorDashboard')}>Dashboard</button></li>
                    <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                  </>
                ) : (
                  <li><button className="dropdown-item" onClick={() => navigate('/login')}>Login</button></li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <Drawer anchor="left" open={isLeftDrawerOpen} onClose={toggleLeftDrawer(false)}>
        {leftDrawerContent}
      </Drawer>

      <Drawer anchor="right" open={isRightDrawerOpen} onClose={toggleRightDrawer(false)}>
        {rightDrawerContent}
      </Drawer>
    </div>
  );
};

export default Navbar2;
