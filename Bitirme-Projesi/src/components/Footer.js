import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../styles/Footer.css';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a href="https://twitter.com/DominosTR"><TwitterIcon/></a>
        <a href="https://www.instagram.com/dominostr/"><InstagramIcon/></a>
        <a href="https://www.facebook.com/DominosTurkiye/"><FacebookIcon/></a>
        <a href="https://www.youtube.com/channel/UCfwJEnsU0myu4YKcIqxMimA"><YouTubeIcon/></a>
        </div>
    </div>
 )
}
