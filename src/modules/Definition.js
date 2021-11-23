import Synonyms from './Synonyms';
import Antonyms from './Antonyms';
import { v4 as uuidv4 } from 'uuid';
import './Definition.scss';

const Definition = (props) => {
	return (
		<section key={uuidv4()} className='Definition container'>
			<dl className='dl definition'>
				<dt className='dt'>[definition]</dt>
				<dd className='dd'>{props.definition.definition}</dd>
			</dl>
			{props.definition.synonyms.length > 0 && (
				<Synonyms array={props.definition.synonyms} />
			)}
			{props.definition.antonyms.length > 0 && (
				<Antonyms array={props.definition.antonyms} />
			)}
			{props.definition.example && (
				<dl className='dl example'>
					<dt className='dt'>[example]</dt>
					<dd className='dd'>{props.definition.example}</dd>
				</dl>
			)}
		</section>
	);
};

export default Definition;
