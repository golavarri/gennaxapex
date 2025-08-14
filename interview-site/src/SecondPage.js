import React, { useState } from 'react';
import './App.css';
import FlipTile from './Fliptile';

const SecondPage = () => {

    const [menuOpen, setMenuOpen] = useState(false);
        
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const [hasClickedAnyTile, setHasClickedAnyTile] = useState(false);

    const handleFirstTileClick = () => {
        if (!hasClickedAnyTile) {
        setHasClickedAnyTile(true);
        }
    };

    return (
        <div classNamme="Second-page">

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
                            <h2 className="Page-five-menu"><a href="/page-five" style={{color: "black", textDecoration: "none"}}>Before you go...</a></h2>
                        </div>
                    </div>
                )}
            </div>

            <div className="Second-page-content">

                <h1 className="Page-hd">
                        Genna Olavarri...
                </h1>

                <div className="Tiles">

                    <FlipTile
                        imageSrc="/images/professional.jpg"
                        imageAlt="Genna Olavarri headshot"
                        text="is a creative problem solver driven by the puzzle at the 
                            core of modern data and programming efforts. She has been
                            developing data structures here at Apex that optimize diverse
                            workflows and address impactful gaps in data systems. Genna
                            will continue seeking opportunities to learn and apply new 
                            skills towards developing creative solutions to multi-disciplinary
                            challenges."
                        onFirstClick={handleFirstTileClick}
                    />

                    <FlipTile
                        imageSrc="/images/school.jpeg"
                        imageAlt="Genna in front of her junior-year apartment"
                        text="is a rising senior at Wesleyan University in Middletown, Connecticut. 
                            She is majoring in Computer Science with a minor in Integrated 
                            Design, Engineering, Arts & Society (IDEAS). She has been a teaching 
                            assistant the past 4 semesters. This fall, she will be a TA for Automated Reasoning
                            (COMP360A), helping in topics of first order logic and automated modeling in Alloy. 
                            Genna also conducts research with the
                            Programming Languages & Privacy Group in browser fingerprinting as a web privacy threat."
                        onFirstClick={handleFirstTileClick}
                    />

                    <FlipTile
                        imageSrc="/images/kid.JPG"
                        imageAlt="Genna on the swings as a kid"
                        text="grew up in Davis, California. Genna worked out of the Dallas, Texas Apex office 
                            this summer. In moving between California, Connecticut, and Texas 
                            on her own (she considers herself somewhat tri-coastal now), she has 
                            become skilled at 
                            adapting to new environments and practicing indepent problem-solving.
                            However, she has also learned the importance of knowing when to rely 
                            on your team or support system to ask 
                            questions and learn from others that have had similar experiences 
                            (shout-out Genna's parents). "
                        onFirstClick={handleFirstTileClick}
                    />
                </div>
            
                {hasClickedAnyTile && (
                    
                    <div className="btn-container">

                        <h2 className="Page-hd">
                            ...is a great fit at Apex!
                        </h2>

                        <a href="/page-three">
                        <button className="Next-btn">
                            Why?
                        </button>
                        </a>
                    </div>
                )}
            </div>

        </div>
    );
};

export default SecondPage