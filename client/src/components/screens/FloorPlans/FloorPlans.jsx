import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import FloorPlansMainScreen from "./FloorPlansMainScreen";

import './FloorPlans.css';

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
/*
import React from 'react';
import {
  useQuery,
} from "@apollo/client";

import { QUERY_ROOM_COLLECTIONS } from "../queries/Queries";

function FloorPlan() {
  const { loading, error, data } = useQuery(QUERY_ROOM_COLLECTIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
		<div>
			<ul id="room-collection-list">
			{data.roomCollections.map((roomCollection) => (
				<li key={roomCollection.id}>
					{roomCollection.name}
					<ul id={"level-list-"+roomCollection.id}>
					{roomCollection.levels.map((roomCollectionLevel) => (
						<li key={roomCollectionLevel.id}>
							Level {roomCollectionLevel.level}
						</li>
					))}
					</ul>
				</li>
			))}
			</ul>
		</div>
  );
}

export default FloorPlan;
*/