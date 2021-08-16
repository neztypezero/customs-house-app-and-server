import React from 'react';
import {
  useQuery,
} from "@apollo/client";

function FloorPlansContainer(props) {
  const { loading, error, data } = useQuery(props.query, {
  	variables:props.variables
  });

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

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

export default FloorPlansContainer;