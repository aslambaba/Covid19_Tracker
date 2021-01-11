import React from 'react';
import './style/developer.css';
import aslambabaImage from './images/aslambaba.png';
import { FaFacebookSquare, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Developer() {
    return (
        <div className='MainContainer'>
            <div className='Container'>
                <img className='aslambabaImage' alt='aslambaba' src={aslambabaImage} />
                <h2 className='title'>Created By Aslam Baba</h2>
                <a href='https://facebook.com/aslambaba91r' target='_blank' rel="noopener noreferrer"><FaFacebookSquare className='aslambabaSocialicons'/></a>
                <a href='https://instagram.com/aslambaba91r' target='_blank' rel="noopener noreferrer"><FaInstagram className='aslambabaSocialicons' /></a>
                <a href='https://github.com/aslambaba' target='_blank' rel="noopener noreferrer"><FaGithub className='aslambabaSocialicons' /></a>
                <a href='https://linkedin.com/in/aslamsarfraz/' target='_blank' rel="noopener noreferrer"><FaLinkedin className='aslambabaSocialicons' /></a>
                <br />
                <a href='https://facebook.com/aslambabaofficial' target='_blank' rel="noopener noreferrer"><button className='FacebookPage'>Facebook Page</button></a>
            </div>

        </div>
    );
}
