// Contact.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Contact = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" component="div">
          Feel free to reach out to me through the following channels:
          <br />
          Email: your.email@example.com
          <br />
          LinkedIn: [Your LinkedIn Profile]
          {/* Add more contact details */}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Contact;
