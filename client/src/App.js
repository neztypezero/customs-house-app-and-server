import './App.css';

import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {screenRoutes} from "./components/screens/ScreenRoutes";
import NavOverlay from "./components/nav/NavOverlay";

const client = new ApolloClient({
	uri:"http://localhost:4000/graphql",
	cache: new InMemoryCache(),
});

const AnimatedScreenSwitch = withRouter(({ location }) => (
	<TransitionGroup>
		<CSSTransition key={location.key} classNames="fade" timeout={1001}>
			<Switch location={location}>
				{screenRoutes.map((route) => (
					<Route key={route.path} path={route.path} component={route.component} />
				))}
			</Switch>
		</CSSTransition>
	</TransitionGroup>
));

function App() {
	React.useEffect(() => {
		const handleResize = () => {
			const main = document.getElementById('main');
			if (main) {
				let { height } = main.getBoundingClientRect();
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
}

export default App;
