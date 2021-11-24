import './AntonymsSynonyms.scss';

const Synonyms = (props) => {
	const handleClick = (event) => {
		const word = event.target.getAttribute('data-word');
		props.handleReceivedWord(word);
	};
	return (
		<dl className='Synonyms Antonyms-Synonyms dl'>
			<dt className='dt'>[synonyms]</dt>
			<dd className='dd container-words'>
				{props.array.map((item) => {
					return (
						<span
							className='synonym word'
							key={item}
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
