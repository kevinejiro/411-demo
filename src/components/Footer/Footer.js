import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";

import { ReactComponent as FooterImage3 } from "../../assets/Group47.svg";
import { ReactComponent as FooterImage2 } from "../../assets/Group46.svg";
import vectorDown from "../../assets/Vector1.png";
import flagBrit from "../../assets/united-kingdom/united-kingdom.png";
import FooterImage1 from "../../assets/best-podcasts-2018-1/best-podcasts-2018-1.png";
import "./Footer.css";

const Footer = () => {

	const fade = useSpring({
		config: config.wobbly,
        from: {
          opacity: 0,
          bottom: -20
        },
        to: {
		  opacity: 1,
		  bottom: 0
        }
      })
	return (
		<animated.div style={fade} className="footer-container">
			<div className="footer-main">
				<div className="footer-main__top-section">
					<div className="footer-main__top-section__item">
						<div className="footer-main__top-section__item__image">
							<Link>
								<img src={FooterImage1} alt="footer icon" />
							</Link>
						</div>
						<div className="footer-main__top-section__item__text">
							<div className="footer-main__top-section__item__text-top">
								Discover what you can do
							</div>
							<div className="footer-main__top-section__item__text-bottom">
								Sign up for special offers
							</div>
						</div>
					</div>
					<div className="footer-main__top-section__item">
						<div className="footer-main__top-section__item__image">
							<Link>
								<FooterImage2 className="footer-icon" />
							</Link>
						</div>
						<div className="footer-main__top-section__item__text">
							<div className="footer-main__top-section__item__text-top">
								How it works
							</div>
							<div className="footer-main__top-section__item__text-bottom">
								Learn more about 411
							</div>
						</div>
					</div>
					<div className="footer-main__top-section__item">
						<div className="footer-main__top-section__item__image">
							<Link>
								<FooterImage3 className="footer-icon" />
							</Link>
						</div>
						<div className="footer-main__top-section__item__text">
							<div className="footer-main__top-section__item__text-top">
								View top hotliners
							</div>
							<div className="footer-main__top-section__item__text-bottom">
								Check top hotlines
							</div>
						</div>
					</div>
				</div>
				<div style={fade} className="footer-main__bottom-section">
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
			</div>
		</animated.div>
	);
};

export default Footer;
