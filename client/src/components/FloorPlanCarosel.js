import React from 'react';
import {
  useQuery,
} from "@apollo/client";

import { QUERY_ROOM_COLLECTIONS } from "../queries/Queries";

function FloorPlanCarosel() {
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

export default FloorPlanCarosel;