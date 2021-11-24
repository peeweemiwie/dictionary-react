import './AntonymsSynonyms.scss';

const Antonyms = (props) => {
	const handleClick = (event) => {
		const word = event.target.getAttribute('data-word');
		props.handleReceivedWord(word);
	};
	return (
		<dl className='Antonyms Antonyms-Synonyms dl'>
			<dt className='dt'>[Antonyms]</dt>
			<dd className='dd container-words'>
				{props.array.map((item) => {
					return (
						<span
							className='word antonym'
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
export default Antonyms;
