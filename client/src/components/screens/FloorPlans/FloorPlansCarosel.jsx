import React from 'react';
import {
  useQuery,
} from "@apollo/client";

import { QUERY_ROOM_COLLECTIONS } from "../queries/Queries";

function FloorPlanCarosel(props) {
  const { loading, error, data } = useQuery(QUERY_ROOM_COLLECTIONS);

  if (loading) return <div></div>;
  if (error) return <div></div>;

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

export default FloorPlanCarosel;