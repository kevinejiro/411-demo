import React from "react";
import { useSpring, animated, config } from "react-spring";

import { ReactComponent as PhoneIcon } from "../../assets/Group30.svg";
import vectorDown from "../../assets/Vector1.png";
import flagBrit from "../../assets/united-kingdom/united-kingdom.png";

import "./CreditPage.css";

const CreditPage = () => {
	const fade = useSpring({
        from: {
          opacity: 0,
        },
        to: {
		  opacity: 1,
        }
	  })
	  
	  const wobbly = useSpring({
		config: config.wobbly,
        from: {
			transform: 'translateY(100%)'
        },
        to: {
			transform: 'translateY(0)'
        }
	  })
	  
	return (
		<div className="page-container about">
			<animated.div style={fade} className="page-container-main">
				<div className="credit-page-container">
					<div className="credit-page-container__left">
						<div className="credit-page-container__left__top">
							<div className="credit-page-container__left__text-h1">
								Buy call credits
							</div>
							<div className="credit-page-container__left__text-h3">
								Lorem ipsum dolor sit amet, consectetur
							</div>
							<div className="credit-page-container__left__label">
								Enter phone number
							</div>
							<div className="credit-page-container__left__input">
								<input />
							</div>
							<div className="credit-page-container__left__label">
								Credit amount
							</div>
							<div className="credit-page-container__left__select-credit">
                                <div> N2500 </div>
                                <img src={vectorDown} alt="down arrow" />
							</div>
							<div className="credit-page-container__left__buttons-group">
								<div className="credit-page-container__left__buttons-group__red">
									BUY CREDITS
								</div>
								<div className="credit-page-container__left__buttons-group__gray">
									TRANSFER CREDIT
								</div>
							</div>
						</div>
						<div className="footer-main__bottom-section credit">
							<div className="footer-main__bottom-section__left" id="half-footer-left">
								<div className="footer-main__bottom-section__left__powered-by">
									Powered by NativeTalk
								</div>
								<div className="footer-main__bottom-section__left__copyright">
									Copyright 2020. All right reserved
								</div>
							</div>
							<div className="footer-main__bottom-section__right" id="half-footer-right">
								<div className="footer-main__bottom-section__right__change-language">
									Change Language
								</div>
								<div className="footer-main__bottom-section__right__language">
									<img src={flagBrit} alt="country flag" />
									<div className="footer-main__bottom-section__right__language__text">
										English
									</div>
									<img src={vectorDown} alt="down arrow" />
								</div>
							</div>
						</div>
					</div>
					<animated.div style={wobbly} className="credit-page-container__right">
						<PhoneIcon />
					</animated.div>
				</div>
			</animated.div>
		</div>
	);
};

export default CreditPage;
