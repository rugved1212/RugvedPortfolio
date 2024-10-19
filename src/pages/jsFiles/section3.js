import { Typography, Grid2, Tooltip, tooltipClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import '../cssFiles/section3.css';
import React, { useState } from 'react';
import app from '../../assets/services_icons/app.png';
import game from '../../assets/services_icons/game.png';
import web from '../../assets/services_icons/web.png';


const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#16181D',
        color: '#C0C4CE',
        fontSize: '14px',
        borderRadius: '8px',
        padding: '10px',
        maxWidth: 220,
        textAlign: 'center',
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: '#16181D', // Matches tooltip background
    },
}));

const ServiceItems = ({ serviceName, serviceImg, serviceSkills }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <CustomTooltip title={serviceSkills} arrow>
            <div
                style={{
                    width: '280px',
                    height: '155px',
                    borderRadius: '12px',
                    border: isHovered ? '2px solid white' : '2px solid #16181D',
                    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                    transition: 'transform 0.2s ease-in-out',
                }}
                onMouseOver={handleMouseEnter}
                onMouseOut={handleMouseLeave}
            >
                <div
                    style={{
                        width: '48px',
                        height: '48px',
                        backgroundImage: `url(${serviceImg})`,
                        backgroundSize: 'cover',
                        margin: '20px',
                    }}
                ></div>
                <Typography
                    style={{
                        width: '350px',
                        fontFamily: 'Asap, sans-serif',
                        color: '#C0C4CE',
                        fontSize: '18px',
                        fontWeight: 'bolder',
                        margin: '20px',
                    }}
                >
                    {serviceName}
                </Typography>
            </div>
        </CustomTooltip>
    );
};

const Section3 = () => {
    return (
        <div className="backgroundsection3">
            <Typography className="contacttext">My Services</Typography>
            <Typography className="commenttext1">How can I help your business</Typography>
            <div style={{ marginBottom: '50px' }}>
                <Grid2 container spacing={{ xs: 3, md: 3 }} justifyContent="center" alignItems="center">
                    <Grid2>
                        <ServiceItems serviceName={'Web Development'} serviceImg={web} serviceSkills={'ReactJS, HTML, CSS, Firebase, Version Control System, Git, GitHub, etc...'} />
                    </Grid2>
                    <Grid2>
                        <ServiceItems serviceName={'Mobile App Development'} serviceImg={app} serviceSkills={'JAVA, Flutter, Kotlin, Firebase, IOS Supported Apps, Android Supported Apps,etc...'} />
                    </Grid2>
                    <Grid2>
                        <ServiceItems serviceName={'Game Development'} serviceImg={game} serviceSkills={'UNITY Engine, IOS Games, Android Games, Desktop Games, Firebase, GitHub, etc...'} />
                    </Grid2>
                </Grid2>
            </div>
        </div>
    );
};

export default Section3;
