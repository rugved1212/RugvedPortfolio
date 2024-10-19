import { Typography } from '@mui/material';
import '../cssFiles/section4.css';
import React, { useState } from 'react';
import link_icon from '../../assets/social_media_icons/ArrowUpRight.png'
import linkedin_icon from '../../assets/social_media_icons/LinkedinLogo.png'
import instagram_icon from '../../assets/social_media_icons/InstagramLogo.png'
import github_icon from '../../assets/social_media_icons/GithubLogo.png'
import email_icon from '../../assets/social_media_icons/EnvelopeSimple.png'


const SocialMediaButtons = ({mediaTitle, img, link}) => {

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
    setIsHovered(true);
    };
    const handleMouseLeave = () => {
    setIsHovered(false);
    };
    const handleClick = () => {
        if (link.includes('mail.google.com')) {
            window.open(link, '_blank');
        } else {
            window.location.href = link;
        }
    };


    return <div style={{
        width: '90%',
        maxWidth: '400px',
        height: '68px',
        backgroundColor: '#292C34',
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        marginBottom: '16px',
        border: isHovered ? '2px solid white' : 'none',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.2s ease-in-out',
        cursor: 'pointer'
    }} 
    onMouseOver={handleMouseEnter}
    onMouseOut={handleMouseLeave}
    onClick={handleClick}
    >
        <div style={{
            width: '28px',
            height: '28px',
            marginLeft: '20px',
            marginRight: '20px', 
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
        }}></div>
        <Typography style={{ width: '250px' , fontFamily: "Maven Pro, sans-serif", color: '#C0C4CE', fontSize: '17px'}}>{mediaTitle}</Typography>
        <div style={{
            width: '20px',
            height: '20px',
            marginInline: '20px',
            backgroundImage: `url(${link_icon})`,
            backgroundSize: 'cover',
        }}></div>
    </div>
}

const Section4 = () => {
    return (
        <div className="backgroundsection4">
            <Typography className='contacttext'>Contact</Typography>
            <Typography className='commenttext1'>Did you like my work?</Typography>
            <Typography className='commenttext2'>Get in touch or follow my social media!</Typography>
            <div className='BtnContainer' style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyItems: 'center'
            }}>
                <SocialMediaButtons mediaTitle={'Linkedin'} img={linkedin_icon} link={'https://www.linkedin.com/in/rugvedapraj?jobid=1234&lipi=urn%3Ali%3Apage%3Ad_jobs_easyapply_pdfgenresume%3Bb7LUOs85QiynqMj4kxbbhw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_jobs_easyapply_pdfgenresume-v02_profile'}/>
                <SocialMediaButtons mediaTitle={'Instagram'} img={instagram_icon} link={'https://www.instagram.com/thunderbeast_12/profilecard/?igsh=MWx5MjIyamc5OWE4aA=='}/>
                <SocialMediaButtons mediaTitle={'Github'} img={github_icon} link={'https://github.com/rugved1212?tab=repositories'}/>
                <SocialMediaButtons mediaTitle={'Email'} img={email_icon} link={'https://mail.google.com/mail/?view=cm&fs=1&to=rugvedapraj1@gmail.com'}/>
            </div>
        </div>
    );
}

export default Section4;