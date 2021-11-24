import Definition from './Definition';
import { v4 as uuidv4 } from 'uuid';
import './Meaning.scss';

const Meaning = (props) => {
	const handleReceivedWord = (word) => {
		props.handleReceivedWord(word);
	};
	return props.array.map((meaning) => {
		return (
			<div key={uuidv4()} className='Meaning container'>
				<div className='part-of-speech'>{meaning.partOfSpeech}</div>
				<Definition
					definitions={meaning.definitions}
					handleReceivedWord={handleReceivedWord}
				/>
			</div>
		);
	});
};

export default Meaning;
