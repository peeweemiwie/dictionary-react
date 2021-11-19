const MeaningArray = (props) => {
	return props.array.map((meaning, index) => {
		return (
			<div
				key={index}
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
					return (
						<div
							key={index}
							className='container inner-loop'
							style={{
								border: '1px solid yellow',
								padding: '20px',
								marginBottom: '20px',
							}}
						>
							<div className='definition'>
								[definition]: {definition.definition}
							</div>
							<br />
							{definition.synonyms.length > 0 && <div>[synonyms]:</div>}
							{definition.synonyms.length > 0 &&
								definition.synonyms.map((item, index) => {
									return (
										<span
											className='inner-inner-loop'
											key={index}
											style={{
												border: '1px solid aqua',
												margin: '5px',
												display: 'inline-block',
											}}
										>
											{item}
										</span>
									);
								})}
							<br />
							{definition.antonyms.length > 0 && <div>[antonyms]</div>}
							{definition.antonyms.length > 0 &&
								definition.antonyms.map((item, index) => {
									return (
										<span
											className='inner-inner-loop'
											key={index}
											style={{
												border: '1px solid purple',
												margin: '5px',
												display: 'inline-block',
											}}
										>
											{item}
										</span>
									);
								})}
							<br />
							{definition.example && (
								<div className='example'>[example]: {definition.example}</div>
							)}
						</div>
					);
				})}
			</div>
		);
	});
};

export default MeaningArray;
