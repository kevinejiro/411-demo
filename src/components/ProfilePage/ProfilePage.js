import React from "react";
import { useSpring, animated } from "react-spring";

import vectorDown from "../../assets/Vector1.png";
import flagBrit from "../../assets/united-kingdom/united-kingdom.png";
import profilePic from "../../assets/lady2/lady.png"

import "./ProfilePage.css";

const ProfilePage = () => {
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
			<animated.div style={fade} className="page-container-main profile">
				<div className="profile__top-container">
					<div className="profile__top-text"> My Profile</div>
					<div className="profile__top-button">WITHDRAW EARNINGS</div>
				</div>
				<div className="profile__body-container">
					<div className="profile__body-bio-container">
                        <div className="profile__body-bio-image-container">
                            <img src={profilePic} alt="profile display avatar"/>
                        </div>
                        <div className="profile__body-bio-name-container">
                            <div className="profile__body-bio-name-label">Full Name</div>
                            <div className="profile__body-bio-name-text">Larry Geena Addams</div>
                        </div>
                        <hr/>
                        <div className="profile__body-bio-name-container">
                            <div className="profile__body-bio-name-label">Username</div>
                            <div className="profile__body-bio-name-text">GigithePsychic</div>
                        </div>
                        <hr/>
                        <div className="profile__body-bio-name-container">
                            <div className="profile__body-bio-name-label">Hotline Number</div>
                            <div className="profile__body-bio-name-text">0818 8883 3134</div>
                        </div>
                        <hr/>
                        <div className="profile__body-bio-name-container">
                            <div className="profile__body-bio-name-label">Hourly Rate</div>
                            <div className="profile__body-bio-name-text">N580/min</div>
                        </div>
                        <hr/>
                        <div className="profile__body-bio-name-container logout">
                            <div className="profile__body-bio-name-label logout">Logout</div>
                        </div>
                    </div>
					<div className="profile__body-container__stats">
						<div className="profile__body-container__stats-top">
							<div className="profile__body-container__stats-top__left">
								<div className="profile__body-container__stats-top__left__top-section">
									<div className="profile__body-container__stats-top__left__top-section__left">
										<div className="profile__body-container__stats-top__left__top-section__left-image"></div>
										<div className="profile__body-container__stats-top__left__top-section__left-text">
											Earnings
										</div>
									</div>
									<div className="profile__body-container__stats-top__left__top-section__right-icon"></div>
								</div>
								<div className="profile__body-container__stats-top__left__bottom-section">
									<div className="profile__body-container__stats-top__left__bottom-section__current-month">
										<div className="profile__body-container__stats-top__left__bottom-section__current-month__left-text">
											CURRENT MONTH
										</div>
										<div className="profile__body-container__stats-top__left__bottom-section__current-month__right-text">
											N123, 405.00
										</div>
									</div>
									<hr />
									<div className="profile__body-container__stats-top__left__bottom-section__prev-month">
										<div className="profile__body-container__stats-top__left__bottom-section__prev-month__left">
											JANUARY
										</div>
										<div className="profile__body-container__stats-top__left__bottom-section__prev-month__right">
											N56, 890.00
										</div>
									</div>
									<hr />
									<div className="profile__body-container__stats-top__left__bottom-section__prev-month">
										<div className="profile__body-container__stats-top__left__bottom-section__prev-month__left">
											DECEMBER
										</div>
										<div className="profile__body-container__stats-top__left__bottom-section__prev-month__right">
											N223,000.00
										</div>
									</div>
								</div>
							</div>
							<div className="profile__body-container__stats-top__right">
								<div className="profile__body-container__stats-top__left__top-section">
									<div className="profile__body-container__stats-top__left__top-section__left">
										<div className="profile__body-container__stats-top__left__top-section__left-image"></div>
										<div className="profile__body-container__stats-top__left__top-section__left-text">
											Total Calls
										</div>
									</div>
									<div className="profile__body-container__stats-top__left__top-section__right-icon"></div>
								</div>
								<div className="profile__body-container__stats-top__left__bottom-section">
									<div className="profile__body-container__stats-top__left__bottom-section__current-month">
										<div className="profile__body-container__stats-top__left__bottom-section__current-month__left-text">
											CURRENT MONTH
										</div>
										<div className="profile__body-container__stats-top__left__bottom-section__current-month__right-text">
											250
										</div>
									</div>
									<hr />
									<div className="profile__body-container__stats-top__left__bottom-section__prev-month">
										<div className="profile__body-container__stats-top__left__bottom-section__prev-month__left">
											JANUARY
										</div>
										<div className="profile__body-container__stats-top__left__bottom-section__prev-month__right">
											110
										</div>
									</div>
									<hr />
									<div className="profile__body-container__stats-top__left__bottom-section__prev-month">
										<div className="profile__body-container__stats-top__left__bottom-section__prev-month__left">
											DECEMBER
										</div>
										<div className="profile__body-container__stats-top__left__bottom-section__prev-month__right">
											190
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="profile__body-container__stats-bottom">
							<div className="profile__body-container__stats-top__left__top-section">
								<div className="profile__body-container__stats-top__left__top-section__left bottom">
									<div className="profile__body-container__stats-top__left__top-section__left-text">
										Graph Chart
									</div>
								</div>
								<div className="profile__body-container__stats-top__left__top-section__right-icon"></div>
							</div>
							<div className="profile__body-container__stats-top__left__bottom-section bottom">
								<div className="profile__body-container__stats-top__left__bottom-section__current-month">
									<div className="profile__body-container__stats-top__left__bottom-section__current-month__left-text">
										CURRENT MONTH
									</div>
									<div className="profile__body-container__stats-top__left__bottom-section__current-month__right-text">
										---
									</div>
								</div>
								<hr />
								<div className="profile__body-container__stats-top__left__bottom-section__prev-month">
									<div className="profile__body-container__stats-top__left__bottom-section__prev-month__left">
										JANUARY
									</div>
									<div className="profile__body-container__stats-top__left__bottom-section__prev-month__right">
										N56, 890.00
									</div>
								</div>
								<hr />
								<div className="profile__body-container__stats-top__left__bottom-section__prev-month">
									<div className="profile__body-container__stats-top__left__bottom-section__prev-month__left">
										DECEMBER
									</div>
									<div className="profile__body-container__stats-top__left__bottom-section__prev-month__right">
										N223,000.00
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-main__bottom-section about">
					<div className="footer-main__bottom-section__left">
						<div className="footer-main__bottom-section__left__powered-by">
							Powered by NativeTalk
						</div>
						<div className="footer-main__bottom-section__left__copyright">
							Copyright 2020. All right reserved
						</div>
					</div>
					<div className="footer-main__bottom-section__right">
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
		</div>
	);
};

export default ProfilePage;
