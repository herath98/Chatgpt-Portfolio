import  { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import cal from './images/s6.png';
import shop from './images/s7.png';
// import helth from './images/s1.png';
import fl from './images/s2.png';
import hl from './images/s4.png';
import li from './images/s5.png';
import po from './images/s9.png';

const projectsData = [
 
  {
    id: 2,
    type: 'backend',
    name: 'Filght Booking Web-Site',
    image: fl,
    tools: ['Django', 'React Js', 'Jquery', 'PostgreSQL', 'REST API', 'Material-Ui', 'Html&Css'],
  },
  {
    id: 3,
    type: 'backend',
    name: 'Hotel Management System',
    image: hl,
    tools: ['Django', 'PostgreSQL', 'REST API', 'Html&Css', 'Jquery'],
  },
  {
    id: 4,
    type: 'backend',
    name: 'Library Management System',
    image: li,
    tools: ['Django', 'PostgreSQL', 'REST API', 'Html&Css', 'Jquery'],
  },
  {
    id: 5,
    type: 'frontend',
    name: 'Calculator App',
    image: cal,
    tools: ['React js', 'Vanila Css', 'HTML&CSS'],
  },
  {
    id: 6,
    type: 'frontend',
    name: 'ZestyTaco Oasis',
    image: shop,
    tools: ['HTML', 'JavaScript', 'CSS'],
  },
  {
    id: 7,
    type: 'frontend',
    name: 'Portfolio',
    image: po,
    tools: ['HTML', 'JavaScript', 'CSS', 'Bootstrap'],
  },
];

const ProjectBox = styled(Paper)({
  border: '1px solid #ddd',
  borderRadius: '15px',
  overflow: 'hidden',
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

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [filter, setFilter] = useState('all');

  const handleFilter = (type) => {
    if (type === 'all') {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter((project) => project.type === type);
      setFilteredProjects(filtered);
    }
    setFilter(type);
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h5" component="div" gutterBottom>
        Projects
      </Typography>
      <div style={{ marginBottom: '20px' }}>
        <Button variant={filter === 'all' ? 'contained' : 'outlined'} onClick={() => handleFilter('all')}>
          All
        </Button>
        <Button
          variant={filter === 'frontend' ? 'contained' : 'outlined'}
          onClick={() => handleFilter('frontend')}
        >
          Frontend
        </Button>
        <Button variant={filter === 'backend' ? 'contained' : 'outlined'} onClick={() => handleFilter('backend')}>
          Full-Strack
        </Button>
      </div>
      <Grid container spacing={2}>
        {filteredProjects.map((project) => (
          <Grid item key={project.id} xs={12} md={6} lg={4}>
            <ProjectBox elevation={2} style={{ padding: '10px', textAlign: 'center' }}>
              <img src={project.image} alt={project.name} style={{ width: '100%', height: 'auto' }} />
              <Typography variant="h6" component="div" gutterBottom>
                {project.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Tools: {project.tools.join(', ')}
              </Typography>
            </ProjectBox>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Projects;
