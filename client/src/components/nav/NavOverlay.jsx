import React, { useState } from 'react';
import { Link, Route, Switch, withRouter, useHistory } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './NavOverlay.css';

import {navRoutes} from "../screens/ScreenRoutes";

const AnimatedNavOverlay = withRouter(({ location }) => {
	const history = useHistory();

	React.useEffect(() => {
		let timeSinceLastInput = 1;

		const unload = () => {
			if (timeout > 0) {
				console.log("unload");
				document.removeEventListener("mousemove", handleInput);
				document.removeEventListener("keypress", handleInput);
				clearInterval(timeout);
				timeout = 0;
			}
		}
		const handleInput = () => {
			timeSinceLastInput = 0;
			if (location.pathname.startsWith('/screenSaver')) {
				unload();
				history.goBack();
			}
		};
		let timeout = setInterval(() => {
			if (!location.pathname.startsWith('/screenSaver')) {
				if (timeSinceLastInput >= 300) {
					history.push('/screenSaver');
				}
			}
			timeSinceLastInput += 1;
		}, 1000);

		document.addEventListener("mousemove", handleInput);
		document.addEventListener("keypress", handleInput);

		return _ => {
			unload();
		};
	});
	const isActive = (buttonLocation) => {
		return location.pathname.startsWith(buttonLocation);
	};

	return <div id="nav-overlay-container" className="full-screen-container" data-location={location.pathname}>
		<div id="nav-overlay-inner">
			<div className="header-container">
				<div className="customs-house-logo"><Link to="/"></Link></div>
				<div className="customs-house-text"><Link to="/"></Link></div>
				<div className="location-text">
					<TransitionGroup>
						<CSSTransition key={location.key} classNames="ani-text" timeout={1001}>
							<Switch location={location}>
								{navRoutes.map((route) => (
									<Route key={route.path} path={route.path}>
										<label>{route.text}</label>
									</Route>
								))}
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				</div>
			</div>
			<div className="bottom-nav-container">
				<ul id="nav-links-list">
					<li className="gallery"><Link className="customs-house-button" to="/gallery" data-is-active={isActive('/gallery')}>Gallery</Link></li>
					<li className="floorplans"><Link className="customs-house-button" to="/floorplans" data-is-active={isActive('/floorplans')}>Floorplans</Link></li>
					<li className="view"><Link className="customs-house-button" to="/view" data-is-active={isActive('/view')}>View</Link></li>
					<li className="location"><Link className="customs-house-button" to="/location" data-is-active={isActive('/location')}>Location</Link></li>
				</ul>
				</div>
		</div>
	</div>
});

function NavOverlay() {
	return (
		<AnimatedNavOverlay />
	);
}

export default NavOverlay;