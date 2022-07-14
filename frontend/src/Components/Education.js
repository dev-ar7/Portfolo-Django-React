import React from "react";
import SideBar from "./SideBar";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import DisplayLottie from './DisplayLottie';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { diploma, bTech } from "../Constants/portfolio";
import '../App.css';
import '../Static/Css/Education.css'


function Education() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
    }
    
    
    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

    return (
        <div className="App">
            <SideBar />
                    <div className="education">
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label={diploma.name} {...a11yProps(0)} />
                                <Tab label="B.Tech" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={1} columns={12}>
                                    <Grid item xs={6}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                '& > :not(style)': {
                                                m: 1,
                                                height: 400,
                                                },
                                            }}
                                        >
                                            <Paper className='paper' elevation={3} >
                                                <h3>Course : {diploma.name}</h3>
                                                <h4>School/College : {diploma.school_or_college}</h4>
                                                <p>Description : {diploma.description}</p>
                                                {/* <Grid container rowSpacing={2} columnSpacing={{ xs: 1 }}>
                                                    <Grid item xs={6}>
                                                        
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        
                                                    </Grid>
                                                </Grid> */}
                                            </Paper>
                                        </Box>
                                    </Grid>
                                    <Grid className="animation" item xs={6}>
                                        <DisplayLottie animationPath='/Lottie/Diploma.json' />
                                    </Grid>
                                </Grid>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                        <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={1} columns={12}>
                                    <Grid item xs={6}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                '& > :not(style)': {
                                                m: 1,
                                                height: 400,
                                                },
                                            }}
                                        >
                                            <Paper className='paper' elevation={3} >
                                                <h3>Course : {bTech.name}</h3>
                                                <h4>School/College : {bTech.school_or_college}</h4>
                                                <p>Description : {bTech.description}</p>
                                                {/* <Grid container rowSpacing={2} columnSpacing={{ xs: 1 }}>
                                                    <Grid item xs={6}>
                                                        
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        
                                                    </Grid>
                                                </Grid> */}
                                            </Paper>
                                        </Box>
                                    </Grid>
                                    <Grid className="animation" item xs={6}>
                                        <DisplayLottie animationPath='/Lottie/BTech.json' />
                                    </Grid>
                                </Grid>
                            </Box>
                        </TabPanel>
                    </div>
        </div>
    );
}


export default Education;