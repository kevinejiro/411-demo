import React, { useContext } from "react";
import { useSpring, animated, useTransition } from "react-spring";
import { Switch, Route, __RouterContext } from "react-router-dom";

import AboutPage from "./components/AboutPage/AboutPage";
import CreditPage from "./components/CreditPage/CreditPage";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

const App = () => {
	const { location } = useContext(__RouterContext);
	//  console.log(location, " location");
	// const transitions = useTransition(location, location => location.pathname, {
  //   from: { opacity: 0,
  //      transform: "translate(100%, 0)" 
  //     },
  //   enter: { opacity: 1,
  //      transform: "translate(0%, 0)" 
  //     },
  //   leave: { opacity: 0, 
  //     transform: "translate(-50%, 0)"
  //    }
	// });
	// const fade = useSpring({
	//   from: {
	//     opacity: 0
	//   },
	//   to: {
	//     opacity: 1
	//   }
	// })

	return (
		<>
			<NavBar location={location} />
				<main className="main-class">
					<Switch>
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/about" component={AboutPage} />
						<Route exact path="/credit" component={CreditPage} />
						<Route exact path="/login" component={LoginPage} />
						<Route exact path="/signup" component={LoginPage} />
						<Route exact path="/profile" component={ProfilePage} />
					</Switch>
				</main>
		</>
	);
};

export default App;
