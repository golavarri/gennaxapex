/*--------------------------------------------------------------------------------------------------*
 *                                          Genna on AI                                             *
 *                                         Genna Olavarri                                           *
 *                                           2025-08-13                                             *
 *--------------------------------------------------------------------------------------------------*/

// React imports
import { useState } from 'react';

// Local imports
import './App.css';
import Modal from './Modal';

/*--------------------------------------------------------------------------------------------------*/
// This is the fourth page of the React app, which discusses how Genna uses AI in her work
// and personal life. 
/*--------------------------------------------------------------------------------------------------*/

const FourthPage = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalText, setModalText] = useState('');
    const [modalTitle, setModalTitle] = useState('');

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const openModalWithText = (title, text) => {
        setModalTitle(title);
        setModalText(text);
        setModalOpen(true);
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
                            <h2 className="Page-five-menu"><a href="/page-five" style={{color: "black", textDecoration: "none"}}>Before you go...</a></h2>
                        </div>
                    </div>
                )}
            </div>

            <div className="Fourth-page-content">

                <h1 className="Page-hd">
                    How's Genna using AI?
                </h1>

                <p className="Fourth-page-p">
                    AI is a tool for <b>optimizing workflows</b> and <b>creating strategic plans</b> for
                    how to approach complex problems. This frees up time to focus on higher-level
                    creative problem solving and innovation.
                </p>

                <br />
                <hr />
                <br />

                <h2 className="Fourth-page-p">
                    The last couple of days have actually been a great example of this for Genna.
                </h2>

                <p className="Fourth-page-p2" style={{ fontSize: "1.2rem", textAlign: "center" }}>
                    Click the images below to learn more!
                </p>

                <div className="Modals">
                    <img 
                        className="modal-tile"
                        src="/images/flight.jpeg"
                        alt="airplane wing"
                        loading='lazy'
                        onClick={() => openModalWithText(
                            "Planning",
                            "Genna left Dallas on Friday to head to NYC to visit friends and family for a couple of days before returning home to Davis. She had the last day of her internship on Friday and her flight at 7:30 PM that evening. She used AI to help plan out the day to optimize timing. For example, she consulted AI to determine the optimal food to bring to the airport and when to order it to ensure it would not risk spoiling before she could eat it on the flight. She ended up ordering tofu pad thai during her lunch break at 11:30 AM for delivery and put the food in the fridge until she left for the airport. The noodles were not saucey so they did not get soggy, tofu has a lower risk of spoiling than other proteins, and by refrigerating it first, the food spent little time in the 'danger zone' of 40-140 degrees Fahrenheit - considerations that she worked through with AI."
                            )}
                            style={{cursor: 'pointer'}}
                    />
                    <img 
                        className="modal-tile"
                        src="/images/dallas.jpeg"
                        alt="Dallas skyline"
                        loading='lazy'
                        onClick={() => openModalWithText(
                            "Time optimization",
                            "While walking around NYC on Monday, Genna learned she was advancing to the final round of interviews for ALDP! With plans in the city Monday and a full day of travel back to California on Tuesday, she did not have a ton of time to prepare the final assignment. So, she used AI to help her develop this very site! She used Copilot as she wrote code to help her program more efficiently. The auto completions and suggestions helped her write code faster and with fewer errors. Genna also used AI to help generate the Cascading Style Sheets (CSS) for this site. When it comes to creating a project efficiently, AI is a great tool for delegating tedious tasks in order to focus on the more creative aspects of the project. In this case, Genna wanted to focus her attention on the content of the site, the structure, and the smaller aesthetic details. AI helped her generate the boilerplate CSS so she could spend more time perfecting the content and tweaking the design rather than writing all of the, often tedious, CSS code entirely by hand. With the help of AI, this was the quickest Genna has ever developed a site from scratch, having started it on the plane Tuesday evening and finishing it Wednesday night."
                            )}
                            style={{cursor: 'pointer'}}
                    />
                </div>
            </div>

            <Modal 
                isOpen={modalOpen} 
                onClose={() => setModalOpen(false)}
                title={modalTitle}
            >
                <p>{modalText}</p>
            </Modal>

            <div className="btn-container">

                <a href="/page-five">
                <button className="Next-btn" style={{ marginTop: '6vh'}}>
                    Some final thoughts
                </button>
                </a>
            </div>

        </div>
    );
};

export default FourthPage;
