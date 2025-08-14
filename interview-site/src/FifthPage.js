/*--------------------------------------------------------------------------------------------------*
 *                                          Wrap up page                                            *
 *                                         Genna Olavarri                                           *
 *                                           2025-08-13                                             *
 *--------------------------------------------------------------------------------------------------*/

// React imports
import { useState } from 'react';

// Local imports
import './App.css';

/*--------------------------------------------------------------------------------------------------*/
// This is the fifth page of the React app, which serves as a wrap-up page with
// links to Genna's personal website and the source code repository. It also provides a brief
// summary of Genna's ongoing internship at Apex and her future plans.
/*--------------------------------------------------------------------------------------------------*/

const FifthPage = () => {

    const [menuOpen, setMenuOpen] = useState(false);
        
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="Fifth-page">

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

            <h1 className="Page-hd">Before you go...</h1>

            <p className="Fifth-page-text" style={{ fontSize: "3vh", textAlign: "center" }}>
                Thank you for exploring this interactive introduction to <b>Genna Olavarri @ Apex</b>!
            </p>

            <p className="Fifth-page-text" style={{ fontSize: "3vh", textAlign: "center" }}>
                Check out Genna's personal website or the source code repository below:
            </p>

            <div className="Modals">
                    <a href="https://www.golavarri.com/">
                        <img 
                            className="modal-tile"
                            src="/images/logo.jpg"
                            alt="Genna's logo"
                            title="Visit Genna's website"
                        />
                    </a>
                    <a href="https://github.com/golavarri/gennaxapex">
                        <img 
                            className="modal-tile"
                            src="/images/github.png"
                            alt="GitHub logo"
                            title="View the source code on GitHub"
                        />
                    </a>
            </div>
                    

            <p className="Fifth-page-text" style={{ fontSize: "3vh", textAlign: "center" }}>
                Genna is extending her internship through the end of the year and is excited to continue
                working with and learning from the Apex team. She is particularly looking forward to the opportunity to
                contribute to the ongoing data warehouse development project with Michael Mercer.
            </p>

            <p className="Fifth-page-text" style={{ fontSize: "3vh", textAlign: "center" }}>
                If you have any questions or would like to connect, feel free to reach out via email or Slack. 
                Thank you!
            </p>

            <div className="btn-container" style={{ textAlign: "center", marginTop: "5vh" }}>
                <a href="/">
                    <button className="Next-btn">
                        Back to Home
                    </button>
                </a>
            </div>
        </div>
    );
};

export default FifthPage;