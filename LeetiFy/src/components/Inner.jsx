import './css/styles.css'
import React, { useState, useEffect } from 'react';


export default function Inner({ id }) {
    const [notes, setNotes] = useState('');
    const [isNotesOpen, setIsNotesOpen] = useState(false);
    const [links, setLinks] = useState([]);
    const [isLinksOpen, setIsLinksOpen] = useState(false);

    useEffect(() => {
        // Load notes from local storage when the component mounts
        const savedNotes = localStorage.getItem(`notes_${id}`);
        if (savedNotes) {
            setNotes(savedNotes);
        }

        // Load links from local storage when the component mounts
        const savedLinks = localStorage.getItem(`links_${id}`);
        if (savedLinks) {
            setLinks(JSON.parse(savedLinks));
        }
    }, [id]);

    const handleNotesChange = (event) => {
        const newNotes = event.target.value;
        setNotes(newNotes);
        localStorage.setItem(`notes_${id}`, newNotes);
    };

    const toggleNotesSection = () => {
        setIsNotesOpen(!isNotesOpen);
    };

    const handleLinkSubmit = (event) => {
        event.preventDefault();
        const newLink = event.target.elements.link.value;
        if (newLink) {
            const updatedLinks = [...links, newLink];
            setLinks(updatedLinks);
            localStorage.setItem(`links_${id}`, JSON.stringify(updatedLinks));
            event.target.reset();
        }
    };

    const removeLink = (index) => {
        const updatedLinks = links.filter((_, i) => i !== index);
        setLinks(updatedLinks);
        localStorage.setItem(`links_${id}`, JSON.stringify(updatedLinks));
    };

    const toggleLinksSection = () => {
        setIsLinksOpen(!isLinksOpen);
    };

    return (
        <div id='buttonDiv'>
            <button id='oneBtn' onClick={toggleNotesSection}>
                {isNotesOpen ? 'Notes X' : 'Notes +'}
            </button>
            <button id='one1Btn' onClick={toggleLinksSection}>
                {isLinksOpen ? 'Links X' : 'Links +'}
            </button>
            {isNotesOpen && (
                <div id='notesDisplay'>
                    <h3>Saved Notes:</h3>
                    <textarea
                        id='notesTextarea'
                        value={notes}
                        onChange={handleNotesChange}
                        rows='10'
                        cols='30'
                        placeholder='Write your notes here...'
                    ></textarea>
                </div>
            )}
            {isLinksOpen && (
                <div id='linksDisplay'>
                    <h3>Saved Links:</h3>
                    <form onSubmit={handleLinkSubmit}>
                        <input type='text' name='link' placeholder='Enter a link' />
                        <button type='submit'>Save Link</button>
                    </form>
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}>
                                <a href={link} target='_blank' rel='noopener noreferrer'>{link}</a>
                                <button onClick={() => removeLink(index)}>x</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
