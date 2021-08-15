import MainScreen from "./MainScreen/MainScreen";
import Gallery from "./Gallery/Gallery";
import FloorPlans from "./FloorPlans/FloorPlans";
import Location from "./Location/Location";
import View from "./View/View";

const screenRoutes = [
	{
		component:Gallery,
		path:'/gallery',
	},
	{
		component:FloorPlans,
		path:'/floorplans',
	},
	{
		component:View,
		path:'/view',
	},
	{
		component:Location,
		path:'/location',
	},
	{
		component:MainScreen,
		path:'/',
	},
];

export {screenRoutes};
