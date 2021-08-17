import './FloorPlans.css';

import FloorPlansContainer from "./FloorPlansContainer";
import { QUERY_ROOMS_BY_SUITE_TYPE } from "../../../queries/Queries";

function FloorPlansSuite() {
	return (
		<FloorPlansContainer query={QUERY_ROOMS_BY_SUITE_TYPE} variables={{}}/>
	);
}

export default FloorPlansSuite;