const Antonyms = (props) => {
	return (
		<dl className='Antonyms dl'>
			<dt className='dt'>[Antonyms]</dt>
			<dd className='dd container-words'>
				{props.array.map((item, index) => {
					return (
						<span className='word antonym' key={index}>
							{item}
						</span>
					);
				})}
			</dd>
		</dl>
	);
};
export default Antonyms;
