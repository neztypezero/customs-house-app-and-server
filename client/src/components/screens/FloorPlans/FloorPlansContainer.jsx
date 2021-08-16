import React, { useState } from 'react';
import {
  useQuery,
} from "@apollo/client";

function FloorPlansContainer(props) {
  const { loading, error, data } = useQuery(props.query, {
  	variables:props.variables,
  	onSuccess:() => {
  		console.log("success!");
  	}
  });
	// const [currentLevelId, setCurrentLevelId] = useState(data.roomCollections[0]);
	// const [currentFloorPlanId, setCurrentFloorPlanId] = useState(1);

  if (loading) return <div></div>;
  if (error) return <div>error</div>;

/*
					<ul className="level-list">
					{roomCollection.levels.map((level, i) => (
						<li key={level.id} id={level.id} data-selected={i===0}>
							Level {level.level}
						</li>
					))}
					</ul>
					<div className="room-container">
					{roomCollection.levels.map((level, i) => (
						<ul className="room-list" data-parent-id={level.id}>
						{level.floorPlans.map((floorPlan, j) => (
							<li key={floorPlan.id} data-selected={j===0}>
								{floorPlan.name}
							</li>
						))}
						</ul>
					))}
					</div>
*/
  return (
		<div className="room-collection-container">
			{data.roomCollections.map((roomCollection) => (
				<div key={roomCollection.id} className="room-collection-nav">
				</div>
			))}
			<div className="room-floor-plan-container">
				{data.roomCollections.map((roomCollection) => (
					<>
					{roomCollection.levels.map((level, i) => (
						<>
						{level.floorPlans.map((floorPlan, j) => (
							<img key={'img-'+floorPlan.id} data-img-index={j} data-selected={i===0&&j===0} data-collection-parent={roomCollection.id} data-level-parent={level.id} src={"/img/floor-plans/"+floorPlan.img} alt="floorPlan" />
						))}
						</>
					))}
					</>
				))}
			</div>
		</div>
  );
}

export default FloorPlansContainer;