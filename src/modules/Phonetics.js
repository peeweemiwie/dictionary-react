import './Phonetics.scss';

const Phonetics = (props) => {
	return props.data.map((item, index) => {
		return (
			<div className='Phonetics' key={index + item.text}>
				<div className='text'>
					<span>[</span>
					{item.text}
					<span>]</span>
				</div>
				{item.audio && (
					<figure className='audio'>
						<audio controls src={item.audio}>
							Your browser does not support the
							<code>audio</code> element.
						</audio>
					</figure>
				)}
			</div>
		);
	});
};

export default Phonetics;
