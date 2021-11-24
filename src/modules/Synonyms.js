import './Synonyms.scss';

const Synonyms = (props) => {
	const handleClick = (event) => {
		const word = event.target.getAttribute('data-word');
		props.onReceiveSynonym(word);
	};
	return (
		<dl className='Synonyms dl'>
			<dt className='dt'>[synonyms]</dt>
			<dd className='dd container-words'>
				{props.array.map((item, index) => {
					return (
						<span
							className='synonym word'
							key={index}
							onClick={handleClick}
							data-word={item}
						>
							{item}
						</span>
					);
				})}
			</dd>
		</dl>
	);
};
export default Synonyms;
