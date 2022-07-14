import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { FaGithub } from "react-icons/fa";
import SideBar from './SideBar';
import API from '../api-service';
import '../App.css';
import '../Static/Css/Projects.css';


function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        API.projecstList()
            .then(resp => setProjects(resp))
            .catch(err => console.log(err))
    }, [])

    return(
        <div className='App'>
            <SideBar />
            <div className='project-list'>
                { Array.isArray(projects) && projects.map(project => {
                    return (
                            <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                m: 1,
                                width: 300,
                                height: 150,
                                },
                            }}
                            >
                                <Paper className='paper' elevation={3} >
                                    <h3>Project Name: {project.title}</h3>
                                    <p>Description: {project.description}</p>
                                    <p>Language Used: {project.language}</p>
                                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1 }}>
                                        <Grid item xs={6}>
                                            { project.is_active ? 
                                                <Button >Demo</Button>
                                                :
                                                null
                                            }
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button href={project.github_link}><FaGithub className='icon' /></Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                        
                    );
                })}
            </div>
        </div>
    );
}


export default Projects;