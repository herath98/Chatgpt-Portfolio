// Header.js

import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Harsha Udayanga
        </Typography>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none', margin: '0 10px' }}>
          Home
        </Link>
        <Link to="/about" style={{ color: 'inherit', textDecoration: 'none', margin: '0 10px' }}>
          About
        </Link>
        <Link to="/projects" style={{ color: 'inherit', textDecoration: 'none', margin: '0 10px' }}>
          Projects
        </Link>
        <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none', margin: '0 10px' }}>
          Contact
        </Link>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="GitHub"
          href="https://github.com/herath98"  // Replace with your GitHub profile URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/harsha-udayanga-herath-773a07224/"  // Replace with your LinkedIn profile URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="Email"
          href="harshaudayanga401@gmail.com"  // Replace with your email address
        >
          <EmailIcon />
        </IconButton>
        {/* Add more navigation icons or links */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
