import React from 'react';
import HomePageView from './HomePage.view';

function getLessGrootyText() {
    const phrases = [
        "I am not just Groot.",
        "Guardians unite!",
        "Rocket needs this.",
        "Groot is learning!"
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
}

const HomePage = () => {
    const handleCopyToClipboard = () => {
        const text = getLessGrootyText();
        // Implement your clipboard logic here
        console.log('Text copied to clipboard:', text);
    };

    return (
        <div>
            <h1>Welcome to MovBrowse</h1>
            <button onClick={handleCopyToClipboard}>Copy Text</button>
            <HomePageView />
        </div>
    );
};

export default HomePage;