import React from 'react';
import NavbarView from "./Navbar.view";

export * from "./Navbar.view";
export { default } from "./Navbar.view";

const getLessGrootyText = () => {
    const phrases = [
        "I am not just Groot.",
        "Guardians unite!",
        "Rocket needs this.",
        "Groot is learning!"
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
};

const copyToClipboard = () => {
    const text = getLessGrootyText();
    // Implement your clipboard functionality here
};

const Navbar: React.FC = () => {
    return (
        <div>
            {/* Your Navbar component JSX */}
        </div>
    );
};

export default Navbar;