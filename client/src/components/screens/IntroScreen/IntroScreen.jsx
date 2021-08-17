import React from 'react';
import { Link } from 'react-router-dom';

import './IntroScreen.css';

function IntroScreen(props) {
	return (
		<div id="intro-screen-container" className="full-screen-container">
			<div id="intro-screen-inner">
				<Link className="customs-house-button main" to="/" onClick={props.onClick}>Enter Customs House</Link>
			</div>
		</div>
	);
}

export default IntroScreen;