// Skills.jsx



// Import your skill images
import htmlIcon from './images/html.png';
import cssIcon from './images/css.png';
import java from './images/java.png';
import py from './images/py.png';
import js from './images/js.png';
import my from './images/mysql.png';
import re from './images/r.png';
import pg from './images/pos.png';
import dj from './images/dj.png';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';





const skillsData = [
  { name: 'HTML', proficiency: 90, icon: htmlIcon },
  { name: 'CSS', proficiency: 85, icon: cssIcon },
  { name: 'React', proficiency: 80 ,icon:re},
  { name: 'JavaScript', proficiency: 75,icon:js },
  { name: 'Django', proficiency: 70 ,icon:dj},
  { name: 'MySQL', proficiency: 85 ,icon:my},
  { name: 'PostgreSQL', proficiency: 70,icon:pg },
  { name: 'Java', proficiency: 70 ,icon:java},
  { name: 'Python', proficiency: 65,icon:py },
];

const Skills = () => {
  return (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
    <Grid  >
    <div>
      <h2>Skills</h2>
      <ul>
        {skillsData.map((skill) => (
          <li key={skill.name}>
            <img src={skill.icon} alt={`${skill.name} icon`} style={{ width: '24px', marginRight: '8px' }} />
            <strong>{skill.name}</strong>: {skill.proficiency}%
            <div style={{ width: '100%', backgroundColor: '#e0e0e0', borderRadius: '5px', marginTop: '4px' }}>
              <div
                style={{
                  width: `${skill.proficiency}%`,
                  height: '8px',
                  backgroundColor: '#4caf50',
                  borderRadius: '5px',
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
    </Grid>
    </Paper >
           
  );
};

export default Skills;
