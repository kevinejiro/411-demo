import React from "react";
import { NavLink, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/Group22.svg";
import { ReactComponent as LogoRed } from "../../assets/Groupred22.svg";
import { ReactComponent as Star } from "../../assets/Iconawesome-star.svg";
import profileAvatar from "../../assets/lady1/lady.png"

import "./NavBar.css";

const NavBar = props => {
	let { pathname } = props.location;

	let wrapperClass;
	let navTextClass;
	let renderLogo;
	let starIconClass

	if (pathname !== "/") {
		wrapperClass = "nav-white-wrapper";
		navTextClass = "nav-black-text";
		renderLogo = <LogoRed className="red-logo" />;
		starIconClass = "credit-star-red"
	} else {
		renderLogo = <Logo className="brand-logo" />;
		starIconClass = "credit-star-white"
	}

	// console.log(props.pathname, "location")
	return (
		<nav className={`nav-wrapper ${wrapperClass}`}>
			<div className="nav-main">
				<div className="nav-brand">
					<Link to="/">{renderLogo}</Link>
				</div>
				<div className="nav-items-list">
          <NavLink
						exact
						to="/about"
						className={`about nav-item ${navTextClass}`}
						activeClassName={`about nav-item ${navTextClass} active`}
					>
						About 411
					</NavLink>
					<NavLink
						exact
						to="/credit"
						className={`credit nav-item ${navTextClass}`}
						activeClassName={`credit nav-item ${navTextClass} active`}
					>
						<Star className={starIconClass}/>
						Buy minutes
					</NavLink>
					{pathname !== "/profile" && (
						<NavLink
							exact
							to="/login"
							className={`login nav-item ${navTextClass}`}
							activeClassName={`login nav-item ${navTextClass} active`}
						>
							Login
						</NavLink>
					)}
					{pathname !== "/profile" && (
						<NavLink
							exact
							to="/signup"
							className={`signup nav-item ${navTextClass}`}
							activeClassName={`signup nav-item ${navTextClass} active`}
						>
							Sign Up
						</NavLink>
					)}

					{pathname === "/profile" && (
						<NavLink
							exact
							to="/profile"
							className={`profile nav-item ${navTextClass}`}
							activeClassName={`profile nav-item ${navTextClass} active`}
						>
							Larry Adams
						</NavLink>
					)}
          {pathname === "/profile" && (
          <div className="nav-avatar-wrapper">
            <img src={profileAvatar} alt="profile avatar"/>
          </div>
          )}
          {pathname !== "/" && (
            <hr />
          )}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
