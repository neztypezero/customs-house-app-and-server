import React, { useState } from 'react';
import { CSSTransition } from "react-transition-group";

import './SlideShow.css';

function SlideShow(props) {
	const [slideCount] = useState(props.children.length);
	const [slideIndex, setSlideIndex] = useState(1);
	const [slideOffset, setSlideOffset] = useState(0);
	const [slideAnimate, setSlideAnimate] = useState(false);
	const isActive = (index) => {
		if (slideIndex < 1) {
			return (index === slideCount);
		}
		if (slideIndex > slideCount) {
			return (index === 1);
		}
		return (index === slideIndex);
	};

	return (
	<CSSTransition in={slideAnimate} timeout={1000} classNames="slide-show" 

	onEntering={() => {
		setSlideIndex(slideIndex+slideOffset);
	}}
	onEntered={() => {
		setSlideAnimate(false);
		if (slideIndex > slideCount) {
			setSlideIndex(1);
		} else if (slideIndex < 1) {
			setSlideIndex(slideCount);
		} else {

		}
	}}>
		<div className="slide-show-container">
			{
				(
					props.children.length > 1?
						<>
							<div className="slide-show-viewport" data-slide-count={props.children.length} data-slide-index={slideIndex}>
								<div className="slide-container" style={{left:(-slideIndex*100)+"%"}}>
									{props.children[props.children.length-1]}
									{props.children}
									{props.children[0]}
								</div>
							</div>
							<div className="slide-show-prev" onClick={() => {
								setSlideAnimate(true);
								setSlideOffset(-1);
							}}></div>
							<div className="slide-show-next" onClick={() => {
								setSlideAnimate(true);
								setSlideOffset(1);
							}}></div>
							<div className="slide-show-dots">
							{props.children.map((child, i) => {
								let index = i + 1;
								return <div key={'dot-index-'+index} className="dot" data-dot-active={isActive(index)} onClick={() => {setSlideAnimate(true);setSlideOffset(index-slideIndex);}}></div>
							})}
							</div>
						</>
					:props.children
				)
			}
		</div>
	</CSSTransition>
	);
}

export default SlideShow;