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
		text:'GALLERY | BUILDING',
	},
	{
		component:GallerySuite,
		path:'/gallery/suite',
		text:'GALLERY | SUITE',
	},
	{
		component:GalleryHistory,
		path:'/gallery/history',
		text:'GALLERY | HISTORY',
	},
	{
		component:GalleryMovie,
		path:'/gallery/movie',
		text:'GALLERY | MOVIE',
	},
];

const floorPlanRoutes = [
	{
		component:FloorPlansUrban,
		path:'/floorplans/urban',
		text:'URBAN COLLECTION | FLOORPLANS'
	},
	{
		component:FloorPlansHarbourView,
		path:'/floorplans/harbour-view',
		text:'HARBOUR VIEW COLLECTION | FLOORPLANS'
	},
	{
		component:FloorPlansSuite,
		path:'/floorplans/suite-type',
		text:'SUITE TYPE | FLOORPLANS'
	},
];

const navRoutes = [
	...galleryRoutes,
	...floorPlanRoutes,
	...screenRoutes,
];

export {screenRoutes, galleryRoutes, floorPlanRoutes, navRoutes};
