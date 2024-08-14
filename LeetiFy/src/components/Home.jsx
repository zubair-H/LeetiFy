import React, { useState, useRef } from 'react';
import './css/home.css';
import image from './pics/linkedin-app-white-icon.webp';
import Page1 from './Page1';
import { Link } from 'react-router-dom';
import Profile from './Profile';




export default function Home() {
    const [showNewPage, setShowNewPage] = useState(false);
    const newPageRef = useRef(null);

    const handleTryNowClick = () => {
        setShowNewPage(true);
        setTimeout(() => {
            newPageRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 500); // Adjust the delay if necessary
    };

    const handleBackClick = () => {
        const scrollOptions = {
            top: 0,
            behavior: 'smooth', // Smooth scroll behavior
            duration: 500 // Duration of the scroll animation (milliseconds)
        };
        window.scrollTo(scrollOptions);
        setShowNewPage(false);
    };


    return (
        <div id="container">
            <div>
                <div id="header">
                <img id="linkedInPng" src={image} alt="" />

                    <button id="backBtn" onClick={handleBackClick}>Back</button>

                    <a href="https://github.com/zubair-H" >
                        <button id="button-23" >Portfolio</button>
                    </a>

                    <a href="https://github.com/zubair-H" >
                        <button id="button-23">Github</button>
                    </a>
                </div>
                <p className='title' id="logo">LeetiFy</p>
                <p id="missionStatement">Life is temporary, but LeetCode is forever</p>
                <button className="button-30" onClick={handleTryNowClick}>Try Now!</button>
            </div>
            <div
                ref={newPageRef}
                style={{ display: showNewPage ? 'block' : 'none' }}
            >
                <Page1 />

            </div>
        </div>
    );
}
