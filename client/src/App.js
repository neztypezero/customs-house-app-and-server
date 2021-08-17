import './App.css';

import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {screenRoutes} from "./components/screens/ScreenRoutes";
import {screenSaverRoute} from "./components/screens/ScreenRoutes";
import IntroScreen from "./components/screens/IntroScreen/IntroScreen";

import NavOverlay from "./components/nav/NavOverlay";

const client = new ApolloClient({
	uri:"http://localhost:4000/graphql",
	cache: new InMemoryCache(),
});

const AnimatedScreenSwitch = withRouter(({ location }) => {
	return <TransitionGroup>
		<CSSTransition key={location.key} classNames="fade" timeout={1000}>
			<Switch location={location}>
				<Route path={screenSaverRoute.path} component={screenSaverRoute.component} />
				{screenRoutes.map((route) => (
					<Route key={route.path} path={route.path} component={route.component} />
				))}
			</Switch>
		</CSSTransition>
	</TransitionGroup>
});

function App() {
	React.useEffect(() => {
		const handleResize = () => {
			const root = document.getElementById('root');
			const main = document.getElementById('main');
			if (main) {
				let { height } = root.getBoundingClientRect();
				if (height > window.innerHeight) {
					let scale = window.innerHeight/height;
					main.style.transform = "scale("+scale+")";
				} else {
					main.style.transform = "none";
				}
			}
		};
		handleResize();

		window.addEventListener("resize", handleResize);

		return _ => {
			window.removeEventListener("resize", handleResize);
		};
	});

	const [introLoaded, setIntroLoaded] = useState(false);
	if(introLoaded) {
		return (
			<ApolloProvider client={client}>
				<BrowserRouter>
					<div id="main">
						<div className="mainScreenWrapper">
							<AnimatedScreenSwitch />
							<NavOverlay />
						</div>
					</div>
				</BrowserRouter>
			</ApolloProvider>
		);
	} else {
		return <BrowserRouter>
			<div id="main">
				<div className="mainScreenWrapper">
					<IntroScreen onClick={
						(e) => {
							let root = document.getElementById("root");
							if (root.requestFullscreen) {
								root.requestFullscreen();
							} else if (root.webkitRequestFullscreen) { /* Old Safari */
								root.webkitRequestFullscreen();
							} else if (root.msRequestFullscreen) { /* IE11 */
								root.msRequestFullscreen();
							} else if (root.mozRequestFullscreen) { /* Old Firefox */
								root.mozRequestFullscreen();
							}
							setIntroLoaded(true);
						}
					} />
				</div>
			</div>
		</BrowserRouter>
	}
}

export default App;
