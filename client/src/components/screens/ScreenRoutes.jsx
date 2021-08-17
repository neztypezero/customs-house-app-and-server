import MainScreen from "./MainScreen/MainScreen";
import Gallery from "./Gallery/Gallery";
import GalleryBuilding from "./Gallery/GalleryBuilding";
import GallerySuite from "./Gallery/GallerySuite";
import GalleryHistory from "./Gallery/GalleryHistory";
import GalleryMovie from "./Gallery/GalleryMovie";
import FloorPlans from "./FloorPlans/FloorPlans";
import FloorPlansUrban from "./FloorPlans/FloorPlansUrban";
import FloorPlansHarbourView from "./FloorPlans/FloorPlansHarbourView";
import FloorPlansSuite from "./FloorPlans/FloorPlansSuite";
import Location from "./Location/Location";
import View from "./View/View";
import ScreenSaver from "./ScreenSaver/ScreenSaver";

import { Link } from 'react-router-dom';

const screenRoutes = [
	{
		component:Gallery,
		path:'/gallery',
		text:'GALLERY',
	},
	{
		component:FloorPlans,
		path:'/floorplans',
		text:'FLOORPLANS',
	},
	{
		component:View,
		path:'/view',
		text:'VIEW'
	},
	{
		component:Location,
		path:'/location',
		text:'LOCATION'
	},
	{
		component:MainScreen,
		path:'/',
		text:'',
	},
];

const galleryRoutes = [
	{
		component:GalleryBuilding,
		path:'/gallery/building',
		text: <span><Link to="/gallery">GALLERY</Link> | BUILDING</span>,
	},
	{
		component:GallerySuite,
		path:'/gallery/suite',
		text: <span><Link to="/gallery">GALLERY</Link> | SUITE</span>,
	},
	{
		component:GalleryHistory,
		path:'/gallery/history',
		text: <span><Link to="/gallery">GALLERY</Link> | HISTORY</span>,
	},
	{
		component:GalleryMovie,
		path:'/gallery/movie',
		text: <span><Link to="/gallery">GALLERY</Link> | MOVIE</span>,
	},
];

const floorPlanRoutes = [
	{
		component:FloorPlansUrban,
		path:'/floorplans/urban',
		text: <span><Link to="/floorplans">FLOORPLANS</Link> | URBAN COLLECTION</span>,
	},
	{
		component:FloorPlansHarbourView,
		path:'/floorplans/harbour-view',
		text: <span><Link to="/floorplans">FLOORPLANS</Link> | HARBOUR VIEW COLLECTION</span>,
	},
	{
		component:FloorPlansSuite,
		path:'/floorplans/suite-type',
		text: <span><Link to="/floorplans">FLOORPLANS</Link> | SUITE TYPE</span>,
	},
];

const navRoutes = [
	...galleryRoutes,
	...floorPlanRoutes,
	...screenRoutes,
];


const screenSaverRoute = {
	component:ScreenSaver,
	path:'/screenSaver',
	text:''
};

export {screenRoutes, galleryRoutes, floorPlanRoutes, navRoutes, screenSaverRoute};
