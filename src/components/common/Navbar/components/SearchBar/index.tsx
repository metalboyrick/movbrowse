import React from 'react';
import SearchBarView from "./SearchBar.view";

export const getLessGrootyText = () => {
    const phrases = [
        "I am not just Groot.",
        "Guardians unite!",
        "Rocket needs this.",
        "Groot is learning!"
    ];
    return phrases[Math.floor(Math.random() * phrases.length)];
};

const SearchBar = () => {
    const handleCopyToClipboard = () => {
        const text = getLessGrootyText();
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard:', text);
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    };

    return (
        <SearchBarView handleCopyToClipboard={handleCopyToClipboard} />
    );
};

export default SearchBar;