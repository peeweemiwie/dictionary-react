import Definition from './Definition';
import './MeaningArray.scss';

const MeaningArray = (props) => {
	return props.array.map((meaning, index) => {
		return (
			<div
				key={index + meaning.partOfSpeech}
				className='MeaningArray container'
			>
				<div className='part-of-speech'>{meaning.partOfSpeech}</div>
				{meaning.definitions.map((definition, index) => {
					return <Definition index={index} definition={definition} />;
				})}
			</div>
		);
	});
};

export default MeaningArray;
