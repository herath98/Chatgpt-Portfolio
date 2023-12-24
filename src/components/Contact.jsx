import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

// Import the contract.png image
import contractImage from './images/pn.png';

const SectionBox = styled(Box)({
  border: '1px solid #ddd',
  borderRadius: '15px',
  padding: '20px',
  marginBottom: '20px',
  backgroundColor: '#f7f7f7',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  '&:active': {
    transform: 'scale(0.95)',
    boxShadow: 'none',
  },
});

const ContactPaper = styled(Paper)({
  marginBottom: '30px',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
});

const ContactForm = styled('form')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ContactButton = styled(Button)({
  marginTop: '20px',
  backgroundColor: '#4caf50',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#45a049',
  },
});

const ContactDetails = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const IconContainer = styled('div')({
  marginRight: '10px',
});

const ErrorMessage = styled('div')({
  color: 'red',
  marginTop: '5px',
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("https://formspree.io/f/moqgarlq", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Form submitted successfully!");
          // Additional logic for form submission
        } else {
          console.error("Form submission failed:", response.status);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      console.log('Form validation failed');
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ContactPaper elevation={3}>
      <Typography variant="h5" component="div" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <SectionBox>
            <ContactDetails data-aos="slide-right">
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <IconContainer>
                    <LocationOnIcon color="primary" />
                  </IconContainer>
                </Grid>
                <Grid item>
                  <Typography variant="body1">9/75B 6th lane, Pagoda road, Nugegoda</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <IconContainer>
                    <PhoneIcon color="primary" />
                  </IconContainer>
                </Grid>
                <Grid item>
                  <Typography variant="body1">+94-787514907</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <IconContainer>
                    <MailIcon color="primary" />
                  </IconContainer>
                </Grid>
                <Grid item>
                  <Typography variant="body1">harshaudayanga401@gmail.com</Typography>
                </Grid>
              </Grid>
            </ContactDetails>
          </SectionBox>
          <SectionBox>
            <ContactDetails data-aos="slide-right">
              {/* Use the imported image */}
              <img
                src={contractImage}
                alt="Contract Image"
                style={{ width: '100%', height: 'auto' }}
              />
            </ContactDetails>
          </SectionBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <SectionBox>
            <ContactForm
              id="contact-form"
              action="https://formspree.io/f/moqgarlq"
              method="POST"
              onSubmit={submitForm}
            >
              <TextField
                type="text"
                id="name"  // Add this line
                name="name"
                label="Name"
                variant="outlined"
                required
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                autoComplete="name"  // Add this line
              />
              {formErrors.name && <ErrorMessage>{formErrors.name}</ErrorMessage>}
              <TextField
                type="email"
                id="email"  // Add this line
                name="email"
                label="E-mail"
                variant="outlined"
                required
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                autoComplete="email"  // Add this line
              />
              {formErrors.email && <ErrorMessage>{formErrors.email}</ErrorMessage>}
              <TextField
                type="tel"
                id="phone"  // Add this line
                name="phone"
                label="Mobile No."
                variant="outlined"
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                autoComplete="tel"  // Add this line
              />
              {formErrors.phone && <ErrorMessage>{formErrors.phone}</ErrorMessage>}
              <TextField
                name="message"
                id="message"  // Add this line
                label="Message"
                multiline
                rows={5}
                variant="outlined"
                required
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                autoComplete="off"  // Add this line, or use a more specific value based on your requirements
              />
              {formErrors.message && <ErrorMessage>{formErrors.message}</ErrorMessage>}
              <ContactButton
                variant="contained"
                className="c-btn h-btn mt-3 py-3 px-5 rounded-pill"
                type="submit"
              >
                Submit
              </ContactButton>
            </ContactForm>
          </SectionBox>
        </Grid>
      </Grid>
    </ContactPaper>
  );
};

export default Contact;
