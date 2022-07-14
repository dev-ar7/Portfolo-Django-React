import React from 'react';
import '../Static/Css/Intro.css';
import { styled } from '@mui/material/styles';
import {greetings} from '../Constants/portfolio';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { green, pink, lightBlue } from '@mui/material/colors';
import { FaFile, FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaImages } from 'react-icons/fa';
import DisplayLottie from './DisplayLottie';
import { useNavigate } from 'react-router-dom';

function Intro() {

    const navigate = useNavigate();

    const onClickNfts = () => {
        navigate('/nft-collections');
    }
    
    const BootstrapButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#14ffff',
        borderColor: '#14ffff',
        color: '#1a202c',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
          backgroundColor: '#14ffff',
          borderColor: '#14ffff',
          boxShadow: 'none',
          color: '#1a202c',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#14ffff',
          borderColor: '#14ffff',
        },
        '&:focus': {
          boxShadow: '0.5px 0.86px 2px 0px rgba(20, 255, 255, 0.25)',
        },
      });

    return (
        <>
            <div className='desc'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1} columns={12}>
                        <Grid item xs={6}>
                            <h1 className="display-3 text-white">
                                {greetings.title + " "}
                            </h1>
                            <p className="lead text-white">
                                {greetings.description}
                            </p>
                            <ButtonGroup className='btngrp'>
                                <Stack direction="row" spacing={2}>
                                    <IconButton href='https://www.instagram.com/ar7_.srt/' className='icon' sx={{ bgcolor: pink[500] }}>
                                        <FaInstagram />
                                    </IconButton>
                                    <IconButton href='https://www.linkedin.com/in/arnab-gupta-516765221/' className='icon' sx={{ bgcolor: lightBlue[700] }}>
                                        <FaLinkedin  />
                                    </IconButton>
                                    <IconButton href='https://github.com/dev-ar7' className='icon' sx={{ bgcolor: green[900] }}>
                                        <FaGithub  />
                                    </IconButton>
                                    <IconButton href='https://twitter.com/PHYM17?t=BHYzNfVA8zQj_Jqfl6b5Gg&s=03' className='icon' sx={{ bgcolor: lightBlue[700] }}>
                                        <FaTwitter />
                                    </IconButton>
                                </Stack>
                            </ButtonGroup><br/>
                            <BootstrapButton className='bsbtn' variant="contained" href='https://drive.google.com/file/d/1LIGPVp0MQaKXi0zjTC1SDRFfDz2UQLfm/view?usp=sharing'>
                                <FaFile/> See My Resume
                            </BootstrapButton>
                            <BootstrapButton className='bsbtnnfts' variant="contained"
                                onClick={onClickNfts}
                            >
                                <FaImages/> See My NFTs
                            </BootstrapButton>
                        </Grid>
                        <Grid item xs={6}>
                            <DisplayLottie animationPath='/Lottie/Dev1.json' />
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div className="separator separator-bottom separator-skew">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="fill-white"
                        points="2560 0 2560 100 0 100"
                    />
                </svg>
            </div>
        </>
    );
}


export default Intro;