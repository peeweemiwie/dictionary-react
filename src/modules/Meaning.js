import React from 'react';
import MeaningArray from './MeaningArray';
const Meaning = (props) => {
	// console.log('props.data', props.data);
	const data = props.data;
	const word = data.word;
	const phoneticsText = data.phonetics[0].text;
	const phoneticsAudio = data.phonetics[0].audio;

	return (
		<div className='Meaning'>
			<h2>{word}</h2>
			<div className='phonetic-text'>[{phoneticsText}]</div>
			<div className='phonetic-audio'>{phoneticsAudio}</div>
			<MeaningArray array={data.meanings} />
			<pre>{JSON.stringify(props.data, null, 2)}</pre>
		</div>
	);
};

export default Meaning;
