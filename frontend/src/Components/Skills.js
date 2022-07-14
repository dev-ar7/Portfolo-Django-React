import React from "react";
import '../Static/Css/Skills.css';
import {fsdSkills, bcdSkills} from '../Constants/portfolio';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DisplayLottie from './DisplayLottie';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';


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


function Skills() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="head">
            <h1 className="pgheading">What I Do?</h1>
            <p>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Full Stack Development" {...a11yProps(0)} />
                    <Tab label="BlockChain Development" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1} columns={12}>
                        <Grid className="animation" item xs={6}>
                            <DisplayLottie animationPath={fsdSkills.animationPath} />
                        </Grid>
                        <Grid item xs={6}>
                            {/* <h2 className="display-3 text-white">
                                {fsdSkills.title + " "}
                            </h2> */}
                            
                            <div>
                                {fsdSkills.skills.map((skill, i) => {
                                        return <p key={i}>{skill}</p>;
                                    })}
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1} columns={12}>
                        <Grid className="animation" item xs={6}>
                            <DisplayLottie animationPath={bcdSkills.animationPath} />
                        </Grid>
                        <Grid item xs={6}>
                            {/* <h2 className="display-3 text-white">
                                {bcdSkills.title + " "}
                            </h2> */}
                            
                            <div>
                                {bcdSkills.skills.map((skill, i) => {
                                        return <p key={i}>{skill}</p>;
                                    })}
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </TabPanel>
        </div>
    );
}


export default Skills;