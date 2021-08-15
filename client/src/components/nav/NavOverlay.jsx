import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './NavOverlay.css';

function NavOverlay() {
	const location = useLocation();

	return (
		<div id="nav-overlay-container" className="full-screen-container" data-location={location.pathname}>
			<div id="nav-overlay-inner">
				<div className="header-container">
					<div className="customs-house-logo"><Link to="/"></Link></div>
					<div className="customs-house-text"></div>
					<div className="location-text">
						<label className="gallery">Gallery</label>
						<label className="floorplans">Floorplans</label>
						<label className="view">View</label>
						<label className="location">Location</label>
					</div>
				</div>
				<div className="bottom-nav-container">
					<ul id="nav-links-list">
						<li className="gallery"><Link className="customs-house-button" to="/gallery">Gallery</Link></li>
						<li className="floorplans"><Link className="customs-house-button" to="/floorplans">Floorplans</Link></li>
						<li className="view"><Link className="customs-house-button" to="/view">View</Link></li>
						<li className="location"><Link className="customs-house-button" to="/location">Location</Link></li>
					</ul>
					</div>
			</div>
		</div>
	);
}

export default NavOverlay;