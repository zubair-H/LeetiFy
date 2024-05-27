import React, { useState, useRef } from 'react';
import './css/home.css';
import image from './pics/linkedin-app-white-icon.webp';
import Page1 from './Page1';
import Graph from './Graph';


export default function Home() {
    const [showNewPage, setShowNewPage] = useState(false);
    const newPageRef = useRef(null);

    const handleTryNowClick = () => {
        setShowNewPage(true);
        setTimeout(() => {
            newPageRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 0); // Adjust the delay if necessary
    };

    return (
        <div id="container">
            <div>
                <div id="header">
                    <img id="linkedInPng" src={image} alt="" />
                    <button id="backBtn" onClick={() => setShowNewPage(false)}>Back</button>
                    <button id="button-23">About</button>
                    <button id="button-23">Profile</button>
                    <button id="button-23">GitHub</button>
                </div>
                <h3 id="logo">LeetiFy</h3>
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
