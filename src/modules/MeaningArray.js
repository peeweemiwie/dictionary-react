import Definition from './Definition';

const MeaningArray = (props) => {
	return props.array.map((meaning, index) => {
		return (
			<div
				key={index + meaning.partOfSpeech}
				className='container outer-loop'
				style={{
					border: '1px solid pink',
					padding: '20px',
					marginBottom: '20px',
				}}
			>
				<div className='part-of-speech'>
					[part of speech]: {meaning.partOfSpeech}
				</div>
				<br />
				{meaning.definitions.map((definition, index) => {
					return <Definition index={index} definition={definition} />;
				})}
			</div>
		);
	});
};

export default MeaningArray;
