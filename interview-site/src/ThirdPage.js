/*--------------------------------------------------------------------------------------------------*
 *                                       Why Genna @ Apex?                                          *
 *                                         Genna Olavarri                                           *
 *                                           2025-08-13                                             *
 *--------------------------------------------------------------------------------------------------*/

// React imports
import { useState } from 'react';

// Local imports
import './App.css';

/*--------------------------------------------------------------------------------------------------*/
// This is the third page of the React app, which provides a video introduction to why Genna fits
// the culture at Apex.
/*--------------------------------------------------------------------------------------------------*/

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
                            <h2 className="Page-five-menu"><a href="/page-five" style={{color: "black", textDecoration: "none"}}>Before you go...</a></h2>
                        </div>
                    </div>
                )}
            </div>

            <h1 className="Page-hd">
                Why Genna @ Apex?
            </h1>

            <div className="Third-page-content">
                <iframe
                    width="1024"
                    height="576"
                    src="https://www.youtube.com/embed/g0Ta2Fv2sz4"
                    loading="lazy"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>            
            </div>

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