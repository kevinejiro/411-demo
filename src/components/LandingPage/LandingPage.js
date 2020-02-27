import React from "react";
import { useSpring, animated } from "react-spring";

import Footer from '../Footer/Footer';

import './LandingPage.css'

const LandingPage = () => {
	const fade = useSpring({
        from: {
          opacity: 0,
        },
        to: {
		  opacity: 1,
        }
      })
	return (
        <div className="page-container">
            <animated.div style={fade} className="page-container-main">
                <div className="landing-page-container">
                    <div className="landing-page-item">
                        <div className="landing-page-item__large_text">
                        Get a free hotline number now
                        </div>
                        <div className="landing-page-item__input">
                            <input placeholder="Your phone number" />
                        </div>
                        <div className="landing-page-item__button">
                            <div className="landing-page-item__button__text">
                            GENERATE HOTLINE NUMBER
                            </div>
                        </div>
                        <div className="landing-page-item__small_text">
                        Sed viverra odio quis magna luctus placerat
                        </div>
                    </div>
                </div>
                <Footer />
            </animated.div>
        </div>
	);
};

export default LandingPage;
