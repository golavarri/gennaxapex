import React, { useState } from 'react';
import './App.css';

const ThirdPage = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="Third-page">

            <div className="Menu">
                <button className="Menu-button" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </button>
                {menuOpen && (
                    <div className="Dropdown">
                        <div className="Dropdown-content">
                            <a href="/">
                                <i className="fas fa-home" style={{color: "black", fontSize: "3vh"}}></i>
                            </a>
                            <h2 className="Page-two-menu"><a href="/page-two" style={{color: "black", textDecoration: "none"}}>Who is Genna?</a></h2>
                            <h2 className="Page-three-menu"><a href="/page-three" style={{color: "black", textDecoration: "none"}}>Why Genna @ Apex?</a></h2>
                            <h2 className="Page-four-menu"><a href="/page-four" style={{color: "black", textDecoration: "none"}}>How's Genna using AI?</a></h2>
                        </div>
                    </div>
                )}
            </div>

            <h1 className="Third-page-hd">
                Why Genna @ Apex?
            </h1>

            /* okay a note on what will go here:
            I think it should be a video clip where I say the following:

            -- Passionate about enabling universal access through tech
            (web accessibility in high school)
            -- I learn quickly and apex emphasizes continued education. First
            time working in finance and learned a ton in 10 weeks, excited to see
            what all I can pick up in a year with aldp, and longer with the company
            at large
            -- I'm a creative person, I like thinking about things in creative
            ways and I resonate with the apex goal of innovating industry-leading
            tech solutions
            */

            <div className="btn-container">

                <a href="/page-four">
                <button className="Next-btn">
                    What's she doing with AI?
                </button>
                </a>
            </div>
        </div>
    );
};

export default ThirdPage