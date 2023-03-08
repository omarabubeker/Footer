import React, { useState } from "react";
import styled from "styled-components";
import {
    Link
} from "react-router-dom";
import FormInput from "./FormInput";

import { FaLinkedinIn, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const StyledFooter = styled.footer`
grid-area: footer;
display: flex;
flex-direction: row;
align-items: center;
background-color: #7ab5a4;
justify-content: space-between;
`;

const StyledLinks = styled(Link)`
font-size: 20px;
margin: 0 1em 0 1em;
text-decoration: none;
color: white;
`

const StyledIcons = styled.a`
height: 3em;
width: 3em;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
`
const IconWrap = styled.div`
display: flex;
flex-direction: row;
width: 15rem;
justify-content: space-between;
`



const Footer = () => {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    let iconStyles = { color: "#eeeeee", fontSize: "2em" };
    
    return (
        <StyledFooter>
            <StyledLinks>
                <p>Omar Abubeker</p>
                <p>O.abubeker@gmail.com</p>
                <p>+4612345678</p>
            </StyledLinks>
            <IconWrap>
                <StyledIcons style={{backgroundColor: '#C13584'}} href="https://www.instagram.com/">
                    <FaInstagram style={iconStyles} />
                </StyledIcons>
                <StyledIcons style={{backgroundColor: '#0077b5'}} href="https://se.linkedin.com/">
                    <FaLinkedinIn style={iconStyles} />
                </StyledIcons>
                <StyledIcons style={{backgroundColor: '#ff0050'}} href="https://www.tiktok.com/">
                    <FaTiktok style={iconStyles} />
                </StyledIcons>
                <StyledIcons style={{backgroundColor: '#1DA1F2'}} href="https://twitter.com/?lang=sv">
                    <FaTwitter style={iconStyles} />
                </StyledIcons>
            </IconWrap>
            <form>
                <FormInput placeholder="e-mail" setEmail = {setEmail}/>
                <FormInput placeholder="message" setMessage = {setMessage}/>
                
                <button>
                Send
                </button>
            </form>
        </StyledFooter>
    );
}

export default Footer;