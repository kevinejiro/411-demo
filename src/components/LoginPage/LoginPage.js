import React from "react";
import { useSpring, animated, config } from "react-spring";

import "./LoginPage.css";

import loginSideImage from "../../assets/shutterstock/shutterstock_619563587@2x.png";
import vectorDown from "../../assets/Vector1.png";
import flagBrit from "../../assets/united-kingdom/united-kingdom.png";

const LoginPage = () => {
    const fade = useSpring({
        from: {
          opacity: 0,
        },
        to: {
		  opacity: 1,
        }
      })

      const slideLeft = useSpring({
        from: {
			transform: 'translateX(100%)'
        },
        to: {
			transform: 'translateX(0)'
        }
      })
	return (
		<div style={fade} className="page-container login">
			<animated.div style={fade} className="login-container">
				<div className="page-containe__login__image">
					<img src={loginSideImage} alt="login background" />
				</div>
				<animated.div style={slideLeft} className="page-container__login__content">
					<div className="page-container-login-main">
						<div className="page-container__login__content__login-">
							Login to your account
						</div>
						<div className="page-container__login__content__email">
							Email address
						</div>
						<div className="page-container__login__content__input">
							<input type="email" placeholder="Your email address" />
						</div>
                        <div className="page-container__login__content__email __password">
							Password
						</div>
                        <div className="page-container__login__content__input">
							<input type="password" />
						</div>
						<div className="page-container__login__content__button-red">
							LOGIN
						</div>
						<div className="page-container__login__content-last">
							<div className="page-container__login__content-stay-signed-in-group">
								<input type="checkbox" className="page-container__login__content__checkbox"/>
								<div className="page-container__login__content__small-text">
									Stay signed in
								</div>
							</div>
							<div className="page-container__login__content__link-forget-password">
								FORGOT PASSWORD
							</div>
						</div>
					</div>
					<div className="footer-main__bottom-section login">
						<div
							className="footer-main__bottom-section__left"
							id="half-footer-"
						>
							<div className="footer-main__bottom-section__left__powered-by">
								Powered by NativeTalk
							</div>
							<div className="footer-main__bottom-section__left__copyright">
								Copyright 2020. All right reserved
							</div>
						</div>
						<div
							className="footer-main__bottom-section__right"
							id="half-footer-right"
						>
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
				</animated.div>
			</animated.div>
		</div>
	);
};

export default LoginPage;
