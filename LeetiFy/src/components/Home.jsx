import React, { useState } from 'react';
import './css/home.css'
import image from './pics/linkedin-app-white-icon.webp'
import './css/home.css';
import Page1 from './Page1';


export default function Home() {
    const [showNewPage, setShowNewPage] = useState(false);
    const [pageRendered, setPageRendered] = useState(false);


    const handleTryNowClick = () => {
        setShowNewPage(true);

        const handleTryNowClick = () => {
            setShowNewPage(true);

        }
    }

    return (
        <body id='container'>
            <div>
                <div id='header' >
                    <img id='linkedInPng' src={image} alt="" />

                    <button id='backBtn' onClick={() => setShowNewPage(false)}>Back</button>
                    <button id='button-23'>About</button>
                    <button id='button-23'>Profile</button>
                    <button id='button-23'>GitHub</button>
                </div>
                <h3 id='logo'>LeetiFy</h3>
                <p id='missionStatement'>Life is temporary, but LeetCode is forever</p>
                <button className='button-30' onClick={handleTryNowClick}>Try Now!</button>

            </div>
            {/* changing content here*/}
            {showNewPage && (
                <div>
                    <Page1></Page1>

                </div>
            )}
        </body>
    );
}









