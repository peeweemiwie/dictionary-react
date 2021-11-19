const Antonyms = (props) => {
	return (
		<dl className='Antonyms dl'>
			<dt className='dt'>[Antonyms]</dt>
			<dd className='dd'>
				{props.array.map((item, index) => {
					return (
						<span
							className='inner-inner-loop'
							key={index}
							style={{
								border: '1px solid blue',
								margin: '5px',
								display: 'inline-block',
							}}
						>
							{item}
						</span>
					);
				})}
			</dd>
		</dl>
	);
};
export default Antonyms;
