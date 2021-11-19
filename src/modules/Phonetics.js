const Phonetics = (props) => {
	console.log(props.data);
	return props.data.map((item, index) => {
		return (
			<div className='Phonetics'>
				<div className='text'>[{item.text}]</div>
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
