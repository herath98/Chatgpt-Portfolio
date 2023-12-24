import { AppBar, Toolbar, Typography, Container, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{ marginTop: 'auto' }}>
      <Container>
        <Toolbar>
          <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
            Harsha Udayanga
          </Typography>
          <IconButton color="inherit" href="https://github.com/herath98" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.linkedin.com/in/harsha-udayanga-herath-773a07224/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.facebook.com/your_facebook_profile" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" href="https://www.instagram.com/your_instagram_profile" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com/your_twitter_profile" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
