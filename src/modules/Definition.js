const Definition = (props) => {
	console.log(props);
	return (
		<div
			key={props.index}
			className='container inner-loop'
			style={{
				border: '1px solid yellow',
				padding: '20px',
				marginBottom: '20px',
			}}
		>
			<div className='definition'>
				[definition]: {props.definition.definition}
			</div>
			<br />
			{props.definition.synonyms.length > 0 && <div>[synonyms]:</div>}
			{props.definition.synonyms.length > 0 &&
				props.definition.synonyms.map((item, index) => {
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
			{props.definition.antonyms.length > 0 && <div>[antonyms]</div>}
			{props.definition.antonyms.length > 0 &&
				props.definition.antonyms.map((item, index) => {
					return (
						<span
							className='inner-inner-loop'
							key={index + item}
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
			{props.definition.example && (
				<div className='example'>[example]: {props.definition.example}</div>
			)}
		</div>
	);
};

export default Definition;
