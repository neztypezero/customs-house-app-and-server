import './FloorPlans.css';

import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import FloorPlansMainScreen from "./FloorPlansMainScreen";

import {floorPlanRoutes} from "../../screens/ScreenRoutes";

const AnimatedScreenSwitch = withRouter(({ location }) => (
	<TransitionGroup>
		<CSSTransition key={location.key} classNames="fade" timeout={1000}>
			<Switch location={location}>
				{floorPlanRoutes.map((route) => (
					<Route key={route.path} path={route.path} component={route.component} />
				))}
				<Route key='/floorplans' path='/floorplans' component={FloorPlansMainScreen} />
			</Switch>
		</CSSTransition>
	</TransitionGroup>
));

function FloorPlans() {
	return (
		<div id="floor-plans-screen-container" className="full-screen-container">
			<div id="floor-plans-screen-inner" className="full-screen-inner">
				<div className="padding">
					<AnimatedScreenSwitch />
				</div>
			</div>
		</div>
	);
}

export default FloorPlans;