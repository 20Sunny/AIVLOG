/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */

import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email, AlternateEmailOutlined} from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';

const Wrapper = styled(Box)`
    padding: 20px;
    justify-content: center;
    height:75vh;
    display:flex;
    margin-top:75px !important;
    margin:auto;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #fff;
`;


const Contact = () => {
    return (
        <Box className='basic' style={{maxHeight:'100vh',height:'100%',overflow:'hidden !important'}}>
            <Wrapper className='shadow'>
                <span className='flag2'>Contact Us</span>
                <form id="invisible-recaptcha-form" action="https://usebasin.com/f/34f6b8c3154e" method="post" style={{display:'flex', flexDirection:'column',justifyContent:'center', gap:'20px', width:'80vw'}}>
                <div style={{display:'flex', flexDirection:'row', width:'100%', gap:'20px'}}>
                <input className='input' type="text" name='Name' placeholder='Full Name' required style={{width:'100%'}} />    
                <input className='input' type="email" placeholder='E-mail' name="email" id="" required style={{width:'100%'}} /></div>
                <input className='input' type="text" placeholder='Subject' required />
                <textarea className='input' name="message" id="message" placeholder='Message' required style={{height:'25vh'}}></textarea>
                <div class="g-recaptcha" data-sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy"></div>
                <button className='button-86 g-recaptcha' data-sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy" data-callback='onSubmit' data-badge="inline" type="submit" id='submit-btn' style={{width:'25%',margin:'auto'}}><abbr title='Send'><SendIcon /></abbr></button>
                </form>
            </Wrapper>
            <div className='footer'>
                <div className='shadow over'>
                <Text>Follow Us</Text>
                <a href='https://20sunny.netlify.app' target='_blank' style={{color:'#fff'}}><abbr title="Portfolio"><AlternateEmailOutlined /></abbr></a>
                <a href='https://www.linkedin.com/in/20sunny' target='_blank' style={{color:'#fff'}}><abbr title="LinkedIn"><LinkedInIcon /></abbr></a>
                <a href='https://github.com/20Sunny' target='_blank' style={{color:'#fff'}}><abbr title="Github"><GitHub /></abbr></a>
                <a href='mailto:sunnysharma7601@gmail.com' target='_blank' style={{color:'#fff'}}><abbr title="E-mail"><Email /></abbr></a>
                <a href='https://www.instagram.com/sharma_sunny_7601' target='_blank' style={{color:'#fff'}}><abbr title="Instagram"><Instagram /></abbr></a>
                </div></div>
        </Box>
    );
}

export default Contact;
