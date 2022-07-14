import React, {useState} from 'react';
import SideBar from './SideBar';
import { FormControl, TextField, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DisplayLottie from './DisplayLottie';
import '../App.css';
import '../Static/Css/Contact.css';


function Contact() {

    const [full_name, setFull_name] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [displayMsg, setDisplayMsg] = useState('');


    const handleOnSubmit = async (e) => {

        e.preventDefault();
        try {
            let res = await fetch("http://127.0.0.1:8000/api/contact-me/", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                full_name: full_name,
                                email: email,
                                website: website,
                                subject: subject,
                                message: message,
                                }),
                        }).then(resp => resp.json());
            if (res.status === 201) {
                // setFull_name('');
                // setEmail('');
                // setWebsite('');
                // setSubject('');
                // setMessage('');
                setDisplayMsg("Thank You For Contacting Me. I'll Get Back To You Soon.");
            } else {
                setDisplayMsg('Something Went Wrong!');
            }

        } catch (err) {
            console.log(err)
        }

    };

    return(
        <div className='App'>
            <SideBar />
            <div className='form'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1} columns={12}>
                        <Grid item xs={6}>
                            <DisplayLottie animationPath='/Lottie/Contact.json' />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                Contact Me
                            </Typography>
                            <form onSubmit={handleOnSubmit}>
                                <FormControl>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Full Name" 
                                        variant="outlined"
                                        value={full_name}
                                        onChange={ event => setFull_name(event.target.value) }
                                    />
                                </FormControl><br /><br />
                                <FormControl>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Email" 
                                        variant="outlined"  
                                        value={email}
                                        onChange= { event => setEmail(event.target.value) }
                                    />
                                </FormControl><br /><br />
                                <FormControl>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Website" 
                                        variant="outlined"
                                        value={website} 
                                        onChange= { event => setWebsite(event.target.value) }
                                    />
                                </FormControl><br /><br />
                                <FormControl>
                                    <TextField 
                                        id="outlined-basic" 
                                        label="Subject" 
                                        variant="outlined"  
                                        value={subject}
                                        onChange= { event => setSubject(event.target.value) }
                                    />
                                </FormControl><br /><br />
                                <FormControl>
                                    <TextField 
                                        id="outlined-multiline-static" 
                                        label="Message" 
                                        variant="outlined"  
                                        value={message}
                                        onChange= { event => setMessage(event.target.value) }
                                    />
                                </FormControl><br /><br />
                                <Button type='submit'>Submit</Button>
                                <div className='displayMsg'>{ displayMsg ? <p>{displayMsg}</p> : null}</div>
                            </form>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
}


export default Contact;