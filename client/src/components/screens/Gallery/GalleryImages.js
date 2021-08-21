let ctx = require.context('../../../assets/img/gallery', true);

let building = [
	{
		src:ctx('./building_gallery1.jpg').default, 
		alt:"View of Customs House render from Government and Wharf at night with people walking."
	},
	{
		src:ctx('./building_gallery2.jpg').default, 
		alt:"View from above Customs House looking towards litup Parliament buildings at night."
	},
	{
		src:ctx('./building_gallery3.jpg').default, 
		alt:"View of Customs House render from Government and Wharf at day with pedestrians and cyclists crossing road."
	},
];

let suite = [
	{
		src:ctx('./interiors_Gallery1.jpg').default, 
		alt:"interior shot 1."
	},
	{
		src:ctx('./interiors_Gallery2.jpg').default, 
		alt:"interior shot 2."
	},
	{
		src:ctx('./interiors_Gallery3.jpg').default, 
		alt:"interior shot 3."
	},
	{
		src:ctx('./interiors_Gallery4.jpg').default, 
		alt:"interior shot 4."
	},
	{
		src:ctx('./interiors_Gallery5.jpg').default, 
		alt:"interior shot 5."
	},
	{
		src:ctx('./interiors_Gallery6.jpg').default, 
		alt:"interior shot 6."
	},
	{
		src:ctx('./interiors_Gallery7.jpg').default, 
		alt:"interior shot 7."
	},
	{
		src:ctx('./interiors_Gallery8.jpg').default, 
		alt:"interior shot 8."
	},
	{
		src:ctx('./interiors_Gallery9.jpg').default, 
		alt:"interior shot 9."
	},
];

let history = [
	{
		src:ctx('./heritageGallery1.jpg').default, 
		alt:"Construction taking place in 1914."
	},
	{
		src:ctx('./heritageGallery2.jpg').default, 
		alt:"large gathering of people in early 1900's inner harbour Victoria with Customs House in the background."
	},
	{
		src:ctx('./heritageGallery3.jpg').default, 
		alt:"5 early slides of the Customs House"
	},
	{
		src:ctx('./heritageGallery4.jpg').default, 
		alt:"2 early slides of the Customs House"
	},
];

export {
	building,
	suite,
	history,
};