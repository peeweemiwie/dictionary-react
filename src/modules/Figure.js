const Figure = (props) => {
	return (
		<figure className='Figure' key={props.key} onClick={props.clickEvent}>
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
