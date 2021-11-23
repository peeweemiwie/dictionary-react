import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Figure from './Figure';

import './Images.scss';

const Images = (props) => {
	const [imgData, setImgData] = useState(null);

	const handleClick = (event) => {
		setImgData({
			imgLargeSrc: event.target.getAttribute('data-src-large'),
			originalUrl: event.target.getAttribute('data-url'),
			alt: event.target.alt,
		});
	};

	useEffect(() => {
		props.onReceiveLargeImg(imgData);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [imgData]);

	const photos = props.photoArray.map((photo) => (
		<Figure
			key={uuidv4()}
			clickEvent={handleClick}
			src={photo.src.small}
			srcLarge={photo.src.large}
			keyword={props.keyword}
			photographer={photo.photographer}
			originalUrl={photo.url}
		/>
	));

	return <div className='Images'>{photos}</div>;
};

export default Images;
