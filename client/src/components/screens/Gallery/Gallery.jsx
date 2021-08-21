import './Gallery.css';
import '../../SlideShow/SlideShow.css';

import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import GalleryMainScreen from "./GalleryMainScreen";

import { galleryRoutes } from "../../screens/ScreenRoutes";

const AnimatedScreenSwitch = withRouter(({ location }) => (
	<TransitionGroup>
		<CSSTransition key={location.key} classNames="fade" timeout={1000}>
			<Switch location={location}>
				{galleryRoutes.map((route) => (
					<Route key={route.path} path={route.path} component={route.component} />
				))}
				<Route key='/gallery' path='/gallery' component={GalleryMainScreen} />
			</Switch>
		</CSSTransition>
	</TransitionGroup>
));

function Gallery() {
	return (
		<div id="gallery-screen-container" className="full-screen-container">
			<div id="gallery-screen-inner" className="full-screen-inner">
				<div className="padding">
					<AnimatedScreenSwitch />
				</div>
			</div>
		</div>
	);
}

export default Gallery;