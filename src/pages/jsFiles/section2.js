import { Typography, Grid2 } from '@mui/material';
import '../cssFiles/section2.css';
import React, { useState } from 'react';

import godOfWarBg from '../../assets/projects_bgs/godofwar_bg.jpg';
import weatherBg from '../../assets/projects_bgs/weather_bg.png';
import calculatorBg from '../../assets/projects_bgs/calculator_Bg.png';
import dream11Bg from '../../assets/projects_bgs/dream11_Bg.png';
import sangeetBg from '../../assets/projects_bgs/sangeet_Bg.png';
import zombivaliBg from '../../assets/projects_bgs/zombivali_Bg.png';


const Item = ({ title, description, img , link }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
    setIsHovered(true);
    };

    const handleMouseLeave = () => {
    setIsHovered(false);
    };

    const handleClick = () => {
        // window.location.href = link;
        window.open(link, '_blank');
    };

    return <>
        <div style={{ 
            borderRadius: '12px', 
            backgroundColor: '#292C34', 
            width: '330px', 
            height: '280px',
            display: 'flex',
            flexDirection: 'column',
            justifyItems: 'center',
            alignItems: 'center',
            border: isHovered ? '2px solid white' : 'none',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.2s ease-in-out',
            cursor: 'pointer',
            }} 
            onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseLeave}
            onClick={handleClick}
            >
            <div style={{
                borderRadius: '8px', 
                backgroundColor: '#878EA1', 
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '1px solid #6c757d',
                width: '306px', 
                height: '156px',
                marginTop: '15px',
                marginBottom: '15px'}}>
            </div>
            <div style={{
                alignSelf: 'start',
                paddingRight: '15px',
                paddingLeft: '15px'
            }}>
                <Typography style={{fontSize: '20pt', fontFamily: "Asap", fontWeight: 'bolder', color: '#E2E4E9'}}>
                    {title}
                </Typography>
                <Typography style={{
                    fontSize: '10pt', 
                    fontFamily: "Maven Pro", 
                    color: '#C0C4CE', 
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    lineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                    }}>
                    {description}
                </Typography>
            </div>
        </div>
    </>
}


const Section2 = () => {
    return (
        <div className='backgroundSection2'>
            <div style={{maxWidth: '1050px', 
            display: 'flex', flexDirection: 'column', 
            alignItems: 'center', justifyContent: 'center'}}>
            <div className='container1sec2'>
                <Typography className='section2titletext'>See Featured Projects</Typography>
            </div>
            <div className='container2sec2' style={{alignSelf: 'center', justifySelf: 'center', marginBottom: '144px'}}>
                <Grid2 container spacing={{xs: 3, md: 3}} justifyContent="center" alignItems="center" >
                    <Grid2>
                        <Item title="God of War" description="It is an action-adventure game which is played by a single-player. It is developed on UNITY engine is a desktop game." img={godOfWarBg} link={'https://github.com/rugved1212/GOD-OF-WAR'} />
                    </Grid2>
                    <Grid2>
                        <Item title="Zombivali" description="It is a FPS Zombie Survival Game in which the waves of zombies comes endlessly and we have kills those zombies to survive." img={zombivaliBg} link={'https://github.com/rugved1212/Zombivali'} />
                    </Grid2>
                    <Grid2>
                        <Item title="Sangeet App" description="Free Online Music Streaming Application which can stream the stream the music/songs online for free and also download them to experience them offline." img={sangeetBg} link={'https://github.com/rugved1212/Sangeet'}/>
                    </Grid2>
                    <Grid2>
                        <Item title="Dream 11 clone" description="Dream11 is a fantasy sports app where users create virtual teams based on real-life players and earn points based on the players' performances in actual matches." img={dream11Bg} link={'https://github.com/rugved1212/Dream-11'}/>
                    </Grid2>
                    <Grid2>
                        <Item title="Calculator" description="A Flutter based Calculator with Lootie Animations and Shared Preference to stored your calculations history." img={calculatorBg} link={'https://github.com/rugved1212/Calculator'} />
                    </Grid2>
                    <Grid2>
                        <Item title="Weather App" description="The Weather Forecast App is a user-friendly application that provides real-time weather information." img={weatherBg} link={'https://github.com/rugved1212/Weather-App'} />
                    </Grid2>
                </Grid2>
            </div>
            </div>
        </div>
    );
}

export default Section2;

