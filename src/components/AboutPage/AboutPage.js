import React from 'react';
import { useSpring, animated, config } from "react-spring";

import vectorDown from "../../assets/Vector1.png";
import flagBrit from "../../assets/united-kingdom/united-kingdom.png";
// import AbsoluteWrapper from "../AbsoluteWrapper"
import "./AboutPage.css"

const About = () => {
	const fade = useSpring({
        from: {
          opacity: 0,
        },
        to: {
		  opacity: 1,
        }
	  })
    return (
        <div className="page-container about">
            <animated.div style={fade} className="page-container-main">
                <div className="about-page-container">
                    <h2>411 Hotline is a premium calling service that connects you to the people you adore the most</h2>
                </div>
                <div className="footer-main__bottom-section about">
					<div className="footer-main__bottom-section__left">
						<div className="footer-main__bottom-section__left__powered-by">Powered by NativeTalk</div>
						<div className="footer-main__bottom-section__left__copyright">Copyright 2020. All right reserved</div>
					</div>
					<div className="footer-main__bottom-section__right">
						<div className="footer-main__bottom-section__right__change-language">Change Language</div>
						<div className="footer-main__bottom-section__right__language">
							<img src={flagBrit} alt="country flag" />
							<div className="footer-main__bottom-section__right__language__text">English</div>
							<img src={vectorDown} alt="down arrow" />
						</div>
					</div>
				</div>
            </animated.div>
        </div>
    );
};

export default About;