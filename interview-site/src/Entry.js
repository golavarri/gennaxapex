import React, { useState } from 'react';
import './App.css';

const Entry = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (

        <div className="Entry-point-page">

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


            <div className="Entry-point-container"
            >
                <h1 className="Intro-hd">
                    Hi there!
                </h1>

                <p className="Intro-p" style={{fontSize: "3vh"}}>
                    Welcome to an interactive introduction to...
                </p>

                <section className="Wavy-banner">
                    <div className="banner-wrapper">
                        <img src="/images/banner.svg" alt="Wavy Banner" className="banner-image" />
                        <h2 className="Intro-sbhd">
                            Genna Olavarri @ Apex!
                        </h2>
                    </div>
                </section>
                
                <p className="Intro-p" style={{fontSize: "3vh", textAlign: "right"}}>
                    Please explore and click through the following site to learn <br />  more about Genna and 
                    how she fits here at Apex. 
                </p>

                <div className="btn-container">
                    <a href="/page-two">
                        <button className="Next-btn" style={{ marginTop: "5rem"}}>
                            Wait, who's Genna?
                        </button>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Entry