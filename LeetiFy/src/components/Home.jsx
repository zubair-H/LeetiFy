import React, { useState, useRef, useEffect } from 'react';
import './css/home.css';
import image from './pics/linkedin-app-white-icon.webp';
import Page1 from './Page1';
import Arrays from './Arrays';

export default function Home() {
    const [showNewPage, setShowNewPage] = useState(false);
    const newPageRef = useRef(null);


    // this adds the scoll to the new page
    const handleTryNowClick = () => {
        setShowNewPage(true);
    };


    useEffect(() => {
        if (showNewPage && newPageRef.current) {
            newPageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [showNewPage]);


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
            {/* Changing content here */}
            {showNewPage && (
                <div ref={newPageRef}>
                    <Page1 />
                    <Arrays></Arrays>

                </div>
            )}
        </div>
    );
}
