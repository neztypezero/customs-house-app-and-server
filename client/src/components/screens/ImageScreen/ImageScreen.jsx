import './ImageScreen.css';

function ImageScreen(props) {
	return (
		<div id="image-screen-container" className="full-screen-container">
			<div id="image-screen-inner" className="full-screen-inner">
				<div className="padding">
					{props.children}
				</div>
			</div>
		</div>
	);
}

export default ImageScreen;