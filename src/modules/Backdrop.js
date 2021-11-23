import React, { useState } from 'react';
import Figure from './Figure';
import './Backdrop.scss';

const Backdrop = (props) => {
	const [displayLargeImg, setDisplayLargeImg] = useState(true);
	const handleClose = () => {
		setDisplayLargeImg(false);
		props.onRemoveData();
	};
	return (
		<div className='Backdrop' data-display-large={displayLargeImg}>
			<Figure
				key={props.data.imgLargeSrc}
				src={props.data.imgLargeSrc}
				keyword={props.keyword}
				alt={props.data.alt}
				caption={[
					`${props.data.alt}`,
					<a
						className='button btn-primary link'
						href={props.data.originalUrl}
						target='_blank'
						rel='noreferrer'
					>
						Visit
					</a>,
				]}
			/>
			<button className='button btn-close btn-primary' onClick={handleClose}>
				<span className='material-icons-outlined icon'>close</span>
			</button>
		</div>
	);
};

export default Backdrop;
