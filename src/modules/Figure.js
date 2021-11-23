import { v4 as uuidv4 } from 'uuid';

const Figure = (props) => {
	return (
		<figure className='Figure' key={uuidv4()} onClick={props.clickEvent}>
			<img
				className='img'
				src={props.src}
				alt={`${props.keyword} by a photographer ${props.photographer}`}
				data-src-large={props.srcLarge}
				data-url={props.originalUrl}
			/>
			{props.caption && (
				<figcaption className='figcaption'>{props.caption}</figcaption>
			)}
		</figure>
	);
};

export default Figure;
