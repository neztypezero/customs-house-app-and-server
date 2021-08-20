import './FloorPlans.css';

import FloorPlansContainer from "./FloorPlansContainer";
import { QUERY_ROOM_COLLECTIONS_BY_NAME } from "../../../db/queries/Queries";

function FloorPlansUrban() {
	return (
		<FloorPlansContainer query={QUERY_ROOM_COLLECTIONS_BY_NAME} variables={{name:"Urban Collection"}}/>
	);
}

export default FloorPlansUrban;