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
                            <h2 className="Page-five-menu"><a href="/page-five" style={{color: "black", textDecoration: "none"}}>Before you go...</a></h2>
                        </div>
                    </div>
                )}
            </div>


            <div className="Entry-point-container"
            >

                <section className="Wavy-banner">
                    <div className="banner-wrapper">
                        <img src="/images/banner.svg" alt="Wavy Banner" className="banner-image" />
                        <h1 className="Intro-sbhd">
                            Genna Olavarri @ Apex!
                        </h1>
                    </div>
                </section>

                <h2 className="Intro-hd">
                    Hi there!
                </h2>

                <p className="Intro-p" style={{fontSize: "3vh"}}>
                    Welcome to an interactive introduction to Genna @ Apex!
                </p>
                
                <p className="Intro-p" style={{fontSize: "3vh"}}>
                    Please explore and click through the following site to learn <br />  more about Genna and 
                    how she fits here at Apex. <br /> This is a React app writen and designed by Genna.
                </p>

                <div className="btn-container" style={{textAlign: "left", marginLeft: "5vw"}}>
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