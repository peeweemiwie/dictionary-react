import Definition from './Definition';
import './Meaning.scss';

const Meaning = (props) => {
	return props.array.map((meaning, index) => {
		return (
			<div key={index} className='Meaning container'>
				<div className='part-of-speech'>{meaning.partOfSpeech}</div>
				{meaning.definitions.map((definition, index) => {
					return <Definition index={index} definition={definition} />;
				})}
			</div>
		);
	});
};

export default Meaning;
