import Synonyms from './Synonyms';
import Antonyms from './Antonyms';
import { v4 as uuidv4 } from 'uuid';
import './Definition.scss';

const Definition = (props) => {
	const handleReceivedWord = (word) => {
		props.handleReceivedWord(word);
	};
	return props.definitions.map((definition) => {
		return (
			<section key={uuidv4()} className='Definition container'>
				<dl className='dl definition'>
					<dt className='dt'>[definition]</dt>
					<dd className='dd'>{definition.definition}</dd>
				</dl>
				{definition.synonyms.length > 0 && (
					<Synonyms
						array={definition.synonyms}
						handleReceivedWord={handleReceivedWord}
					/>
				)}
				{definition.antonyms.length > 0 && (
					<Antonyms
						array={definition.antonyms}
						handleReceivedWord={handleReceivedWord}
					/>
				)}
				{definition.example && (
					<dl className='dl example'>
						<dt className='dt'>[example]</dt>
						<dd className='dd'>{definition.example}</dd>
					</dl>
				)}
			</section>
		);
	});
};

export default Definition;
