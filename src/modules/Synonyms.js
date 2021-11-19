import './Synonyms.scss';

const Synonyms = (props) => {
	return (
		<dl className='Synonyms dl'>
			<dt className='dt'>[synonyms]</dt>
			<dd className='dd'>
				{props.array.map((item, index) => {
					return (
						<span className='synonym' key={index}>
							{item}
						</span>
					);
				})}
			</dd>
		</dl>
	);
};
export default Synonyms;
