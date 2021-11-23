import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Figure from './Figure';
import './Backdrop.scss';

const Backdrop = (props) => {
	const [displayLargeImg, setDisplayLargeImg] = useState(true);
	const [imgLarge, setImgLarge] = useState(null);

	useEffect(() => {
		setImgLarge({
			alt: props.data.alt,
			imgLargeSrc: props.data.imgLargeSrc,
			originalUrl: props.data.originalUrl,
			keyword: props.keyword,
		});
	}, [
		props.data.alt,
		props.data.imgLargeSrc,
		props.data.originalUrl,
		props.keyword,
	]);

	const handleClose = () => {
		setDisplayLargeImg(false);
		setImgLarge(null);
		props.onRemoveData();
	};

	return (
		<div className='Backdrop' data-display-large={displayLargeImg}>
			{imgLarge && (
				<Figure
					key={uuidv4()}
					src={imgLarge.imgLargeSrc}
					keyword={imgLarge.keyword}
					alt={imgLarge.alt}
					caption={[
						`${imgLarge.alt}`,
						<a
							className='button btn-primary link'
							href={imgLarge.originalUrl}
							target='_blank'
							rel='noreferrer'
						>
							Visit
						</a>,
					]}
				/>
			)}
			<button className='button btn-close btn-primary' onClick={handleClose}>
				<span className='material-icons-outlined icon'>close</span>
			</button>
		</div>
	);
};

export default Backdrop;
