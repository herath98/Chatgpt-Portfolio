// About.js
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import logo from '../assets/pro.jpg'



const About = () => {

    const [displayText, setDisplayText] = useState('');
    const wordsToDisplay = ["I'm Harsha Udayanga", "And i'm ", "Full-Stack Developer "];
    let currentWordIndex = 0;
    let currentIndex = 0;

    useEffect(() => {
        function autoPlayCharacters() {
            if (currentWordIndex < wordsToDisplay.length) {
                const currentWord = wordsToDisplay[currentWordIndex];

                if (currentIndex < currentWord.length) {
                    setDisplayText(currentWord.substring(0, currentIndex));
                    currentIndex++;
                    setTimeout(autoPlayCharacters, 100); // Adjust the delay between characters as needed
                } else {
                    setTimeout(() => {
                        eraseWord();
                    }, 1000);
                }
            }
        }

        function eraseWord() {
            const currentWord = wordsToDisplay[currentWordIndex];
            if (currentIndex > 0) {
                setDisplayText(currentWord.substring(0, currentIndex - 1));
                currentIndex--;
                setTimeout(eraseWord, 50); // Adjust the delay between erasing characters as needed
            } else {
                currentWordIndex = (currentWordIndex + 1) % wordsToDisplay.length;
                currentIndex = 0;
                setTimeout(autoPlayCharacters, 1000); // Adjust the delay before starting the next word as needed
            }
        }

        autoPlayCharacters(); // Start the auto play when the component mounts

        // Cleanup function to stop any ongoing timeouts when the component unmounts
        return () => {
            clearTimeout();
        };
    }, []); // Empty dependency array to ensure the effect runs only once





    return (
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    {/* Add your profile image */}
                    <Avatar
                        alt="Harsha"
                        src={logo}  // Replace with the actual URL of your profile image
                        sx={{ width: '100%', height: 'auto' }}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" component="div" gutterBottom>
                       <h1>Hello,</h1><h3>{displayText}|</h3>
                    </Typography>
                    <Typography variant="body1" paragraph>
                        I am a full-stack developer based in Nugegoda. My passion lies in crafting
                        elegant and functional web applications using the latest technologies.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        On the front-end, I primarily use React to build dynamic and responsive user
                        interfaces. For the back-end, I work with Django, a powerful and versatile
                        Python framework, to create robust and scalable server-side applications.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        My goal is to contribute to the world of technology by creating innovative
                        solutions that make a positive impact. I enjoy the process of problem-solving,
                        collaboration, and continuous learning.
                    </Typography>
                    {/* Add more details about yourself */}
                </Grid>
            </Grid>
        </Paper>
    );
};

export default About;
