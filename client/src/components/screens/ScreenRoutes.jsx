import MainScreen from "./MainScreen/MainScreen";
import Gallery from "./Gallery/Gallery";
import GalleryBuilding from "./Gallery/GalleryBuilding";
import GallerySuite from "./Gallery/GallerySuite";
import GalleryHistory from "./Gallery/GalleryHistory";
import GalleryMovie from "./Gallery/GalleryMovie";
import FloorPlans from "./FloorPlans/FloorPlans";
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

const floorplanRoutes = [
	{
		path:'/floorplans/urban',
		text:'URBAN COLLECTION | FLOORPLANS'
	},
	{
		path:'/floorplans/harbour-view',
		text:'HARBOUR VIEW COLLECTION | FLOORPLANS'
	},
	{
		path:'/floorplans/suite-type',
		text:'SUITE TYPE | FLOORPLANS'
	},
];

const navRoutes = [
	...galleryRoutes,
	...floorplanRoutes,
	...screenRoutes,
];

export {screenRoutes, galleryRoutes, floorplanRoutes, navRoutes};
