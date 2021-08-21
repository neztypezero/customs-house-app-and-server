import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import SlideShow from "../../SlideShow/SlideShow";

let ctx = require.context('../../../assets/img/gallery', true);

function GalleryContainer(props) {
	const [images, setImages] = useState(null);
	const { loading, error } = useQuery(props.query, {
			variables:props.variables,
			onCompleted:(data) => {
				let galleries = null;
				if (data.galleries && data.galleries.length > 0) {
					galleries = data.galleries[0];
					if (galleries.images && galleries.images.length > 0) {
						setImages(galleries.images);
					}
				}
			}
		}
	);

	if (loading) return <div></div>;
	if (error) return <div>error</div>;
	if (!images) return <div></div>;

	return (
		<SlideShow>
			{images.map(img => <img src={ctx('./'+img.src).default} alt={img.alt} />)}
		</SlideShow>
	);
}

export default GalleryContainer;
