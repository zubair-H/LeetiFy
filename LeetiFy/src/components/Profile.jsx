import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
    return (
        <div>
            <h1>Profile Page</h1>
            <p>This is the profile page.</p>
            <Link to="https://github.com/zubair-H">
                <button>Go back to Home</button>
            </Link>
        </div>
    );
}
