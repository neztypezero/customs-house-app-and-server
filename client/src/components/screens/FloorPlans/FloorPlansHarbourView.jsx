import './FloorPlans.css';

import FloorPlansContainer from "./FloorPlansContainer";
import { QUERY_ROOM_COLLECTIONS_BY_NAME } from "../../../db/queries/Queries";

function FloorPlansHarbourView() {
	return (
		<FloorPlansContainer query={QUERY_ROOM_COLLECTIONS_BY_NAME} variables={{name:"Harbour View Collection"}}/>
	);
}

export default FloorPlansHarbourView;