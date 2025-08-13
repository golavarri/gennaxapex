import React, { useState } from 'react';
import './App.css';

const FourthPage = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="Fourth-page">

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

            <div className="Fourth-page-content">

                <h1 className="Fourth-page-hd">
                    How's Genna using AI?
                </h1>

                <h2 className="Fourth-page-subhd">
                    AI is a tool for optimizing workflows and creating strategic plans for
                    how to approach complex problems. This frees up time to focus on higher-level
                    creative problem solving and innovation.

                    <br />

                    The last couple of days have actually been a great example of this for Genna.
                </h2>

                <div className="Stage-one">
                    <h3 className="Stage-one-hd">
                        Planning for personal endeavors
                    </h3>

                    <p className="Stage-one-p">
                        Genna left Dallas on Friday to head to NYC to visit friends and family for a couple of days
                        before returning home to Davis. She had the last day of her 
                        internship on Friday and her flight at 7:30 PM that evening. She used
                        AI to help plan out the day to optimize timing.

                        <br />

                        For example, she consulted AI to determine the optimal food to bring to the
                        airport and when to order it to ensure it would not risk spoiling before she
                        could eat it on the flight. She ended up ordering tofu pad thai during her lunch break
                        at 11:30 AM for delivery and put the food in the fridge until she left for the airport.
                        The noodles were not saucey so they did not get soggy, tofu has a lower
                        risk of spoiling than other proteins, and by refrigerating it first, the food spent
                        little time in the "danger zone" of 40-140 degrees Fahrenheit - considerations that
                        she worked through with AI.
                    </p>

                </div>

                <div className="Stage-two">
                    <h3 className="Stage-two-hd">
                        Time optimization for professional endeavors
                    </h3>

                    <p className="Stage-two-p">
                        While walking around NYC on Monday, Genna learned she was advancing to the 
                        final round of interviews for ALDP! With plans in the city Monday and a full 
                        day of travel back to California on Tuesday, she did not have a ton of time
                        to prepare the final assignment. So, she used AI to help her develop this
                        very site! 

                        <br />

                        She uses Copilot as she writes code to help her program more efficiently. The
                        auto completions and suggestions help her write code faster and with fewer errors.

                        <br />

                        Genna also used AI to help generate the Cascading Style Sheets (CSS) for this site.
                        When it comes to creating a project efficiently, AI is a great tool for delegating
                        tedious tasks in order to focus on the more creative aspects of the project. In this 
                        case, Genna wanted to focus her attention on the content of the site, the structure, 
                        and the smaller aesthetic details. AI helped her generate the boilerplate CSS so she
                        could spend more time perfecting the content and tweaking the design rather than
                        writing all of the, often tedious, CSS code entirely from scratch.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default FourthPage;
