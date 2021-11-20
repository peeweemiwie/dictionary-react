import './Synonyms.scss';

const Synonyms = (props) => {
	return (
		<dl className='Synonyms dl'>
			<dt className='dt'>[synonyms]</dt>
			<dd className='dd container-words'>
				{props.array.map((item, index) => {
					return (
						<span className='synonym word' key={index}>
							{item}
						</span>
					);
				})}
			</dd>
		</dl>
	);
};
export default Synonyms;
