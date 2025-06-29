import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-icons">
          <img src={youtube_icon} alt="YouTube" />
            <img src={facebook_icon} alt="Facebook" />
            <img src={twitter_icon} alt="Twitter" />
            <img src={instagram_icon} alt="Instagram" />
        </div>
        <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
            <li>Speed Test</li>
            <li>Only on Netflix</li>
            <li>Media Center</li>
            <li>Ways to Watch</li>
            <li>Cookie Settings</li>
        </ul>
        <p className="copyright-text">@ 1997-2025 Netflix, Inc</p>
    </div>
  )
}

export default Footer